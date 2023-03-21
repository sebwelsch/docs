import csharp from '!!raw-loader!./evidenceValidationStages.cs';
import { Example } from '../misc';
import { query, variables } from './evidenceValidationStages.graphql';

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