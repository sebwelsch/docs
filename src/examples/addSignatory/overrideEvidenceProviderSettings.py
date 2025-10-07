from criipto_signatures import CriiptoSignaturesSDKSync
from criipto_signatures.models import (
  CreateSignatureOrderInput,
  DocumentInput,
  PadesDocumentInput,
  DocumentStorageMode,
  AddSignatoryInput,
  CriiptoVerifySignatureEvidenceProvider,
  CriiptoVerifyProviderInput,
  SignatoryEvidenceProviderInput,
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
        )
      )
    ],
  )
)

criiptoVerifyEvidenceProviderId = next(
  (
    evidenceProvider.id
    for evidenceProvider in signatureOrder.evidenceProviders
    if isinstance(evidenceProvider, CriiptoVerifySignatureEvidenceProvider)
  ),
  None,
)

if criiptoVerifyEvidenceProviderId is None:
  raise Exception("Criipto Verify Evidence Provider not found")

# Add signatory
signatory = client.addSignatory(
  AddSignatoryInput(
    signatureOrderId=signatureOrder.id,
    evidenceProviders=[
      SignatoryEvidenceProviderInput(
        id=criiptoVerifyEvidenceProviderId,
        criiptoVerify=CriiptoVerifyProviderInput(
          acrValues=[
            "urn:grn:authn:dk:mitid:substantial",
            "urn:grn:authn:se:bankid:another-device:qr",
            "urn:grn:authn:no:bankid:substantial",
          ],
          message="signatory message",
          loginHint="signatory login hint",
        ),
      )
    ],
  )
)

print(
  signatory.href
)  # Signing link, redirect user to this link, or send it in an email
