import csharp from '!!raw-loader!./signatureAppearance.cs';
import { Example } from '../misc';
import { query, variables } from './signatureAppearance.graphql';

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