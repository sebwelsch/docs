from criipto_signatures import CriiptoSignaturesSDKSync
from criipto_signatures.models import (
  CreateBatchSignatoryInput,
  BatchSignatoryItemInput,
)


client = CriiptoSignaturesSDKSync(
  "{YOUR_CRIIPTO_CLIENT_ID}", "{YOUR_CRIIPTO_CLIENT_SECRET}"
)

batchSignatory = client.createBatchSignatory(
  CreateBatchSignatoryInput(
    items=[
      BatchSignatoryItemInput(
        signatoryId="[signatoryA.id]", signatureOrderId="[signatureOrderA.id]"
      ),
      BatchSignatoryItemInput(
        signatoryId="[signatoryB.id]", signatureOrderId="[signatureOrderB.id]"
      ),
    ]
  )
)

print(batchSignatory.href)
