import csharp from '!!raw-loader!./basic.cs';
import nodejs from '!!raw-loader!./basic.node.ts';
import python from '!!raw-loader!./basic.py';
import { Example } from '../../misc';
import { query, variables } from './basic.graphql';

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
