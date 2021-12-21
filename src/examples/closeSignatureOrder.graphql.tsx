import React from 'react';
import GraphQLExplorer from '../components/GraphQLExplorer';
import { CloseSignatureOrderInput } from "../../graphql-signatures-types";
import { ExampleData } from '../state/store';
import { useAppSelector } from '../state/hooks';

export const query = /* Signatures GraphQL */`
mutation examplesCloseSignatureOrder(
  $input: CloseSignatureOrderInput!
) {
  closeSignatureOrder(input: $input) {
    signatureOrder {
      id

      documents {
        id
        blob
      }
    }
  }
}
`.trim();

export const variables = (data: ExampleData) : {input: CloseSignatureOrderInput} => ({
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