import csharp from '!!raw-loader!./displayName.cs';
import nodejs from '!!raw-loader!./displayName.node.ts';
import python from '!!raw-loader!./displayName.py';
import { Example } from '../misc';
import { query, variables } from './displayName.graphql';

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
