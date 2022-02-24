import React from 'react';
import { useStaticQuery, graphql as gatsbyGraphql, Link } from "gatsby";

import { NavigationQuery } from '../../graphql-gatsby-types';

const SIGNATURES_CATEGORIES = [
  "Getting Started",
  "GraphQL",
  "Webhooks"
];

function slugToPath(slug: string) {
  return `/${slug}/`;
}

interface Props {
  path: string
}

export default function Navigation(props: Props) {
  const {path} = props;
  const isVerify = path.startsWith('/verify');
  const isSignatures = path.startsWith('/signatures');
  const data = useStaticQuery<NavigationQuery>(gatsbyGraphql`
    query Navigation {
      signaturesPages: allMdx(
        filter: {
          frontmatter: {
            product: { eq: "signatures" }
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
    
  if (!isVerify && !isSignatures) {
    return (
      <ul>
        <li>
          <h5 className="mb-8 lg:mb-3 font-semibold text-blue">Criipto Products</h5>
          <ul className="space-y-6 lg:space-y-2 border-l border-gray-100">
            <li>
              <Link
                to={'/verify'}
                className="block border-l pl-4 -ml-px border-transparent hover:border-gray-400 text-gray-700 hover:text-gray-900"
              >
                Verify
              </Link>
            </li>
            <li>
              <Link
                to={'/signatures'}
                className="block border-l pl-4 -ml-px border-transparent hover:border-gray-400 text-gray-700 hover:text-gray-900"
              >
                Signatures
              </Link>
            </li>
          </ul>
        </li>
      </ul>
    )
  }

  const categories = isSignatures ? SIGNATURES_CATEGORIES : [];

  return (
    <ul>
      {categories.map((category, index) => (
        <li key={category} className={index > 0 ? 'mt-12 lg:mt-8' : ''}>
          <h5 className="mb-8 lg:mb-3 font-semibold text-blue">{category}</h5>
          <ul className="space-y-6 lg:space-y-2 border-l border-gray-100">
            {signaturesPages.filter(node => node.frontmatter?.category === category).map(page => (
              <li key={page.id}>
                <Link
                  to={slugToPath(page.slug!)}
                  getProps={(props) => ({className: `block border-l pl-4 -ml-px border-transparent ${props.isCurrent ? 'text-blue border-current font-semibold' : 'hover:border-gray-400 text-gray-700 hover:text-gray-900'}`})}
                >
                  {page.frontmatter!.title}
                </Link>
              </li>
            ))}
            {isSignatures && category === 'GraphQL' && (
              <li>
                <a
                  className="block border-l pl-4 -ml-px border-transparent hover:border-gray-400 text-gray-700 hover:text-gray-900"
                  href="https://signatures-api-prod.azurewebsites.net/v1/explorer"
                  target="_blank"
                >Explorer</a>
              </li>
            )}
          </ul>
        </li>
      ))}
    </ul>
  );
}

export function DesktopNavigation(props: Props) {
  return (
    <div className="hidden lg:block fixed z-20 inset-0 top-[61px] left-[max(0px,calc(50%-768px))] right-auto w-[19.5rem] py-10 px-8 overflow-y-auto">
      <Navigation {...props} />
    </div>
  );
}