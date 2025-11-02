import csharp from '!!raw-loader!./signingAs.cs';
import nodejs from '!!raw-loader!./signingAs.node.ts';
import python from '!!raw-loader!./signingAs.py';
import { Example } from '../misc';
import { query, variables } from './signingAs.graphql';

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
