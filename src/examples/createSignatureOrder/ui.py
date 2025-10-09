from criipto_signatures import CriiptoSignaturesSDKSync
from criipto_signatures.models import (
  CreateSignatureOrderInput,
  DocumentInput,
  PadesDocumentInput,
  DocumentStorageMode,
  CreateSignatureOrderUIInput,
  SignatureOrderUILogoInput,
  Language,
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
    ui=CreateSignatureOrderUIInput(
      signatoryRedirectUri="http://example.com",
      language=Language.DA_DK,
      logo=SignatureOrderUILogoInput(
        src="https://www.criipto.com/hubfs/logo.svg",
        href="https://www.criipto.com",
      ),
      stylesheet="https://signatures-storybook.criipto.com/custom.css",
    ),
  )
)

print(signatureOrder.id)
