#!/bin/sh

rm -rf dist/signatures-csharp
mkdir -p dist/signatures-csharp

TEMP=$(awk 1 ./src/examples/**/*.cs | sed 's/using Criipto.Signatures;//' | sed 's/using Criipto.Signatures.Models;//')

(echo "using Criipto.Signatures;"; echo "using Criipto.Signatures.Models;"; echo "$TEMP") > dist/signatures-csharp/Example.cs

cp src/examples/examples.csproj dist/signatures-csharp/

cd dist/signatures-csharp
dotnet build