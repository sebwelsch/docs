import React from 'react';
import GraphQLExplorer from '../components/GraphQLExplorer';
import { AddSignatoriesInput } from "../../graphql-signatures-types";
import { ExampleData } from '../state/store';
import { useAppSelector } from '../state/hooks';

export const query = /* Signatures GraphQL */`
mutation exampleAddSignatories(
  $input: AddSignatoriesInput!
) {
  addSignatories(input: $input) {
    signatories {
      id
      href
    }
  }
}
`;

export const variables = (data: ExampleData) : {input: AddSignatoriesInput} => ({
  input: {
    signatureOrderId: data?.createSignatureOrder?.signatureOrder.id || "[signatureOrder.id]",
    signatories: [
      {
        reference: 'A',
        documents: data.createSignatureOrder ? data.createSignatureOrder.signatureOrder.documents.map(document => ({
          id: document.id,
          preapproved: true
        })) : [
          {
            id: "[signatureOrder.documents[...].id]",
            preapproved: true
          }
        ]
      },
      {
        reference: 'B',
        evidenceValidation: [
          {key: "cprNumberIdentifier", value: "11223344-5555"}
        ]
      }
    ]
  }
});

export function Explorer() {
  const data = useAppSelector(state => state.exampleData);

  return (
    <GraphQLExplorer query={query.trim()} variables={variables(data)} />
  );
}