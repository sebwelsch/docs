import csharp from '!!raw-loader!./removePreviousSignatures.cs';
import { Example } from '../misc';
import { query, variables } from './removePreviousSignatures.graphql';

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