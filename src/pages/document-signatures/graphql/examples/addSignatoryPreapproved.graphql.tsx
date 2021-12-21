import React from 'react';
import GraphQLExplorer, {getExampleData} from '../../../../components/GraphQLExplorer';
import { AddSignatoryInput } from "../../../../../graphql-signatures-types";

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

export const variables = () : {input: AddSignatoryInput} => ({
  input: {
    signatureOrderId: getExampleData()['signatureOrder.id'] || "[signatureOrder.id]",
    documents: [
      {
        id: "[REQUIRED]",
        preapproved: true
      }
    ]
  }
});

export function Explorer() {
  return (
    <GraphQLExplorer query={query.trim()} variables={variables()} />
  )
}