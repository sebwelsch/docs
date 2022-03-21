import React, { useEffect } from 'react';
import * as Sentry from "@sentry/browser";

import MdxLayout from './mdx';

export default function NotFoundLayout(props: {children: React.ReactNode, pageContext: any, path: string, pageResources: any}) {
  useEffect(() => {
    Sentry.captureException(`404 page: ${props.path || ''}`);
  }, []);

  return (
    <MdxLayout {...props} />
  );
}