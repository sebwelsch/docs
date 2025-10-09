import csharp from '!!raw-loader!./sealsPageTemplate.cs';
import nodejs from '!!raw-loader!./sealsPageTemplate.node.ts';
import python from '!!raw-loader!./sealsPageTemplate.py';
import { Example } from '../misc';
import { query, variables } from './sealsPageTemplate.graphql';

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
