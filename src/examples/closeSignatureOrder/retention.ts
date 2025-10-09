import csharp from '!!raw-loader!./retention.cs';
import nodejs from '!!raw-loader!./retention.node.ts';
import python from '!!raw-loader!./retention.py';
import { Example } from '../misc';
import { query, variables } from './retention.graphql';

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
