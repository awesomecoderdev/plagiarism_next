import React, { Fragment } from "react";
import Image from "next/image";
import Content from "./Content";
import Sidebar from "./Sidebar";
import darkPng from "../../public/images/dark.png";
import darkAvif from "../../public/images/dark.avif";
import lightPng from "../../public/images/light.png";
import lightAvif from "../../public/images/light.avif";
import { AdjustmentsIcon, AnnotationIcon, ClipboardListIcon, LogoutIcon, ViewGridIcon } from "@heroicons/react/solid";

const Hero = () => {
  return (
    <div className="opacity-10 absolute z-20 top-0 right-0 bottom-0 left-0 inset-x-0 flex justify-center overflow-hidden pointer-events-none">
      <div className="w-[108rem] flex-none flex justify-end">
        <picture>
          <source srcSet="/images/light.avif" type="image/avif" />
          <Image
            src="/images/light.png"
            alt="Light"
            layout="fill"
            className="w-[71.75rem] flex-none max-w-none dark:hidden"
          />
        </picture>
        <picture>
          <source srcSet="/images/dark.avif" type="image/avif" />
          <Image
            src="/images/dark.png"
            alt="Dark"
            layout="fill"
            className="w-[90rem] flex-none max-w-none hidden dark:block"
          />
        </picture>
      </div>
    </div>
  );
}

const Main = ({ children }) => {
  return (
    <Fragment>
      <Hero/>
      <div className="relative mx-auto w-full flex">
        <Sidebar>
          <div className="grid relative space-y-3">
            <div className={` ${ "bg-primary-100 text-primary-900" } transition-colors duration-150 relative cursor-pointer hover:bg-slate-100 p-3 rounded-lg flex justify-start items-center`}>
              <ViewGridIcon className="h-5 w-5 text-slate-600 pointer-events-none" />
              <span className="font-medium text-sm ml-2 pointer-events-none">Dashboard</span>
            </div>
            <div className="transition-colors duration-150 relative cursor-pointer hover:bg-slate-100 p-3 rounded-lg flex justify-start items-center">
              <ClipboardListIcon className="h-5 w-5 text-slate-600 pointer-events-none" />
              <span className="font-medium text-sm ml-2 pointer-events-none">Websites</span>
            </div>
            <div className="transition-colors duration-150 relative cursor-pointer hover:bg-slate-100 p-3 rounded-lg flex justify-start items-center">
              <AdjustmentsIcon className="h-5 w-5 text-slate-600 pointer-events-none" />
              <span className="font-medium text-sm ml-2 pointer-events-none">Settings</span>
            </div>
            <div className="transition-colors duration-150 relative cursor-pointer hover:bg-slate-100 p-3 rounded-lg flex justify-start items-center">
              <AnnotationIcon className="h-5 w-5 text-slate-600 pointer-events-none" />
              <span className="font-medium text-sm ml-2 pointer-events-none">Support</span>
            </div>
            <div className="transition-colors duration-150 relative cursor-pointer hover:bg-slate-100 p-3 rounded-lg flex justify-start items-center">
              <LogoutIcon className="h-5 w-5 text-slate-600 pointer-events-none" />
              <span className="font-medium text-sm ml-2 pointer-events-none">Logout</span>
            </div>
          </div>
        </Sidebar>
        <Content>
            {children}
        </Content>
      </div>
    </Fragment>
  );
};

export default Main;
