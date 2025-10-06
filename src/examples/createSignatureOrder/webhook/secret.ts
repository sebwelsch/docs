import csharp from '!!raw-loader!./secret.cs';
import nodejs from '!!raw-loader!./secret.node.ts';
import python from '!!raw-loader!./secret.py';
import { Example } from '../../misc';
import { query, variables } from './secret.graphql';

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
