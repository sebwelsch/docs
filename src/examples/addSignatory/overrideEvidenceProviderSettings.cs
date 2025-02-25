using Criipto.Signatures;
using Criipto.Signatures.Models;

using (var client = new CriiptoSignaturesClient("{YOUR_CRIIPTO_CLIENT_ID}", "{YOUR_CRIIPTO_CLIENT_SECRET}"))
{
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

    var criiptoVerifyEvidenceProviderId =
        signatureOrder.evidenceProviders.Find(ep => ep is CriiptoVerifySignatureEvidenceProvider)?.id ??
        throw new InvalidOperationException("Criipto Verify Evidence Provider not found");

    // Add signatory
    var signatory = await client.AddSignatory(
        signatureOrder.id,
        new AddSignatoryInput()
        {
            evidenceProviders = new List<SignatoryEvidenceProviderInput>
            {
                new() {
                    id = criiptoVerifyEvidenceProviderId,
                    criiptoVerify = new CriiptoVerifyProviderInput
                    {
                        acrValues = new List<string>
                        {
                            "urn:grn:authn:dk:mitid:substantial",
                            "urn:grn:authn:se:bankid:another-device:qr",
                            "urn:grn:authn:no:bankid:substantial"
                        },
                        message = "signatory message",
                        loginHint = "signatory login hint"
                    }
                }
            }
        }
    );
    Console.WriteLine(signatory.href); // Signing link, redirect user to this link, or send it in an email
}
