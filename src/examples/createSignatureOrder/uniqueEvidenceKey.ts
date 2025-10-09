import csharp from '!!raw-loader!./uniqueEvidenceKey.cs';
import nodejs from '!!raw-loader!./uniqueEvidenceKey.node.ts';
import python from '!!raw-loader!./uniqueEvidenceKey.py';
import { Example } from '../misc';
import { query, variables } from './uniqueEvidenceKey.graphql';

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
