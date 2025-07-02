import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import Button from "../../../components/Button";
import { IoIosCloseCircleOutline, IoMdLogIn } from "react-icons/io";
import { CiMenuBurger } from "react-icons/ci";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.title = "TubeFlix";
  }, []);

  const NavLink = ({ title }) => (
    <Link
      to={title}
      offset={-100}
      spy
      smooth
      activeClass="text-p1"
      className="base text-[1px] text-p3 capitalize transition-colors duration-500 cursor-pointer hover:text-white px-4 max-lg:h5"
    >
      {title}
    </Link>
  );

  return (
    <header className="w-full fixed top-0 z-20 font-bebas flex-center backdrop-blur-sm">
      <div className="container flex-between max-lg:px-6 px-1">
        <div className="flex-center cursor-pointer">
          <a href="">
            <img
              src="/Images/tubeflix.png"
              alt="Tubeflix logo"
              width={55}
              height={55}
              className="cursor-pointer"
            />
          </a>
          <p className="text-p1 px-2 ">TubeFlix</p>
        </div>

        {/* Desktop nav */}
        <nav className="hidden lg:flex">
          <NavLink title="About" />
          <NavLink title="Features" />
          <NavLink title="Trending" />
          <NavLink title="Pricing" />
          <NavLink title="Contact Us" />
        </nav>

        {/* Desktop login button */}
        <div className="hidden lg:block">
          <Button icon={<IoMdLogIn className="group-hover:text-p1" />}>
            Log in
          </Button>
        </div>

        {/* Mobile hamburger / close button */}
        <div
          className="lg:hidden hover:text-p1 font-bold text-3xl z-50"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {isOpen ? <IoIosCloseCircleOutline /> : <CiMenuBurger />}
        </div>
      </div>

      {/* Mobile nav - shows only when open */}
      {isOpen && (
        <nav className="fixed top-0 left-0 w-full h-screen bg-s2 flex-col-center space-y-8 z-50 transition-all duration-500 sidebar-before px-4 lg:hidden">
          {/* Close button inside mobile nav */}
          <div
            className="absolute top-5 right-6 text-3xl text-white cursor-pointer"
            onClick={() => setIsOpen(false)}
          >
            <IoIosCloseCircleOutline />
          </div>

          {/* Nav Links */}
          <NavLink title="About" />
          <NavLink title="Features" />
          <NavLink title="Trending" />
          <NavLink title="Pricing" />
          <NavLink title="Testimonials" />
          <NavLink title="Contact Us" />

          <div className="">
            <Button icon={<IoMdLogIn className="group-hover:text-p1" />}>
              Log in
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
