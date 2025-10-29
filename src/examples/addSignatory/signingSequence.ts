import csharp from '!!raw-loader!./signingSequence.cs';
import nodejs from '!!raw-loader!./signingSequence.node.ts';
import python from '!!raw-loader!./signingSequence.py';
import { Example } from '../misc';
import { query, variables } from './signingSequence.graphql';

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
