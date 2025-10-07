import csharp from '!!raw-loader!./pdfFormFilling.cs';
import nodejs from '!!raw-loader!./pdfFormFilling.node.ts';
import python from '!!raw-loader!./pdfFormFilling.py';
import { Example } from '../misc';
import { query, variables } from './pdfFormFilling.graphql';

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
