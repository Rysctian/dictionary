import React from "react";
import { LuSearchX } from "react-icons/lu";

const Invalid = () => {
  return (
    <div className="w-full h-full flex items-center justify-center flex-col gap-8">
   
      <p className="text-[#2d2d2d] flex items-center gap-2 text-3xl font-bold dark:text-white">
      <LuSearchX /> No definitions found
      </p>
      <p className="text-center text-[#757575] text-sm md:text-lg">
        Sorry, we couldn't find any definitions for the word you were looking
        for. You might want to check the web for more information, or try
        searching for a different word.
      </p>
    </div>
  );
};

export default Invalid;
