import React, {useReducer} from 'react';
import { Link } from "gatsby";

import { OperationsStatusProvider, OperationsStatusIcon, OperationsStatusTrigger } from '@criipto/ui-operations-status';

import Search from './Search';

import logo from '../images/criipto-logo.svg';

export default function Header(props: {path: string | undefined}) {
  const [showDropdown, toggleDropdown] = useReducer((value) => !value, false);
  const [showSearch, toggleSearch] = useReducer(value => !value, false);
  const {path} = props;
  const isVerify = path?.startsWith('/verify');
  const isSignatures = path?.startsWith('/signatures');

  return (
    <React.Fragment>
      <header className="sticky top-0 z-40 w-full backdrop-blur flex-none duration-500 lg:z-50 lg:border-b lg:border-gray-900/10 bg-blue/95 supports-backdrop-blur:bg-blue/60">
        <div className="max-w-screen-2xl mx-auto">
          <div className="py-4 border-b border-gray-900/10 lg:px-8 lg:border-0 mx-4 lg:mx-0 flex justify-between items-center gap-6">
            <div className="relative flex items-center flex-1">
              <a href="/" className="mr-3 flex-none text-white text-2xl flex items-center">
                <img src={logo} alt="Criipto" />
                DOCS
              </a>

              <div className="relative">
                <button
                  className="text-xs text-white leading-5 font-semibold bg-gray-400/20 rounded-full py-1 px-3 flex items-center space-x-2 hover:bg-gray-400/40"
                  onClick={toggleDropdown}
                >
                  {isVerify ? (
                    <React.Fragment>
                      Verify (e-IDs)

                      <svg width="6" height="3" className="ml-2 overflow-visible" aria-hidden="true">
                        <path d="M0 0L3 3L6 0" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"></path>
                      </svg>
                    </React.Fragment>
                  ) : isSignatures ? (
                    <React.Fragment>
                      Signatures

                      <svg width="6" height="3" className="ml-2 overflow-visible" aria-hidden="true">
                        <path d="M0 0L3 3L6 0" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"></path>
                      </svg>
                    </React.Fragment>
                  ) : (
                    'Verify + Signatures'
                  )}
                </button>
                {showDropdown && (
                  <div className="absolute top-full mt-1 py-2 w-60 rounded-lg bg-white shadow ring-1 ring-gray-900/5 text-sm leading-6 font-semibold text-gray-700">
                    <Link to="/verify">
                      <span className="flex items-center justify-between px-3 py-1 text-blue">
                        Verify (e-IDs)
                        {isVerify && (
                          <svg width="24" height="24" fill="none"><path d="m7.75 12.75 2.25 2.5 6.25-6.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                        )}
                      </span>
                    </Link>
                    <Link to="/signatures">
                      <span className="flex items-center justify-between px-3 py-1 text-blue">
                        Signatures
                        {isSignatures && (
                          <svg width="24" height="24" fill="none"><path d="m7.75 12.75 2.25 2.5 6.25-6.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                        )}
                      </span>
                    </Link>
                  </div>
                )}
              </div>

              <button onClick={() => toggleSearch()} type="button" className="hidden lg:flex items-center w-64 text-sm leading-6 bg-white text-slate-400 rounded-md ring-1 ring-slate-900/10 shadow-sm py-1.5 pl-2 pr-3 hover:ring-slate-300 ml-4">
                <svg width="24" height="24" fill="none" aria-hidden="true" className="mr-3 flex-none">
                  <path d="m19 19-3.5-3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                  <circle cx="11" cy="11" r="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></circle>
                </svg>
                Search...
              </button>

              <button onClick={() => toggleSearch()} type="button" className="ml-auto text-white w-8 h-8 -my-1 flex items-center justify-center lg:hidden">
                <span className="sr-only">Search</span>
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="m19 19-3.5-3.5"></path><circle cx="11" cy="11" r="6"></circle>
                </svg>
              </button>
            </div>
            
            <div className="flex items-center relative">
              <OperationsStatusProvider>
                <OperationsStatusTrigger overlayClassname="top-[35px] right-0">
                  <OperationsStatusIcon />
                  <span className="ml-2 inline-block text-white cursor-pointer font-bold hover:text-cyan-300">Operations Status</span>
                </OperationsStatusTrigger>
              </OperationsStatusProvider>
            </div>
            <div className="flex items-center">
              <div>
                <a href="https://manage.criipto.id" target="_blank" className="text-white font-bold mr-2 py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                  Log In
                </a>
                <a href="https://criipto.com" target="_blank" className="bg-white text-blue font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                  Sign Up
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div
        className={`backdrop-blur-sm bg-black/30 fixed h-screen w-screen top-0 left-0 right-0 z-50 p-4 items-center justify-center ${showSearch ? 'flex' : 'hidden'}`}
        onClick={() => toggleSearch()}
      >
        <div className="bg-white rounded-md p-4 w-full h-full max-w-2xl lg:max-h-[42rem] overflow-auto prose" onClick={(event) => event.stopPropagation()}>
          {showSearch ? <Search /> : null}
        </div>
      </div>
    </React.Fragment>
  )
}