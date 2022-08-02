import React from "react";

const Footer = () => {
  return (
    <div className="bg-third-ocean w-full absolute bottom-0 right-0 py-1 px-12 md:py-3">
      <h2 className="font-rubik text-xs md:text-base font-normal text-slate-800">
        Made with <span className="text-red-600 text-xl">&hearts;</span> by
        Muhammad Abdurrohman
      </h2>
      <p className="font-rubik text-xs md:text-base text-slate-800 font-medium">
        &copy; 2022
      </p>
    </div>
  );
};

export default Footer;
