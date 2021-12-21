import React from 'react';
import GraphQLExplorer from '../../../../components/GraphQLExplorer';
import { AddSignatoryInput } from "../../../../../graphql-signatures-types";

export const query = /* Signatures GraphQL */`
mutation exampleAddSignatoryScoped(
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
`;

export const variables = () : {input: AddSignatoryInput} => ({
  input: {
    signatureOrderId: "[REQUIRED]",
    documents: [
      {
        id: "[REQUIRED]"
      },
      {
        id: "[LEAVE OUT DOCUMENT ID TO REMOVE FOR SIGNATORY]"
      }
    ]
  }
});

export function Explorer() {
  return (
    <GraphQLExplorer query={query.trim()} variables={variables()} />
  )
}