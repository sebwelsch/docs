import type { ExampleData } from '../state/store';

export interface GraphQLExample {
  query: string,
  variables?: (() => any) | ((data: ExampleData) => any)
}

export interface CSharpExample {
  csharp: string
}

export type Example = GraphQLExample | CSharpExample;
export type ExampleLanguage = 'graphql' | 'csharp';

export function toExampleLanguage(input: Example) : ExampleLanguage {
  if ("query" in input) {
    return 'graphql';
  }
  if ("csharp" in input) {
    return 'csharp';
  }

  assertUnreachable(input);
}

export function toExampleDisplay(input: Example) {
  if ("query" in input) {
    return 'GraphQL';
  }
  if ("csharp" in input) {
    return 'C#';
  }

  assertUnreachable(input);
}

function assertUnreachable(x: never): never {
  throw new Error("Didn't expect to get here");
}