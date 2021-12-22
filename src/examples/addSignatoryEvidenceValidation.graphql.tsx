import { AddSignatoryInput } from "../../graphql-signatures-types";
import { ExampleData } from '../state/store';

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