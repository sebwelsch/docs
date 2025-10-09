import csharp from '!!raw-loader!./ui.cs';
import nodejs from '!!raw-loader!./ui.node.ts';
import python from '!!raw-loader!./ui.py';
import { Example } from '../misc';
import { query, variables } from './ui.graphql';

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
