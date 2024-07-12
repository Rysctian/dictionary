import React from "react";

function Logo() {
  return (
    <div>
      <a href="/" className=" flex items-center justify-center gap-2">
        <div className=" text-2xl md:text-3xl font-extrabold tracking-tighter xl:text-3xl/none bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
          Dictionary
        </div>
      </a>
    </div>
  );
}

export default Logo;
