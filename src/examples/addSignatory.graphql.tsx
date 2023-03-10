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

export const sealPositionVariables = (data: ExampleData) : {input: AddSignatoryInput} => ({
  input: {
    signatureOrderId: data?.createSignatureOrder?.signatureOrder.id || "[signatureOrder.id]",
    documents: [
      {
        id: data.createSignatureOrder?.signatureOrder.documents[1].id || "[signatureOrder.documents[...].id]",
        pdfSealPosition: {
          page: 1,
          x: 15,
          y: 15
        }
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

export const displayNameVariables = (data: ExampleData) : {input: AddSignatoryInput} => ({
  input: {
    signatureOrderId: data?.createSignatureOrder?.signatureOrder.id || "[signatureOrder.id]",
    signatureAppearance: {
      identifierFromEvidence: [],
      displayName: [
        {
          template: '{{name}} of {{company}}',
          replacements: [
            {
              placeholder: 'name',
              fromEvidence: [
                'name',
                'http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name'
              ]
            },
            {
              placeholder: 'company',
              fromEvidence: [
                '2.5.4.10',
              ]
            }
          ]
        },
        {
          template: '{{name}}',
          replacements: [
            {
              placeholder: 'name',
              fromEvidence: [
                'name',
                'http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name'
              ]
            }
          ]
        },
        {
          template: 'Anonymous'
        }
      ]
    }
  }
});

export const roleVariables = (data: ExampleData) : {input: AddSignatoryInput} => ({
  input: {
    signatureOrderId: data?.createSignatureOrder?.signatureOrder.id || "[signatureOrder.id]",
    role: 'Chairman'
  }
});