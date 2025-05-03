import React from "react";
import { socials } from "../constants";

const Footer = () => {
  return (
    <footer className="">
      <div className="py-3 px-5 relative">
        <div className="flex w-full max-md:flex-col">
          <div className="small-compact flex flex-1 flex-wrap items-center justify-center gap-5">
            <p className="opacity-70">Copyright, TubeFlix</p>
            <div className="flex items-center justify-center sm:ml-auto">
              <p className="legal-after relative mr-9 text-p5 transition-all duration-500 hover:text-p1">
                Privacy Policy
              </p>
              <p className="text-p5 transition-all duration-500 hover:text-p1">
                terms of use
              </p>
            </div>
          </div>
          <ul className="flex flex-1 justify-center items-center gap-3 max-md:mt-10 md:justify-end">
            {socials.map(({ id, url, title, icon }) => (
              <li key={id}>
                <a href={url} className="social-icon">
                  <img
                    src={icon}
                    alt={`icon of ${title}`}
                    className="size-1/3 object-contain"
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="absolute inset-0 bg-linear-to-tl from-s1 to-p2 max-lg:opacity-50 max-xl:opacity-60 mix-blend-soft-light -z-2"></div>
        <div className="absolute inset-0 bg-linear-to-tr from-s1 to-p2 max-lg:opacity-50 max-xl:opacity-60 mix-blend-soft-light -z-2"></div>
      </div>
    </footer>
  );
};

export default Footer;
