import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: 'https://signatures-api.criipto.com/v1/graphql',
  generates: {
    'graphql-signatures-types.ts': {
      documents: [
        //'./src/examples/*.graphql.ts',
        './src/examples/**/*.graphql.ts',
        //'./src/examples/*.graphql.tsx',
      ],
      plugins: [
        'typescript',
        'typescript-operations',
      ],
      config: {
        strictScalars: true,
        namingConvention: {
          enumValues: 'keep'
        },
        enumsAsTypes: false,
        futureProofEnums: true,
        useImplementingTypes: true,
        scalars: {
          Blob: 'string',
          Date: 'string',
          DateTime: 'string',
          URI: 'string'
        }
      }
    }
  },
  pluckConfig: {
    modules: [],
    gqlMagicComment: "Signatures GraphQL"
  }
}
export default config;