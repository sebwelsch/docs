import React from 'react';

import Navigation from '../components/Navigation';
import Header from '../components/Header';

export default function DefaultLayout(props: {children: React.ReactNode, path: string}) {
  return (
    <div>
      <Header />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="hidden lg:block fixed z-20 inset-0 top-[61px] left-[max(0px,calc(50%-40rem))] right-auto w-[19.5rem] py-10 px-8 overflow-y-auto">
          <Navigation />
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