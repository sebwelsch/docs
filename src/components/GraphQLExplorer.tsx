import React from 'react';
import GraphiQL from 'graphiql';

function graphQLFetcher(graphQLParams, options) {
  return fetch(
    'https://signatures-api-prod.azurewebsites.net/v1/graphql',
    {
      method: 'post',
      headers: Object.assign({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }, options ? options.headers || {} : {}),
      body: JSON.stringify(graphQLParams),
      credentials: 'omit',
    },
  ).then(function (response) {
    return response.json().catch(function () {
      return response.text();
    });
  });
}

export default function GraphQLExplorer(props: {query?: string, variables?: string}) {
  const {query, variables} = props;
  return (
    <GraphiQL
      fetcher={graphQLFetcher}
      defaultVariableEditorOpen={true}
      defaultSecondaryEditorOpen={true}
      query={query || '{}'}
      variables={variables}
      docExplorerOpen={false}
    />
  );
}