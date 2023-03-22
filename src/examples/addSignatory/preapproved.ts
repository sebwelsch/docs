import csharp from '!!raw-loader!./preapproved.cs';
import { Example } from '../misc';
import { query, variables } from './preapproved.graphql';

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