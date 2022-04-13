import React from 'react';
import { MDXProvider } from "@mdx-js/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

export const textToId = function (input: string) {
  if (input.toLowerCase == undefined) console.error(input);
  return input.toLowerCase().replace(/\s/g, '-').replace(/([^a-zA-Z0-9-])/g, '');
}
export const H2 = (props: {children: string}) => (
  <h2 {...props} className="group flex whitespace-pre-wrap -ml-4 pl-4">
    <a id={textToId(props.children)} className="relative top-[-150px] lg:top-[-90px]"/>
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
    <a id={textToId(props.children)} className="relative top-[-150px] lg:top-[-90px]" />
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

export const InlineCode = (props: {children: React.ReactNode}) => {
  return <span className="not-prose"><code className="bg-gray-100 py-0.5 px-1.5 rounded-md">{props.children}</code></span>;
};

export const Highlight = (props: {children: React.ReactNode, icon?: string, warning?: boolean}) => {
  return (
    <div className={`mdx-highlight bg-gray-200 ${props.warning ? 'bg-yellow-100' : ''} rounded-md p-4 max-w-screen-md ${props.icon ? 'relative pl-10' : ''}`}>
      {props.icon ? (
        <FontAwesomeIcon className="absolute left-4 top-4 text-2xl" icon={`fa-solid fa-${props.icon}` as any} />
      ) : null}
      {props.children}
    </div>
  );
}

export const Paragraph = (props: any) => (<p {...props} className="max-w-screen-md">{props.children}</p>)

export const ImageContainer = (props: {children: React.ReactNode, maxWidth?: number}) => {
  return (<div style={{maxWidth: props.maxWidth ? `${props.maxWidth}px` : undefined}}>{props.children}</div>);
}

const components = {
  h2: H2,
  h3: H3,
  Text,
  CodeBlock,
  inlineCode: InlineCode,
  Highlight,
  ImageContainer,
  p: Paragraph,
  ol: (props: any) => (<ol {...props} className="max-w-screen-md">{props.children}</ol>),
  ul: (props: any) => (<ul {...props} className="max-w-screen-md">{props.children}</ul>)
}

export default function CustomMDXProvider(props: {children: any}) {
  return (
    <MDXProvider components={components}>
      {props.children}
    </MDXProvider>
  );
}