import React from 'react';
import GraphQLExplorer from './GraphQLExplorer';
import {CodeBlock} from './MdxProvider';

import { ExampleData } from '../state/store';
import { useAppSelector } from '../state/hooks';

interface Example {
  query: string,
  variables?: (() => any) | ((data: ExampleData) => any)
}
interface Props {
  example: Example
}
export default function GraphQLExample(props: Props) {
  const data = useAppSelector(state => state.exampleData);
  const variables = props.example.variables ? JSON.stringify(props.example.variables(data), null, 2) : null;
  const query = props.example.query.trim();

  return (
    <React.Fragment>
      <CodeBlock text={query} className="block lg:hidden" />
      {variables && (<CodeBlock text={variables} className="block lg:hidden" />)}
      <GraphQLExplorer query={query} variables={variables} className="hidden lg:block" />
    </React.Fragment>
  )
}