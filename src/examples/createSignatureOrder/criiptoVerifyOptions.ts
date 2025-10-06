import csharp from '!!raw-loader!./criiptoVerifyOptions.cs';
import nodejs from '!!raw-loader!./criiptoVerifyOptions.node.ts';
import python from '!!raw-loader!./criiptoVerifyOptions.py';
import { Example } from '../misc';
import { query, variables } from './criiptoVerifyOptions.graphql';

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
