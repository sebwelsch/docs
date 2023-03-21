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
      new EvidenceProviderInput {
        criiptoVerify = new CriiptoVerifyProviderInput() {
          acrValues = new List<string>(){"urn:grn:authn:se:bankid:same-device"},
          alwaysRedirect = true
        }
      }
    };

    // Setup signature order input
    var createSignatureOrderInput = new CreateSignatureOrderInput
    {
        title = "Dotnet Sample",
        documents = documents,
        evidenceProviders = evidenceProviders
    };

    // Create signature order
    var signatureOrder = await client.CreateSignatureOrder(createSignatureOrderInput);
}