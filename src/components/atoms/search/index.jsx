import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Search = ({ onChange }) => {
  const [show, setShow] = useState(false);
  return (
    <div className="w-fit flex flex-col md:flex-row md:gap-4">
      <label
        htmlFor="search"
        className={`font-Inter font-medium text-slate-600 flex items-center gap-2 justify-center cursor-pointer ${
          show ? "text-base md:text-lg" : "text-sm md:text-base"
        }`}
        onClick={() => setShow(!show)}
      >
        <FontAwesomeIcon
          icon={faSearch}
          color="#809bce"
          size="lg"
          className="text-sm sm:text-base lg:text-lg"
        />
        Search
      </label>
      <input
        type="text"
        name="search"
        id="search"
        className={`bg-transparent outline-none font-rubik font-normal text-sm sm:text-base lg:text-lg focus:outline-none placeholder:text-transparent border-prime-blue transition-all duration-200 ${
          show ? "w-full h-fit border-b-2 px-3 py-2" : "w-0 h-0 border-none p-0"
        }`}
        onChange={onChange}
        onBlur={() => setShow(!show)}
      />
    </div>
  );
};

export default Search;
