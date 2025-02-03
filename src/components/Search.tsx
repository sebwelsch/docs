import React from 'react';
import algoliasearch from 'algoliasearch/lite';
import type { Hit } from 'instantsearch.js';
import { InstantSearch, SearchBox, Snippet, Highlight, Hits } from 'react-instantsearch';
import { Link } from 'gatsby';

interface HitProps {
  hit: Hit;
  onClick?: React.MouseEventHandler
}

export const HitComponent = ({ hit, onClick }: HitProps) => {
  const path = `/${hit.slug}/`;

  return (
    <div className="mb-4" onClick={onClick}>
      <Link to={path} className="block text-xl font-medium text-gray-900 tracking-tight mb-0 mt-0 no-underline">
        <Highlight attribute="title" hit={hit} highlightedTagName="mark" /> - {hit.category}
      </Link>

      <Link to={path} className="no-underline">
        <Snippet attribute="excerpt" hit={hit} highlightedTagName="mark" />
      </Link>
    </div>
  );
}

interface SearchProps {
  onHide?: () => void
  query?: string
}

export default function Search(props: SearchProps) {

  return (
    <InstantSearch 
      searchClient={algoliasearch(process.env.GATSBY_ALGOLIA_APP_ID!, process.env.GATSBY_ALGOLIA_SEARCH_KEY!)}
      indexName={process.env.GATSBY_ALGOLIA_INDEX_NAME!}
    >
      <SearchBox autoFocus className="mb-2" />
      <Hits
        hitComponent={HitComponent}
      />
    </InstantSearch>
  );
}
