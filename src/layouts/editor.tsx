import React from 'react';

import Navigation from '../components/Navigation';
import Header from '../components/Header';

export default function EditorLayout(props: {children: React.ReactNode, path: string}) {
  return (
    <React.Fragment>
      <Header />
      <div className="px-4 sm:px-6 md:px-8">
        <div className="hidden lg:block fixed z-20 inset-0 top-[61px] left-0 right-auto w-[19.5rem] py-10 px-8 overflow-y-auto">
          <Navigation />
        </div>
        <div className="lg:pl-[19.5rem]">
          <main className="pt-10 w-full min-h-screen">
            {props.children}
          </main>
        </div>
      </div>
    </React.Fragment>
  )
}