import csharp from '!!raw-loader!./webhook.cs';
import { Example } from '../misc';
import { query, variables } from './webhook.graphql';

const example : Example[] = [
  {
    query,
    variables
  },
  {
    csharp
  }
];

export default example;