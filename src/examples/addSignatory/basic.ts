import csharp from '!!raw-loader!./basic.cs';
import nodejs from '!!raw-loader!./basic.node.cs';
import { Example } from '../misc';
import { query, variables } from './basic.graphql';

const example : Example[] = [
  {
    query,
    variables
  },
  {
    csharp
  },
  {
    nodejs
  }
];

export default example;