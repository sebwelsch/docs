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
        signatureAppearance = new SignatureAppearanceInput() {
            identifierFromEvidence = new List<string>() {
                "cprNumberIdentifier",
                "dk:gov:saml:attribute:CprNumberIdentifier",
                "ssn",
                "http://schemas.grean.id/claims/se/ssn",
                "socialno",
                "http://schemas.grean.id/claims/no/socialno"
            }
        }
    };

    // Create signature order
    var signatureOrder = await client.CreateSignatureOrder(createSignatureOrderInput);
}