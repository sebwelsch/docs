import React from 'react';
import GraphQLExplorer from '../../../../components/GraphQLExplorer';
import { AddSignatoryInput } from "../../../../../graphql-signatures-types";
import { ExampleData } from '../../../../state/store';
import { useAppSelector } from '../../../../state/hooks';

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

export const variables = (data: ExampleData) : {input: AddSignatoryInput} => ({
  input: {
    signatureOrderId: data?.createSignatureOrder?.signatureOrder.id || "[signatureOrder.id]",
    evidenceValidation: [
      {key: "cprNumberIdentifier", value: "11223344-5555"}
    ]
  }
});

export function Explorer() {
  const data = useAppSelector(state => state.exampleData);

  return (
    <GraphQLExplorer query={query.trim()} variables={variables(data)} />
  );
}