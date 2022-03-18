import { AddSignatoryInput } from "../../graphql-signatures-types";
import { ExampleData } from '../state/store';

export const query = /* Signatures GraphQL */`
mutation exampleAddSignatory(
  $input: AddSignatoryInput!
) {
  addSignatory(input: $input) {
    signatory {
      id
      href
      token
    }
  }
}
`;

export const variables = (data: ExampleData) : {input: AddSignatoryInput} => ({
  input: {
    signatureOrderId: data?.createSignatureOrder?.signatureOrder.id || "[signatureOrder.id]"
  }
});

export const drawableExampleVariables = (data: ExampleData) : {input: AddSignatoryInput} => ({
  input: {
    signatureOrderId: data?.createSignatureOrder?.signatureOrder.id || "[signatureOrder.id]",
    evidenceProviders: [
      {
        id: 
          (data.createSignatureOrder?.signatureOrder.evidenceProviders.find(s => s.__typename === 'DrawableSignatureEvidenceProvider') ??
          data.createSignatureOrder?.signatureOrder.evidenceProviders[0])?.id
          ||
          "[signatureOrder.evidenceProviders[0].id]"
      }
    ]
  }
});

export const preapprovedVariables = (data: ExampleData) : {input: AddSignatoryInput} => ({
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

export const scopedVariables = (data: ExampleData) : {input: AddSignatoryInput} => ({
  input: {
    signatureOrderId: data?.createSignatureOrder?.signatureOrder.id || "[signatureOrder.id]",
    documents: [
      {
        id: data.createSignatureOrder?.signatureOrder.documents[1].id || "[signatureOrder.documents[...].id]"
      }
    ]
  }
});

export const evidenceValidationVariables = (data: ExampleData) : {input: AddSignatoryInput} => ({
  input: {
    signatureOrderId: data?.createSignatureOrder?.signatureOrder.id || "[signatureOrder.id]",
    evidenceValidation: [
      {key: "cprNumberIdentifier", value: "11223344-5555"}
    ]
  }
});