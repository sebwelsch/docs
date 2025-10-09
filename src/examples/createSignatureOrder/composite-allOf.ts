import csharp from '!!raw-loader!./composite-allOf.cs';
import nodejs from '!!raw-loader!./composite-allOf.node.ts';
import python from '!!raw-loader!./composite-allOf.py';
import { Example } from '../misc';
import { query, variables } from './composite-allOf.graphql';

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
