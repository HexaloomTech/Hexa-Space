import React, { useState } from "react";
import logo from "/logo.png"
import { CiMenuFries } from "react-icons/ci";
import { LiaTimesSolid } from "react-icons/lia";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="text-white p-4 fixed w-full top-0 z-10">
      <div className="container mx-auto flex justify-between items-center">
      <img src={logo} alt="logo" className="w-24"/>
        {/* Hamburger & Close Icon */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-2xl focus:outline-none cursor-pointer"
        >
          {menuOpen ? <LiaTimesSolid />
 : <CiMenuFries />
          }
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex text-lg space-x-6 cursor-pointer">
          {["Home", "About", "projects", "Blog", "Team", "Contact"].map((item) => (
            <li key={item}>
              <a href={`#${item.toLowerCase()}`} className="hover:text-violet-400">
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="md:hidden text-center  py-4 space-y-4">
          {["Home", "About", "projects", "Blog", "Team", "Contact"].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="block hover:text-violet-400"
                onClick={() => setMenuOpen(false)}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
