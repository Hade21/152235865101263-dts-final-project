import React from "react";
import { Search } from "../../atoms";

const TopBar = () => {
  return (
    <div className="top-bar px-4 py-4 bg-third-ocean flex justify-center">
      <div className="search">
        <Search />
      </div>
    </div>
  );
};

export default TopBar;
