from criipto_signatures import CriiptoSignaturesSDKSync
from criipto_signatures.models import (
  CreateSignatureOrderInput,
  DocumentInput,
  PadesDocumentInput,
  DocumentStorageMode,
  EvidenceProviderInput,
  CriiptoVerifyProviderInput,
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
    evidenceProviders=[
      EvidenceProviderInput(
        criiptoVerify=CriiptoVerifyProviderInput(
          acrValues=["urn:grn:authn:se:bankid:same-device"],
          alwaysRedirect=True,
          scope="openid ssn",
          loginHint="message:U2lnbmluZyBkb2N1bWVudHM=",
        )
      )
    ],
  )
)

print(signatureOrder.id)
