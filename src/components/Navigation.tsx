import React, { useState } from 'react';
import { useStaticQuery, graphql as gatsbyGraphql, Link } from "gatsby";

import { NavigationQuery } from '../../graphql-gatsby-types';
import { PageNavigation, PageNavigationItem } from './PageNavigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SIGNATURES_CATEGORIES = [
  "Getting Started",
  "GraphQL",
  "Webhooks"
];

const VERIFY_CATEGORIES = [
  "Getting Started",
  "e-IDs",
  "Integrations",
  "Guides & Tools"
];

function slugToPath(slug: string) {
  return `/${slug}/`;
}

interface Props {
  path: string | undefined
}

export default function Navigation(props: Props) {
  const {path} = props;
  const isVerify = path?.startsWith('/verify');
  const isSignatures = path?.startsWith('/signatures');
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

      verifyPages: allMdx(
        filter: {
          frontmatter: {
            product: { eq: "verify" }
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
  const verifyPages = data.verifyPages.edges.map(edge => edge.node);
    
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

  const categories = isSignatures ? SIGNATURES_CATEGORIES : VERIFY_CATEGORIES;
  const pages = isSignatures ? signaturesPages : verifyPages;

  return (
    <ul>
      {categories.map((category, index) => (
        <li key={category} className={index > 0 ? 'mt-8' : ''}>
          <h5 className="mb-3 font-semibold text-blue">{category}</h5>
          <ul className="space-y-2 border-l border-gray-100">
            {pages.filter(node => node.frontmatter?.category === category).map(page => (
              <li key={page.id}>
                <Link
                  to={slugToPath(page.slug!)}
                  getProps={(props) => ({className: `block border-l pl-4 py-1 lg:py-0 -ml-px border-transparent ${props.isCurrent ? 'text-blue border-current font-semibold' : 'hover:border-gray-400 text-gray-700 hover:text-gray-900'}`})}
                >
                  {page.frontmatter!.title}
                </Link>
              </li>
            ))}
            {isSignatures && category === 'GraphQL' && (
              <li>
                <a
                  className="block border-l pl-4 -ml-px border-transparent hover:border-gray-400 text-gray-700 hover:text-gray-900"
                  href="https://signatures-api.criipto.com/v1/explorer"
                  target="_blank"
                >Explorer</a>
              </li>
            )}
            {isVerify && category === 'Guides & Tools' && (
              <li>
                <a
                  className="block border-l pl-4 -ml-px border-transparent hover:border-gray-400 text-gray-700 hover:text-gray-900"
                  href="https://docs-old.criipto.com/"
                  target="_blank"
                >
                  Old documentation
                </a>
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
    <div className="hidden lg:block fixed z-20 inset-0 top-[61px] left-[max(0px,calc(50%-768px))] right-auto w-[17.5rem] py-10 pl-8 mr-8 overflow-y-auto">
      <Navigation {...props} />
    </div>
  );
}

type MobileProps = Props & {
  frontmatter: any,
  pageNavigationItems?: PageNavigationItem[]
}
export function MobileNavigation(props: Props & MobileProps) {
  const category = props.frontmatter.category;
  const title = props.frontmatter.title;
  const [showNavigation, setShowNavigation] = useState(false);
  const [showPageNavigation, setPageShowNavigation] = useState(false);

  return (
    <React.Fragment>
      <div className="flex justify-between lg:hidden sticky top-[65px] z-30 backdrop-blur duration-500 border-b border-gray-900/20 bg-white/95 supports-backdrop-blur:bg-white/60 p-4">
        <div className="flex">
          <button type="button" className="text-slate-500" onClick={() => setShowNavigation(true)}>
            <span className="sr-only">Navigation</span>
            <svg width="24" height="24"><path d="M5 6h14M5 12h14M5 18h14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path></svg>
          </button>

          {(category && title) ? (
            <ol className="ml-4 flex text-sm leading-6 whitespace-nowrap min-w-0">
              <li className="flex items-center">
                {category}
                <svg width="3" height="6" aria-hidden="true" className="mx-3 overflow-visible text-slate-400">
                  <path d="M0 0L3 3L0 6" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"></path>
                </svg>
              </li>
              <li className="font-semibold text-slate-900 truncate ">
                {title}
              </li>
            </ol>
          ) : null}
        </div>

        {props.pageNavigationItems ? (
          <button type="button" className="text-slate-500" onClick={() => setPageShowNavigation(true)}>
            <span className="sr-only">Table of contents</span>
            <FontAwesomeIcon icon={`fa-solid fa-book-open` as any} />
          </button>
        ) : null}
      </div>

      <div className={`fixed z-50 inset-0 overscroll-contain overflow-y-auto ${showNavigation ? 'block' : 'hidden'}`}>
        <div className="fixed inset-0 bg-black/20 backdrop-blur-sm" onClick={() => setShowNavigation(false)}></div>
        <div className="relative bg-white min-h-full w-80 max-w-[calc(100%-3rem)] p-6" onClick={(event) => event.stopPropagation()}>
          <button onClick={() => setShowNavigation(false)} type="button" className="absolute z-10 top-5 right-5 w-8 h-8 flex items-center justify-center text-slate-500 hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300">
            <span className="sr-only">Close navigation</span>
            <svg viewBox="0 0 10 10" className="w-2.5 h-2.5 overflow-visible">
              <path d="M0 0L10 10M10 0L0 10" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path>
            </svg>
          </button>

          <Navigation {...props} />
        </div>
      </div>

      {props.pageNavigationItems ? (
        <div className={`fixed z-50 inset-0 overscroll-contain overflow-y-auto ${showPageNavigation ? 'block' : 'hidden'}`}>
          <div className="fixed inset-0 bg-black/20 backdrop-blur-sm" onClick={() => setPageShowNavigation(false)}></div>
          <div className="absolute bg-white min-h-full w-80 max-w-[calc(100%-3rem)] p-6 right-0" onClick={(event) => event.stopPropagation()}>
            <button onClick={() => setPageShowNavigation(false)} type="button" className="absolute z-10 top-5 right-5 w-8 h-8 flex items-center justify-center text-slate-500 hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300">
              <span className="sr-only">Close table of contents</span>
              <svg viewBox="0 0 10 10" className="w-2.5 h-2.5 overflow-visible">
                <path d="M0 0L10 10M10 0L0 10" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path>
              </svg>
            </button>

            <PageNavigation items={props.pageNavigationItems} onNavigate={() => setPageShowNavigation(false)} />
          </div>
        </div>
      ) : null}
    </React.Fragment>
  );
}