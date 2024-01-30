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

    // Setup evidence provider input
    var evidenceProviders = new List<EvidenceProviderInput>() {
      new EvidenceProviderInput() {
        allOf = new AllOfEvidenceProviderInput() {
            providers = new List<SingleEvidenceProviderInput>() {
                new SingleEvidenceProviderInput() {
                    criiptoVerify = new CriiptoVerifyProviderInput() {
                        alwaysRedirect = true
                    }
                },
                new SingleEvidenceProviderInput() {
                    drawable = new DrawableEvidenceProviderInput() {
                        requireName = false
                    }
                }
            }
        }
      }
    };

    // Setup signature order input
    var createSignatureOrderInput = new CreateSignatureOrderInput
    {
        title = "Dotnet Sample",
        documents = documents,
        disableVerifyEvidenceProvider = true,
        evidenceProviders = evidenceProviders
    };

    // Create signature order
    var signatureOrder = await client.CreateSignatureOrder(createSignatureOrderInput);
}