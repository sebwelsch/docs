import React from 'react';

import DefaultLayout from './default';
import Header from '../components/Header';
import PageNavigation from '../components/PageNavigation';
import CustomMDXProvider, {textToId} from '../components/MdxProvider';

interface Header {
  type: 'h2' | 'h3',
  text: string
}

export default function MdxLayout(props: {children: React.ReactNode, pageContext: any, path: string}) {
  const {frontmatter} = props.pageContext;
  const headers : Header[] =
    React.Children.toArray(props.children)
    .filter((child: any) => child.props.mdxType === "h2" || child.props.mdxType === "h3")
    .map((child: any) => ({type: child.props.mdxType, text: child.props.children}));

  return (
    <DefaultLayout {...props}>
      <div className="relative z-20 prose max-w-none mb-8">
        <CustomMDXProvider>
          {props.children}
        </CustomMDXProvider>
      </div>
      <PageNavigation
        items={headers.map(header => ({
          level: header.type === 'h3' ? 2 : 1,
          text: header.text,
          link: `#${textToId(header.text)}`
        }))}
      />
    </DefaultLayout>
  );
}