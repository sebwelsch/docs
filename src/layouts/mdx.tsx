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
  const children = React.Children.toArray(props.children);
  const headers : Header[] =
    children
    .filter((child: any) => child.props?.mdxType === "h2" || child.props?.mdxType === "h3")
    .map((child: any) => ({type: child.props?.mdxType, text: child.props?.children}));

  const overviewHeader = 
    children[0] && (children[0] as any).props.mdxType === "p" ? {type: "h2", text: "Overview"} : null

  return (
    <DefaultLayout {...props}>
      <div className="relative z-20 prose max-w-none mb-48">
        <CustomMDXProvider>
          {props.children}
        </CustomMDXProvider>
      </div>
      <PageNavigation
        items={(overviewHeader && headers.length ? [overviewHeader] : []).concat(headers).map(header => ({
          level: header.type === 'h3' ? 2 : 1,
          text: header.text,
          link: `#${textToId(header.text)}`
        }))}
      />
    </DefaultLayout>
  );
}