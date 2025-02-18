using Criipto.Signatures;
using Criipto.Signatures.Models;

using (var client = new CriiptoSignaturesClient("{YOUR_CRIIPTO_CLIENT_ID}", "{YOUR_CRIIPTO_CLIENT_SECRET}")) {
    // Setup document input
    var documents = new List<DocumentInput>{
        new DocumentInput {
            pdf = new PadesDocumentInput {
                title = "Dotnet Sample",
                blob = new Byte[64], // Should be the bytes of a PDF file
                storageMode = DocumentStorageMode.Temporary
            }
        }
    };

    // create signature orders and add signatories
    // (A)
    var signatureOrderA = await client.CreateSignatureOrder(
      new CreateSignatureOrderInput
      {
          title = "Dotnet Sample A",
          documents = documents
      }
    );

    var signatoryA = await client.AddSignatory(signatureOrderA);

    // (B)
    var signatureOrderB = await client.CreateSignatureOrder(
      new CreateSignatureOrderInput
      {
          title = "Dotnet Sample B",
          documents = documents
      }
    );

    var signatoryB = await client.AddSignatory(signatureOrderB);

    // create batch signatory
    var createBatchSignatoryInput = new CreateBatchSignatoryInput
    {
      items = new List<BatchSignatoryItemInput>
      {
        new BatchSignatoryItemInput { signatoryId = signatoryA.id, signatureOrderId = signatureOrderA.id },
        new BatchSignatoryItemInput { signatoryId = signatoryB.id, signatureOrderId = signatureOrderB.id }
      }
    };

    var batchSignatory = await client.CreateBatchSignatory(createBatchSignatoryInput);

    Console.WriteLine($"Batch signatory href: {batchSignatory.href}");
    // ...
}

