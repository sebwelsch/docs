from criipto_signatures import CriiptoSignaturesSDKSync
from criipto_signatures.models import (
  CreateSignatureOrderInput,
  DocumentInput,
  PadesDocumentInput,
  DocumentStorageMode,
  CreateSignatureOrderWebhookInput,
)
from secrets import token_urlsafe


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
    webhook=CreateSignatureOrderWebhookInput(
      url="https://httpbin.org/post",
      validateConnectivity=True,
      # Use a unique cryptographically random value for each signature order
      secret=token_urlsafe(64),
    ),
  )
)

print(signatureOrder.id)
