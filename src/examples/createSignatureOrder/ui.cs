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
        documents = documents,
        ui = new CreateSignatureOrderUiInput() {
            signatoryRedirectUri = "http://example.com",
            language = Language.DA_DK,
            logo = new SignatureOrderUiLogoInput() {
                src = "https://www.criipto.com/hubfs/logo.svg",
                href = "https://www.criipto.com"
            },
            stylesheet = "https://signatures-storybook.criipto.com/custom.css"
        }
    };

    // Create signature order
    var signatureOrder = await client.CreateSignatureOrder(createSignatureOrderInput);
}