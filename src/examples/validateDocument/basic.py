from criipto_signatures import CriiptoSignaturesSDKSync
from criipto_signatures.models import ValidateDocumentInput


client = CriiptoSignaturesSDKSync(
  "{YOUR_CRIIPTO_CLIENT_ID}", "{YOUR_CRIIPTO_CLIENT_SECRET}"
)

result = client.validateDocument(
  ValidateDocumentInput(
    pdf=bytes("...", "utf-8")  # Should be a bytes object or base64 encoded string.
  )
)

print(result.valid)  # Whether or not document is valid
print(result.errors)  # Any errors
print(result.fixable)  # If errors are fixable
