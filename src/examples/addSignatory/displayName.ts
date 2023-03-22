import csharp from '!!raw-loader!./displayName.cs';
import { Example } from '../misc';
import { query, variables } from './displayName.graphql';

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