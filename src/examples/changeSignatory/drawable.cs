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
        evidenceProviders = new List<EvidenceProviderInput>() {
            new EvidenceProviderInput() {
                enabledByDefault = false,
                drawable = new DrawableEvidenceProviderInput() {
                    requireName = true
                }
            }
        }
    };

    // Create signature order
    var signatureOrder = await client.CreateSignatureOrder(createSignatureOrderInput);

    // Add signatory
    var signatory = await client.AddSignatory(
        signatureOrder.id
    );

    // Find drawable evidence provider
    var drawable =
        signatureOrder!.evidenceProviders
            .Where(e => e is DrawableSignatureEvidenceProvider)
            .First();

    // Change signatory to enable drawable
    await client.ChangeSignatory(
        signatory.id,
        new ChangeSignatoryInput() {
            evidenceProviders = new List<SignatoryEvidenceProviderInput>() {
                new SignatoryEvidenceProviderInput() {
                    id = drawable.id
                }
            }
        }
    );
}
