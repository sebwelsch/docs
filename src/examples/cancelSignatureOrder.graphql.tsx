import React from 'react';
import GraphQLExplorer from '../components/GraphQLExplorer';
import { CancelSignatureOrderInput } from "../../graphql-signatures-types";
import { ExampleData } from '../state/store';
import { useAppSelector } from '../state/hooks';

export const query = /* Signatures GraphQL */`
mutation examplesCancelSignatureOrder(
  $input: CancelSignatureOrderInput!
) {
  cancelSignatureOrder(input: $input) {
    signatureOrder {
      id
    }
  }
}
`.trim();

export const variables = (data: ExampleData) : {input: CancelSignatureOrderInput} => ({
  input: {
    signatureOrderId: data.createSignatureOrder?.signatureOrder.id || "[signatureOrder.id]"
  }
});

export function Explorer() {
  const data = useAppSelector(state => state.exampleData);

  return (
    <GraphQLExplorer query={query.trim()} variables={variables(data)} />
  );
}