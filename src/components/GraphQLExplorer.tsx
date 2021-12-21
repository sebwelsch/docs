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

export default function GraphQLExplorer(props: {query?: string, variables?: string | any}) {
  const {query, variables} = props;

  console.log(typeof variables === 'object' ? JSON.stringify(variables) : variables);
  return (
    <GraphiQL
      fetcher={graphQLFetcher}
      defaultVariableEditorOpen={true}
      defaultSecondaryEditorOpen={true}
      query={query}
      variables={typeof variables === 'object' ? JSON.stringify(variables, null, 2) : variables}
      docExplorerOpen={false}
      headerEditorEnabled={false}
    />
  );
}