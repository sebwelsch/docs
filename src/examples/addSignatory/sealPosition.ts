import csharp from '!!raw-loader!./sealPosition.cs';
import nodejs from '!!raw-loader!./sealPosition.node.ts';
import python from '!!raw-loader!./sealPosition.py';
import { Example } from '../misc';
import { query, variables } from './sealPosition.graphql';

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
