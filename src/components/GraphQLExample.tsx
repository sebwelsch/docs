import React, {useState} from 'react';
import GraphQLExplorer from './GraphQLExplorer';

import { ExampleData } from '../state/store';
import { useAppSelector } from '../state/hooks';

interface Example {
  query: string,
  variables?: (() => any) | ((data: ExampleData) => any)
}
interface Props {
  example: Example
}

function HideableCodeBlock(props: {text: string, className?: string}) {
  const [hasHiddenCode, setCodeHidden] = useState(false);
  return (
    <pre className={`${props.className} pb-8 relative ${hasHiddenCode ? 'h-[43px] overflow-hidden' : ''}`}>
      <code>{props.text}</code>
      <div className="absolute top-1 right-1">
        {hasHiddenCode ? (
          <button className="text-white border rounded border-white py-1 px-4" onClick={() => setCodeHidden(false)}>
            Show
          </button>
        ) : (
          <button className="text-white border rounded border-white py-1 px-4" onClick={() => setCodeHidden(true)}>
            Hide
          </button>
        )}
      </div>
    </pre>
  );
}

export default function GraphQLExample(props: Props) {
  const [hasSkipped, setSkipped] = useState(false);
  const [hasHiddenQuery, setQueryHidden] = useState(false);
  const data = useAppSelector(state => state.exampleData);
  const variables = props.example.variables ? JSON.stringify(props.example.variables(data), null, 2) : null;
  const query = props.example.query.trim();

  return (
    <React.Fragment>
      <HideableCodeBlock text={'# Query\n'+query} className={hasSkipped ? 'block' : 'block lg:hidden'} />
      {variables && (<HideableCodeBlock text={'# Variables\n'+variables} className={hasSkipped ? 'block' : 'block lg:hidden'} />)}
      <GraphQLExplorer query={query} variables={variables} className={hasSkipped ? 'hidden' : 'hidden lg:block'} onSkipCredentials={() => setSkipped(true)} />
    </React.Fragment>
  )
}