import { AddSignatoryInput } from "../../graphql-signatures-types";
import { ExampleData } from '../state/store';

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