import React from "react";
import { BiBook, BiMoon, BiSun } from "react-icons/bi";
import Logo from "./Logo";

const Header = ({darkMode, toggle}) => {
  return (
    <div className="flex items-center justify-between">
     <div className="flex gap-2">
     <BiBook className="w-10 h-10 cursor-pointer text-purple-700 dark:fill-[#8517f3]" />
     <Logo />
     </div>

      <nav className="flex items-center">
        <button onClick={toggle}>
          {darkMode ? (
            <BiSun className="w-8 h-8 cursor-pointer  dark:fill-[#A445ED]" />
          ) : (
            <BiMoon className="w-8 h-8 cursor-pointer text-purple-700 dark:fill-[#A445ED]" />
          )}
        </button>
      </nav>
    </div>
  );
};

export default Header;
