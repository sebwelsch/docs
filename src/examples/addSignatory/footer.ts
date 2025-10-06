import csharp from '!!raw-loader!./footer.cs';
import nodejs from '!!raw-loader!./footer.node.ts';
import python from '!!raw-loader!./footer.py';
import { Example } from '../misc';
import { query, variables } from './footer.graphql';

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
