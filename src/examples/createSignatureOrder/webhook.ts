import csharp from '!!raw-loader!./webhook.cs';
import nodejs from '!!raw-loader!./webhook.node.ts';
import { Example } from '../misc';
import { query, variables } from './webhook.graphql';

const example : Example[] = [
  {
    query,
    variables
  },
  {
    csharp
  },
  {
    nodejs
  }
];

export default example;