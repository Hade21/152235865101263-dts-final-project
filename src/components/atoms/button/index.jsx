import React from "react";

const Button = ({ children, type, style = "container" }) => {
  const container =
    "px-8 py-2 bg-prime-blue rounded-sm shadow-md font-rubik text-white text-lg w-fit transition-all duration-200 hover:bg-sec-blue active:translate-y-1 active:shadow-none";
  const outlined =
    "px-8 py-2 border-2 border-fifth-pink rounded-sm shadow-md font-rubik text-fifth-pink text-lg w-fit transition-all duration-200 hover:bg-fifth-pink hover:text-white active:translate-y-1 active:shadow-none";
  return (
    <>
      <button
        type={type}
        className={style === "container" ? container : outlined}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
