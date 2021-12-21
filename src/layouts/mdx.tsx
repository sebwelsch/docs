import React from 'react';
import DefaultLayout from './default';

export default function MdxLayout(props: {children: React.ReactNode, pageContext: any, uri: string}) {
  const {frontmatter} = props.pageContext;
  return (
    <DefaultLayout {...props}>
      {frontmatter && (
        <header id="header" className="relative z-20">
          <div>
            <p className="mb-2 text-m leading-6 font-roboto-slab font-semibold text-blue">{frontmatter.category}</p>
            <h1 className="inline-block text-3xl font-extrabold text-gray-900 tracking-tight">{frontmatter.title}</h1>
          </div>
          {frontmatter.subtitle && (<p className="mt-2 text-lg text-gray-700">{frontmatter.subtitle}</p>)}
        </header>
      )}
      <div className="relative z-20 prose mt-8">
        {props.children}
      </div>
    </DefaultLayout>
  )
}