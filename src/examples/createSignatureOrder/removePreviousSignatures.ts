import csharp from '!!raw-loader!./removePreviousSignatures.cs';
import nodejs from '!!raw-loader!./removePreviousSignatures.node.ts';
import python from '!!raw-loader!./removePreviousSignatures.py';
import { Example } from '../misc';
import { query, variables } from './removePreviousSignatures.graphql';

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
