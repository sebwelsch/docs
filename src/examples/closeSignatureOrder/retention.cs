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

    // Setup signature order input
    var createSignatureOrderInput = new CreateSignatureOrderInput
    {
        title = "Dotnet Sample",
        documents = documents
    };

    // Create signature order
    var signatureOrder = await client.CreateSignatureOrder(createSignatureOrderInput);

    // Close signature order
    var closedSignatureOrder = await client.CloseSignatureOrder(
        signatureOrder.id,
        new CloseSignatureOrderInput() {
            retainDocumentsForDays = 7
        }
    );

    foreach (var document in closedSignatureOrder.documents)
    {
        // document.blob is a byte array containing the signed/closed PDF

        foreach (var signature in document.signatures)
        {
            if (signature is JWTSignature jwtSignature)
            {
                // jwtSignature.jwt will contain the JWT evidence for this signature
                // jwtSignature.claims will contain the claims extracted from the JWT evidence
            }
        }
    }
}
