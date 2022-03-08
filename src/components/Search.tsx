import React from 'react';
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, SearchBox, Hits, Highlight } from 'react-instantsearch-dom';
import { Link } from 'gatsby';

interface Hit {
  product: string
  category: string | undefined
  title: string
  subtitle: string | undefined,
  slug: string
}

function upperFirst(input: string) {
  if (!input) return input;
  return input.substr(0, 1).toUpperCase() + input.substr(1);
}

export const Hit = ({ hit }: {hit: Hit}) => {
  const path = `/${hit.slug}/`;

  return (
    <React.Fragment>
      <p className="mb-2 text-m leading-6 font-roboto-slab font-semibold text-blue">Criipto {upperFirst(hit.product)}{hit.category && (<span>- {hit.category}</span>)}</p>
      <Link to={path} className="block text-2xl font-extrabold text-gray-900 tracking-tight mb-0 mt-0 no-underline">{hit.title}</Link>
      {hit.subtitle && (<Link to={path} className="block mt-1 mb-2 text-lg text-gray-700 max-w-screen-sm no-underline">{hit.subtitle}</Link>)}

      {/* <Highlight attribute="excerpt" hit={hit} tagName="mark" /> */}
    </React.Fragment>
  );
}

export default function Search() {
  return (
    <InstantSearch searchClient={algoliasearch(process.env.GATSBY_ALGOLIA_APP_ID!, process.env.GATSBY_ALGOLIA_SEARCH_KEY!)} indexName={process.env.GATSBY_ALGOLIA_INDEX_NAME!}>
      <SearchBox autoFocus className="mb-2" />
      <Hits hitComponent={Hit} />
    </InstantSearch>
  );
}