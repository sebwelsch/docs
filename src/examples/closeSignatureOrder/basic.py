from criipto_signatures import CriiptoSignaturesSDKSync
from criipto_signatures.models import (
  CreateSignatureOrderInput,
  DocumentInput,
  PadesDocumentInput,
  DocumentStorageMode,
  CloseSignatureOrderInput,
  JWTSignature,
)
from criipto_signatures.operations import (
  CloseSignatureOrder_CloseSignatureOrderOutput_SignatureOrder_Document_PdfDocument,
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


# Close signature order
closedSignatureOrder = client.closeSignatureOrder(
  CloseSignatureOrderInput(signatureOrderId=signatureOrder.id)
)

for document in closedSignatureOrder.documents:
  if (
    isinstance(
      document,
      CloseSignatureOrder_CloseSignatureOrderOutput_SignatureOrder_Document_PdfDocument,
    )
  ) and document.signatures is not None:
    # document.blob is a bytes object containing the signed/closed PDF
    for signature in document.signatures:
      if isinstance(signature, JWTSignature):
        # signature.jwt holds the authentication evidence used in the signature
        print(signature.jwt)
