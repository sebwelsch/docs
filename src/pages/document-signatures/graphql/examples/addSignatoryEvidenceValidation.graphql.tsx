import React from 'react';
import GraphQLExplorer, {getExampleData} from '../../../../components/GraphQLExplorer';
import { AddSignatoryInput } from "../../../../../graphql-signatures-types";

export const query = /* Signatures GraphQL */`
mutation exampleAddSignatoryEvidenceValidation(
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
    evidenceValidation: [
      {key: "cprNumberIdentifier", value: "11223344-5555"}
    ]
  }
});

export function Explorer() {
  return (
    <GraphQLExplorer query={query.trim()} variables={variables()} />
  )
}