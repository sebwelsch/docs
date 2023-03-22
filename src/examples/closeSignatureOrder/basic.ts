import csharp from '!!raw-loader!./basic.cs';
import { Example } from '../misc';
import { query, variables } from './basic.graphql';

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