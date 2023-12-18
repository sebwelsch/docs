using Criipto.Signatures;
using Criipto.Signatures.Models;

using (var client = new CriiptoSignaturesClient("{YOUR_CRIIPTO_CLIENT_ID}", "{YOUR_CRIIPTO_CLIENT_SECRET}")) {
    var validateDocumentInput = new ValidateDocumentInput
    {
        pdf = new Byte[64], // Should be the bytes of a PDF file
    };

    // Create signature order
    var result = await client.ValidateDocument(validateDocumentInput);

    Console.WriteLine(result.valid); // Whether or not document is valid
    Console.WriteLine(result.errors); // Any errors
    Console.WriteLine(result.fixable); // If errors are fixable
}
