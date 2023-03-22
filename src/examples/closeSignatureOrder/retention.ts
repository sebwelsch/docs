import csharp from '!!raw-loader!./retention.cs';
import { Example } from '../misc';
import { query, variables } from './retention.graphql';

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