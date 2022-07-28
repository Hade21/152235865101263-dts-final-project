import React from "react";
import { useDispatch } from "react-redux";
import { setSearchKey } from "../../../app/bookSlice/bookSlice";
import { Search } from "../../atoms";

const TopBar = () => {
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    dispatch(setSearchKey(e.target.value));
  };

  return (
    <div className="top-bar px-4 py-4 bg-third-ocean flex justify-center">
      <div className="search">
        <Search onChange={handleSearch} />
      </div>
    </div>
  );
};

export default TopBar;
