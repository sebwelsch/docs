import csharp from '!!raw-loader!./evidenceValidation.cs';
import { Example } from '../misc';
import { query, variables } from './evidenceValidation.graphql';

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