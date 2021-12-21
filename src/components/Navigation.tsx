import React from 'react';
import { useStaticQuery, graphql } from "gatsby";

import { NavigationQuery } from '../../graphql-types';

const SIGNATURES_CATEGORIES = [
  "Getting Started"
];

function slugToPath(slug: string) {
  return `/${slug}/`;
}

export default function Navigation(props: {path: string}) {
  const {path} = props;
  const data = useStaticQuery<NavigationQuery>(graphql`
    query Navigation {
      signaturesPages: allMdx(
        filter: {
          frontmatter: {
            product: { eq: "document-signatures" }
          }
        }
        sort: { fields: [frontmatter___sort], order: ASC }
      ) {
        edges {
          node {
            __typename
            id
            slug
            frontmatter {
              title
              category
            }
          }
        }
      }
    }
  `);

  const signaturesPages = data.signaturesPages.edges.map(edge => edge.node);
  return (
    <ul>
      {SIGNATURES_CATEGORIES.map(category => (
        <li key={category}>
          <h5 className="mb-8 lg:mb-3 font-semibold text-blue">{category}</h5>
          <ul className="space-y-6 lg:space-y-2 border-l border-gray-100">
            {signaturesPages.filter(node => node.frontmatter.category === category).map(page => (
              <li key={page.id}>
                <a
                  className={`block border-l pl-4 -ml-px border-transparent ${slugToPath(page.slug) === path ? 'text-blue border-current font-semibold' : 'hover:border-gray-400 text-gray-700 hover:text-gray-900'}`}
                  href={slugToPath(page.slug)}
                >
                  {page.frontmatter.title}
                </a>
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
}