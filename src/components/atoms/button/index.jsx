import React from "react";

const Button = ({ children, type, model = "container" }) => {
  const container =
    "px-8 py-2 border-2 border-prime-blue bg-prime-blue rounded-sm shadow-md font-rubik text-white text-lg w-fit transition-all duration-200 hover:bg-sec-blue active:translate-y-1 active:shadow-none";
  const outlined =
    "px-8 py-2 border-2 border-prime-blue rounded-sm shadow-md font-rubik text-prime-blue text-lg w-fit transition-all duration-200 hover:bg-sec-blue hover:text-white active:translate-y-1 active:shadow-none";
  return (
    <>
      <button
        type={type}
        className={model === "container" ? container : outlined}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
