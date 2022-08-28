import React from 'react';
import { SearchIcon } from '@heroicons/react/outline';
import { BellIcon, UserCircleIcon } from '@heroicons/react/solid';
import Image from 'next/image'

const Content = ({children}) => {
    return (
        <div className="relative w-full">
            <div className="absolute top-0 shadow-sm w-full flex px-6 justify-between items-center h-14 transition-colors duration-500 backdrop-blur-3xl z-40 bg-white/10 dark:bg-black/10">
                <SearchIcon className="h-5 w-5 text-slate-600 cursor-pointer" />
                <div className="flex justify-between items-center space-x-4">
                    <button className="relative flex justify-center items-center h-10 w-10 rounded-full outline-none border-none transition-colors duration-150 bg-slate-100/20 hover:bg-slate-400/10">
                        <BellIcon className="h-5 w-5 text-slate-600/80 cursor-pointer" />
                        <span className="absolute top-1.5 right-1.5 flex justify-center items-center h-3 w-3 rounded-full text-xs bg-red-400 text-white">
                        </span>
                    </button>
                    <button className="relative flex justify-center items-center h-10 w-10 rounded-full outline-none border-none transition-colors duration-150 bg-slate-100/20 hover:bg-slate-400/10">
                        <UserCircleIcon className="h-5 w-5 text-slate-600/80 cursor-pointer" />
                    </button>
                </div>
            </div>
            <div className="relative w-full mt-14 p-6">
                {children}
            </div>
        </div>
    );
}

export default Content;
