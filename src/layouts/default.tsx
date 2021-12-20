import React from 'react';
import { StaticImage } from "gatsby-plugin-image";

export default function DefaultLayout(props: {children: React.ReactNode}) {
  return (
    <div>
      <header className="sticky top-0 z-40 w-full backdrop-blur flex-none duration-500 lg:z-50 lg:border-b lg:border-gray-900/10 bg-blue/95 supports-backdrop-blur:bg-blue/60">
        <div className="max-w-7xl mx-auto">
          <div className="py-4 border-b border-gray-900/10 lg:px-8 lg:border-0 mx-4 lg:mx-0">
            <a href="/">
              <StaticImage
                src="../images/criipto-logo.svg"
                alt="Criipto"
                loading="eager"
                placeholder='none'
                quality={90}
              />
            </a>
          </div>
        </div>
      </header>
      {props.children}
    </div>
  )
}