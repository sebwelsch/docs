import csharp from '!!raw-loader!./uniqueEvidenceKey.cs';
import { Example } from '../misc';
import { query, variables } from './uniqueEvidenceKey.graphql';

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