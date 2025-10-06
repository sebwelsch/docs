import csharp from '!!raw-loader!./displayDocumentID.cs';
import nodejs from '!!raw-loader!./displayDocumentID.node.ts';
import python from '!!raw-loader!./displayDocumentID.py';
import { Example } from '../misc';
import { query, variables } from './displayDocumentID.graphql';

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
