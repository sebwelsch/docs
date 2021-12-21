import React, {useState, useMemo} from 'react';
import GraphiQL from 'graphiql';
import { Link } from 'gatsby';

import {ApiCredentials, setApiCredentials, AppDispatch, setCreateSignatureOrder} from '../state/store';
import {useAppDispatch, useAppSelector} from '../state/hooks';

function graphQLFetcher(graphQLParams, credentials: ApiCredentials) {
  return fetch(
    'https://signatures-api-prod.azurewebsites.net/v1/graphql',
    {
      method: 'post',
      headers: Object.assign({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }, credentials ? {
        Authorization: `Basic ${btoa(`${credentials.clientID}:${credentials.clientSecret}`)}`
      } : {}),
      body: JSON.stringify(graphQLParams),
      credentials: 'omit',
    },
  ).then(function (response) {
    return response.json().then(response => {
      return response;
    }).catch(function () {
      return response.text();
    });
  });
}

function graphQLFetcherFactory(credentials: ApiCredentials, dispatch: AppDispatch) {
  return (graphQLParams) => {
    return graphQLFetcher(graphQLParams, credentials).then(response => {
      if (response.data) {
        if (response.data.createSignatureOrder) {
          dispatch(setCreateSignatureOrder(response.data.createSignatureOrder));
        }
        if (response.data.addSignatory) {
        }
      }

      return response;
    });
  }
}

export default function GraphQLExplorer(props: {query?: string, variables?: string | any}) {
  const {query, variables} = props;
  const credentials = useAppSelector(state => state.auth);
  const dispatch = useAppDispatch();
  const graphqlFetcher = useMemo(() => graphQLFetcherFactory(credentials, dispatch), [credentials, dispatch]);

  return (
    <div className="hidden lg:block">
      <p className="bg-gray-300 p-2 rounded-t text-yellow mb-0">
        Queries are executed against your actual application. Please make sure you are using test credentials.
      </p>
      <div style={{height: "600px"}} className="relative">
        <GraphiQL
          fetcher={graphqlFetcher}
          defaultVariableEditorOpen={true}
          defaultSecondaryEditorOpen={true}
          query={query}
          variables={typeof variables === 'object' ? JSON.stringify(variables, null, 2) : variables}
          docExplorerOpen={false}
          headerEditorEnabled={false}
        />

        {!credentials && (<CredentialsOverlay />)}
      </div>
    </div>
  );
}

function CredentialsOverlay() {
  const dispatch = useAppDispatch();

  const [clientID, setClientID] = useState('');
  const [clientSecret, setClientSecret] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    dispatch(setApiCredentials({
      clientID,
      clientSecret
    }));
  };

  return (
    <div className="w-full h-full bg-white/60 backdrop-blur absolute top-0 left-0 z-20 flex flex-col items-center justify-center">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
        <p>Please enter your <Link to="/document-signatures/getting-started/register-application/">API credentials</Link> to use this GraphQL Example</p>
        <p>Queries are executed against your actual application. Please make sure you are using test credentials.</p>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="clientID">
            Client ID
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="clientID"
            type="text"
            placeholder="Client ID"
            onChange={(event) => setClientID(event.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="clientSecret">
            Client Secret
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="clientSecret"
            type="password"
            placeholder="Client Secret"
            onChange={(event) => setClientSecret(event.target.value)}
            required
          />
        </div>
        <div className="flex items-center justify-between">
          <button className="bg-blue text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}