import csharp from '!!raw-loader!./documents.cs';
import { Example } from '../misc';
import { query, variables } from './documents.graphql';

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