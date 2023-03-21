import csharp from '!!raw-loader!./criiptoVerifyOptions.cs';
import { Example } from '../misc';
import { query, variables } from './criiptoVerifyOptions.graphql';

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