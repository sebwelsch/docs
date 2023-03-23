import csharp from '!!raw-loader!./sealPosition.cs';
import { Example } from '../misc';
import { query, variables } from './sealPosition.graphql';

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