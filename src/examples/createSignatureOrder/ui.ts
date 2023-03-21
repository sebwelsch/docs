import csharp from '!!raw-loader!./ui.cs';
import { Example } from '../misc';
import { query, variables } from './ui.graphql';

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