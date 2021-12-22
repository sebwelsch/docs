import React from 'react';

import {DesktopNavigation} from '../components/Navigation';
import Header from '../components/Header';

export default function DefaultLayout(props: {children: React.ReactNode, pageContext: any, path: string}) {
  const {frontmatter} = props.pageContext;
  return (
    <div>
      <Header />
      <div className="px-4 sm:px-6 md:px-8">
        <div className="max-w-screen-2xl mx-auto pt-10 lg:pl-[19.5rem] xl:pr-[19.5rem]">
          <DesktopNavigation />
          {frontmatter && (
            <header id="header" className="relative z-20 mb-8">
              <div>
                {frontmatter.category && (<p className="mb-2 text-m leading-6 font-roboto-slab font-semibold text-blue">{frontmatter.category}</p>)}
                <h1 className="inline-block text-3xl font-extrabold text-gray-900 tracking-tight">{frontmatter.title}</h1>
              </div>
              {frontmatter.subtitle && (<p className="mt-2 text-lg text-gray-700 max-w-screen-sm">{frontmatter.subtitle}</p>)}
            </header>
          )}
          {props.children}
        </div>
      </div>
    </div>
  )
}