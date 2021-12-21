import React from 'react';
import GraphQLExplorer from '../components/GraphQLExplorer';
import { AddSignatoryInput } from "../../graphql-signatures-types";
import { ExampleData } from '../state/store';
import { useAppSelector } from '../state/hooks';

export const query = /* Signatures GraphQL */`
mutation exampleAddSignatoryScoped(
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
    documents: [
      {
        id: data.createSignatureOrder?.signatureOrder.documents[1].id || "[signatureOrder.documents[...].id]"
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