import csharp from '!!raw-loader!./preapproved.cs';
import nodejs from '!!raw-loader!./preapproved.node.ts';
import python from '!!raw-loader!./preapproved.py';
import { Example } from '../misc';
import { query, variables } from './preapproved.graphql';

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
