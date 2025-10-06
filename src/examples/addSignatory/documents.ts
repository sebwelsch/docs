import csharp from '!!raw-loader!./documents.cs';
import nodejs from '!!raw-loader!./documents.node.ts';
import python from '!!raw-loader!./documents.py';
import { Example } from '../misc';
import { query, variables } from './documents.graphql';

const example: Example[] = [
  {
    query,
    variables,
  },
  {
    csharp,
  },
  {
    nodejs,
  },
  {
    python,
  },
];

export default example;
