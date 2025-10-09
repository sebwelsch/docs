import csharp from '!!raw-loader!./evidenceValidationStages.cs';
import nodejs from '!!raw-loader!./evidenceValidationStages.node.ts';
import python from '!!raw-loader!./evidenceValidationStages.py';
import { Example } from '../misc';
import { query, variables } from './evidenceValidationStages.graphql';

const example: Example[] = [
  {
    query,
    variables,
  },
  {
    csharp,
  },
  {
    nodejs,
  },
  {
    python,
  },
];

export default example;
