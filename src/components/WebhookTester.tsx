import React, { useState, useMemo } from 'react';
import { useAppSelector } from '../state/hooks';
import { CredentialsForm, SignatoryCredentials } from './GraphQLExplorer';

import {graphQLFetcher} from './GraphQLExplorer';

import { AddSignatoryOutput, CreateSignatureOrderOutput } from '../../graphql-signatures-types';

import {query as createSignatureOrderQuery, variables as createSignatureOrderVariables} from '../examples/createSignatureOrder.graphql';
import {query as addSignatoryQuery} from '../examples/addSignatory.graphql';

type WEBHOOK_EVENT = 'SIGNATORY_REJECTED';

export const rejectSignatureOrderQuery = /* Signatures GraphQL */`
mutation RejectSignatureOrderModalMutation($input: RejectSignatureOrderInput!) {
  rejectSignatureOrder(input: $input) {
    viewer {
      ... on SignatoryViewer {
        status
      }
    }
  }
}
`

export default function WebhookTester() {
  const [url, setUrl] = useState('');
  const [event, setEvent] = useState<WEBHOOK_EVENT>('SIGNATORY_REJECTED');
  const credentials = useAppSelector(state => state.auth);
  const [signatureOrderCache, setSignatureOrderCache] = useState<[string | null, {createSignatureOrder: CreateSignatureOrderOutput} | null]>([null, null]);

  const handleSubmit = async (formEvent: React.FormEvent) => {
    formEvent.preventDefault();

    let [signatureOrderUrl, signatureOrder] = signatureOrderCache;

    if (signatureOrderUrl !== url && !signatureOrder) {
      const signatureOrderResponse = await graphQLFetcher<{createSignatureOrder: CreateSignatureOrderOutput}>({
        query: createSignatureOrderQuery,
        variables: createSignatureOrderVariables({
          webhook: {
            url
          },
          disableVerifyEvidenceProvider: true,
          evidenceProviders: [
            {
              noop: {
                name: "WebhookTester"
              }
            }
          ]
        })
      }, credentials);

      if (signatureOrderResponse.errors) throw new Error(signatureOrderResponse.errors[0].message);

      [signatureOrderUrl, signatureOrder] = [url, signatureOrderResponse.data!];
      setSignatureOrderCache([url, signatureOrderResponse.data!]);
    }

    console.log(signatureOrder);

    const signatoryResponse = await graphQLFetcher<{addSignatory: AddSignatoryOutput}>({
      query: addSignatoryQuery,
      variables: {
        input: {
          signatureOrderId: signatureOrder?.createSignatureOrder.signatureOrder.id
        }
      }
    }, credentials);

    if (signatoryResponse.errors) throw new Error(signatoryResponse.errors[0].message);

    console.log(signatoryResponse.data?.addSignatory);
    const token = signatoryResponse.data?.addSignatory.signatory.token;
    if (event === 'SIGNATORY_REJECTED') {
      const rejectResponse = await graphQLFetcher({
        query: rejectSignatureOrderQuery,
        variables: {
          input: {
            dummy: true
          }
        }
      }, {token} as SignatoryCredentials);

      if (rejectResponse.errors) throw new Error(rejectResponse.errors[0].message);
    }
  }

  if (!credentials) return <CredentialsForm />;

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4 grid grid-cols-3 gap-4">
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="url">
            Webhook URL
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="url"
            type="text"
            placeholder="Webhook URL"
            value={url}
            onChange={(event) => setUrl(event.target.value)}
            required
          />
        </div>
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="event">
            Event
          </label>
          <select
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="event"
            value={event}
            onChange={(event) => setEvent(event.target.value as WEBHOOK_EVENT)}
            required
          >
            <option value="SIGNATORY_REJECTED">SIGNATORY_REJECTED</option>
          </select>
        </div>
      </div>

      <button className="bg-blue text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
        Execute
      </button>
    </form>
  );
}