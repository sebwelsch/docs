import csharp from '!!raw-loader!./role.cs';
import { Example } from '../misc';
import { query, variables } from './role.graphql';

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