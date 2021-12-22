import React from 'react';
import { MDXProvider } from "@mdx-js/react";

export const textToId = (input: string) => input.toLowerCase().replace(/\s/g, '-').replace(':', '');
export const H2 = (props: {children: string}) => (
  <h2 {...props} className="group flex whitespace-pre-wrap -ml-4 pl-4">
    <a id={textToId(props.children)} style={{position: "relative", top: "-90px"}} />
    <a
      href={`#${textToId(props.children)}`}
      className="absolute -ml-10 flex items-center opacity-0 border-0 group-hover:opacity-100 z-30"
      aria-label="Anchor"
    >​
      <div className="w-6 h-6 text-gray-400 ring-1 ring-gray-900/5 rounded-md shadow-sm flex items-center justify-center hover:ring-gray-900/10 hover:shadow hover:text-gray-700">
        <svg width="12" height="12" fill="none" aria-hidden="true">
          <path d="M3.75 1v10M8.25 1v10M1 3.75h10M1 8.25h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"></path>
        </svg>
      </div>
    </a>
    {props.children}
  </h2>
);

export const H3 = (props: {children: string}) => (
  <h3 {...props} className="group flex whitespace-pre-wrap -ml-4 pl-4">
    <a id={textToId(props.children)} style={{position: "relative", top: "-90px"}} />
    <a
      href={`#${textToId(props.children)}`}
      className="absolute -ml-10 flex items-center opacity-0 border-0 group-hover:opacity-100"
      aria-label="Anchor"
    >​
      <div className="w-6 h-6 text-gray-400 ring-1 ring-gray-900/5 rounded-md shadow-sm flex items-center justify-center hover:ring-gray-900/10 hover:shadow hover:text-gray-700">
        <svg width="12" height="12" fill="none" aria-hidden="true">
          <path d="M3.75 1v10M8.25 1v10M1 3.75h10M1 8.25h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"></path>
        </svg>
      </div>
    </a>
    {props.children}
  </h3>
);

const Text = (props: {text: string}) => {
  return <React.Fragment>{props.text}</React.Fragment>;
}

export const CodeBlock = (props: {text: string, className?: string}) => {
  return (
    <pre className={props.className}>
      <code>{props.text}</code>
    </pre>
  );
}

export const Paragraph = (props: any) => (<p {...props} className="max-w-screen-sm">{props.children}</p>)

const components = {
  h2: H2,
  h3: H3,
  Text,
  CodeBlock,
  p: Paragraph
}

export default function CustomMDXProvider(props: {children: any}) {
  return (
    <MDXProvider components={components}>
      {props.children}
    </MDXProvider>
  );
}