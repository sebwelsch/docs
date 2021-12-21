import React from 'react';
import GraphQLExplorer from '../components/GraphQLExplorer';
import { AddSignatoryInput } from "../../graphql-signatures-types";
import { ExampleData } from '../state/store';
import { useAppSelector } from '../state/hooks';

export const query = /* Signatures GraphQL */`
mutation exampleAddSignatoryPreapproved(
  $input: AddSignatoryInput!
) {
  addSignatory(input: $input) {
    signatory {
      id
      href
    }
  }
}
`;

export const variables = (data: ExampleData) : {input: AddSignatoryInput} => ({
  input: {
    signatureOrderId: data?.createSignatureOrder?.signatureOrder.id || "[signatureOrder.id]",
    documents: data.createSignatureOrder ? data.createSignatureOrder.signatureOrder.documents.map(document => ({
      id: document.id,
      preapproved: true
    })) : [
      {
        id: "[signatureOrder.documents[...].id]",
        preapproved: true
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