import React, {useReducer} from 'react';
import { StaticImage } from "gatsby-plugin-image";

import Navigation from '../components/Navigation';

export default function DefaultLayout(props: {children: React.ReactNode, uri: string}) {
  const [showDropdown, toggleDropdown] = useReducer((value) => !value, false);

  return (
    <div>
      <header className="sticky top-0 z-40 w-full backdrop-blur flex-none duration-500 lg:z-50 lg:border-b lg:border-gray-900/10 bg-blue/95 supports-backdrop-blur:bg-blue/60">
        <div className="max-w-7xl mx-auto">
          <div className="py-4 border-b border-gray-900/10 lg:px-8 lg:border-0 mx-4 lg:mx-0">
            <div className="relative flex items-center">
              <a href="/" className="mr-3 flex-none">
                <StaticImage
                  src="../images/criipto-logo.svg"
                  alt="Criipto"
                  loading="eager"
                  placeholder='none'
                  quality={90}
                />
              </a>

              <div className="relative">
                <button
                  className="text-xs text-white leading-5 font-semibold bg-gray-400/20 rounded-full py-1 px-3 flex items-center space-x-2 hover:bg-gray-400/40"
                  onClick={toggleDropdown}
                >
                  Document Signatures

                  <svg width="6" height="3" className="ml-2 overflow-visible" aria-hidden="true">
                    <path d="M0 0L3 3L6 0" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"></path>
                  </svg>
                </button>
                {showDropdown && (
                  <div className="absolute top-full mt-1 py-2 w-60 rounded-lg bg-white shadow ring-1 ring-gray-900/5 text-sm leading-6 font-semibold text-gray-700">
                    <a href="https://docs.criipto.com" className="block px-3 py-1">Verify (e-IDs)</a>
                    <span className="flex items-center justify-between px-3 py-1 text-blue">
                      Document Signatures
                      <svg width="24" height="24" fill="none"><path d="m7.75 12.75 2.25 2.5 6.25-6.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="hidden lg:block fixed z-20 inset-0 top-[61px] left-[max(0px,calc(50%-40rem))] right-auto w-[19.5rem] py-10 px-8 overflow-y-auto">
          <Navigation uri={props.uri} />
        </div>
        <div className="lg:pl-[19.5rem]">
          <main className="max-w-3xl mx-auto relative z-20 pt-10 xl:max-w-none">
            {props.children}
          </main>
        </div>
      </div>
    </div>
  )
}