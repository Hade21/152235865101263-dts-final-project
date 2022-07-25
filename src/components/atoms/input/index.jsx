import React from "react";

const Input = ({ type, name, placeholder, onChange, value }) => {
  return (
    <div className="relative w-full">
      <input
        type={type}
        name={name}
        id={name}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full bg-transparent outline-none border-b-2 border-third-ocean px-3 py-2 font-rubik font-normal text-xl focus:outline-none placeholder:text-transparent focus:border-prime-blue transition-all duration-200 peer"
        value={value}
      />
      <label
        htmlFor={name}
        className="absolute -top-1 left-3 text-xs peer-placeholder-shown:top-2 peer-placeholder-shown:text-xl transition-all duration-200"
      >
        {placeholder}
      </label>
    </div>
  );
};

export default Input;
