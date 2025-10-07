import csharp from '!!raw-loader!./headerLeft.cs';
import nodejs from '!!raw-loader!./headerLeft.node.ts';
import python from '!!raw-loader!./headerLeft.py';
import { Example } from '../misc';
import { query, variables } from './headerLeft.graphql';

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
