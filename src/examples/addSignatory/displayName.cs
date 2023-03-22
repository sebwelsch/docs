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

    // Add signatory
    var signatory = await client.AddSignatory(
        signatureOrder.id,
        new AddSignatoryInput() {
            signatureAppearance = new SignatureAppearanceInput() {
                identifierFromEvidence = new (),
                displayName = new List<SignatureAppearanceTemplateInput>() {
                    new SignatureAppearanceTemplateInput() {
                        template = "{{name}} of {{company}}",
                        replacements = new () {
                            new () {
                                placeholder = "name",
                                fromEvidence = new List<string>() {
                                    "name",
                                    "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name"
                                }
                            },
                            new () {
                                placeholder = "company",
                                fromEvidence = new List<string>() {
                                    "2.5.4.10"
                                }
                            }
                        }
                    },
                    new SignatureAppearanceTemplateInput() {
                        template = "{{name}}",
                        replacements = new List<SignatureAppearanceTemplateReplacementInput>() {
                            new SignatureAppearanceTemplateReplacementInput () {
                                placeholder = "name",
                                fromEvidence = new List<string>() {
                                    "name",
                                    "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name"
                                }
                            },
                        }
                    }
                }
            }
        }
    );
    Console.WriteLine(signatory.href); // Signing link, redirect user to this link, or send it in an email
}
