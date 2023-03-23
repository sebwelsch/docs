import csharp from '!!raw-loader!./drawable.cs';
import { Example } from '../misc';
import { query, variables } from './drawable.graphql';

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