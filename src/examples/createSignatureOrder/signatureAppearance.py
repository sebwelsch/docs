from criipto_signatures import CriiptoSignaturesSDKSync
from criipto_signatures.models import (
  CreateSignatureOrderInput,
  DocumentInput,
  PadesDocumentInput,
  DocumentStorageMode,
  SignatureAppearanceInput,
)

client = CriiptoSignaturesSDKSync(
  "{YOUR_CRIIPTO_CLIENT_ID}", "{YOUR_CRIIPTO_CLIENT_SECRET}"
)

# Create signature order
signatureOrder = client.createSignatureOrder(
  CreateSignatureOrderInput(
    title="Python sample",
    documents=[
      DocumentInput(
        pdf=PadesDocumentInput(
          title="My document",
          blob=bytes("...", "utf-8"),  # bytes object, or a base64 encoded string
          storageMode=DocumentStorageMode.Temporary,
        ),
      )
    ],
    signatureAppearance=SignatureAppearanceInput(
      identifierFromEvidence=[
        "cprNumberIdentifier",
        "dk:gov:saml:attribute:CprNumberIdentifier",
        "ssn",
        "http://schemas.grean.id/claims/se/ssn",
        "socialno",
        "http://schemas.grean.id/claims/no/socialno",
      ]
    ),
  )
)

print(signatureOrder.id)
