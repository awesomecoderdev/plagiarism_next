import React, { Fragment } from 'react';

const Sidebar = ({children}) => {
    return (
      <Fragment>
        <div className="relative w-80 first-letter:min-h-screen dark:border-slate-500/20 border-r border-dashed">
          <div className="relative w-full h-14 shadow-sm flex items-center justify-center">
            <img src="/favicon-32x32.png" alt="Awesome" />
            <h1 className="font-bold mx-2">Plagiarism</h1>
          </div>
          <div className="relative p-4 ">
            {children}
          </div>
        </div>
      </Fragment>
    );
}

export default Sidebar;
