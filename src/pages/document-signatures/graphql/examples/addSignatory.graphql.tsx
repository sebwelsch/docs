import React from 'react';
import GraphQLExplorer from '../../../../components/GraphQLExplorer';
import { ExampleAddSignatoryMutationVariables } from "../../../../../signatures-graphql-types";

export const query = /* Signatures GraphQL */ `
mutation exampleAddSignatory(
  $input: AddSignatoryInput!
) {
  addSignatory(input: $input) {
    signatureOrder {
      signatories {
        id
        href
      }
    }

    signatory {
      id
      href
    }
  }
}
`.trim();

export const variables = () : ExampleAddSignatoryMutationVariables => ({
  input: {
    signatureOrderId: "[REQUIRED]"
  }
});

export function Explorer() {
  return (
    <GraphQLExplorer query={query} variables={variables()} />
  )
}