import type { ExampleData } from '../state/store';

export interface GraphQLExample {
  query: string;
  variables?: (() => any) | ((data: ExampleData) => any);
}

export interface CSharpExample {
  csharp: string;
}

export interface NodeJSExample {
  nodejs: string;
}

export interface PythonExample {
  python: string;
}

export type Example = GraphQLExample | CSharpExample | NodeJSExample | PythonExample;
export type ExampleLanguage = 'graphql' | 'csharp' | 'javascript' | 'python';

export function toExampleLanguage(input: Example): ExampleLanguage {
  if ('query' in input) {
    return 'graphql';
  }
  if ('csharp' in input) {
    return 'csharp';
  }
  if ('nodejs' in input) {
    return 'javascript';
  }
  if ('python' in input) {
    return 'python';
  }

  assertUnreachable(input);
}

export function toExampleDisplay(input: Example) {
  if ('query' in input) {
    return 'GraphQL';
  }
  if ('csharp' in input) {
    return '.NET (C#)';
  }
  if ('nodejs' in input) {
    return 'Node.js';
  }
  if ('python' in input) {
    return 'Python';
  }

  assertUnreachable(input);
}

function assertUnreachable(x: never): never {
  throw new Error("Didn't expect to get here");
}
