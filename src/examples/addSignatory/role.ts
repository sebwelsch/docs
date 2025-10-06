import csharp from '!!raw-loader!./role.cs';
import nodejs from '!!raw-loader!./role.node.ts';
import python from '!!raw-loader!./role.py';
import { Example } from '../misc';
import { query, variables } from './role.graphql';

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
