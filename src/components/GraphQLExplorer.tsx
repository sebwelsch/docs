import React, {useState, useEffect} from 'react';
import GraphiQL from 'graphiql';
import { Link } from 'gatsby';

interface Credentials {
  clientID: string
  clientSecret: string
}

function loadCredentials() : Credentials | null {
  const value = sessionStorage.getItem('graphql_api_credentials');
  if (value) return JSON.parse(value);
  return null;
}

function saveCredentials(input: Credentials) {
  sessionStorage.setItem('graphql_api_credentials', JSON.stringify(input));
}

type ExampleDataKey = 'signatureOrder.id' | 'signatory.id'
type ExampleData = {
  [key in ExampleDataKey]: string
}
function saveExampleData(key: ExampleDataKey, value) {
  sessionStorage.setItem(key, value);
}
export function getExampleData() : ExampleData {
  return {
    'signatureOrder.id': sessionStorage.getItem('signatureOrder.id'),
    'signatory.id': sessionStorage.getItem('signatory.id'),
  };
}

function graphQLFetcher(graphQLParams, options) {
  const credentials = loadCredentials();
  return fetch(
    'https://signatures-api-prod.azurewebsites.net/v1/graphql',
    {
      method: 'post',
      headers: Object.assign({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }, credentials ? {
        Authorization: `Basic ${btoa(`${credentials.clientID}:${credentials.clientSecret}`)}`
      } : {}),
      body: JSON.stringify(graphQLParams),
      credentials: 'omit',
    },
  ).then(function (response) {
    return response.json().then(response => {
      if (response.data) {
        if (response.data.createSignatureOrder) {
          saveExampleData('signatureOrder.id', response.data.createSignatureOrder.signatureOrder.id);
        }
        if (response.data.addSignatory) {
          saveExampleData('signatory.id', response.data.addSignatory.signatory.id);
        }
      }
      return response;
    }).catch(function () {
      return response.text();
    });
  });
}

function CredentialsOverlay(props: {onCredentials?: (creds: Credentials) => void}) {
  const [clientID, setClientID] = useState('');
  const [clientSecret, setClientSecret] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    saveCredentials({
      clientID,
      clientSecret
    });

    props.onCredentials({
      clientID,
      clientSecret
    });
  };

  return (
    <div className="w-full h-full bg-white/60 backdrop-blur absolute top-0 left-0 z-20 flex flex-col items-center justify-center">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
        <p>Please enter your <Link to="/document-signatures/getting-started/register-application/">API credentials</Link> to use this GraphQL Example</p>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="clientID">
            Client ID
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="clientID"
            type="text"
            placeholder="Client ID"
            onChange={(event) => setClientID(event.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="clientSecret">
            Client Secret
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="clientSecret"
            type="password"
            placeholder="Client Secret"
            onChange={(event) => setClientSecret(event.target.value)}
            required
          />
        </div>
        <div className="flex items-center justify-between">
          <button className="bg-blue text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}

export default function GraphQLExplorer(props: {query?: string, variables?: string | any}) {
  const {query, variables} = props;
  const [credentials, setCredentials] = useState<Credentials | null>(null);

  useEffect(() => {
    setCredentials(loadCredentials());
  }, []);

  return (
    <div className="hidden lg:block">
      <div style={{height: "600px"}} className="relative">
        <GraphiQL
          fetcher={graphQLFetcher}
          defaultVariableEditorOpen={true}
          defaultSecondaryEditorOpen={true}
          query={query}
          variables={typeof variables === 'object' ? JSON.stringify(variables, null, 2) : variables}
          docExplorerOpen={false}
          headerEditorEnabled={false}
        />

        {!credentials && (<CredentialsOverlay onCredentials={setCredentials} />)}
      </div>
    </div>
  );
}