import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setCategory,
  setSearchKey,
  setWishlist,
} from "../../../app/bookSlice/bookSlice";
import { Search } from "../../atoms";

const TopBar = () => {
  const dispatch = useDispatch();
  const wishlist = useSelector((state) => state.book.wishlist);

  const handleSearch = (e) => {
    dispatch(setSearchKey(e.target.value));
    if (e.target.value.length > 0) {
      dispatch(setCategory(`Menampilkan hasil : ${e.target.value}`));
    } else {
      dispatch(setCategory(null));
    }
  };

  return (
    <div className="top-bar px-4 py-4 bg-third-ocean flex justify-between">
      <div className="navigation">
        <p
          className="font-rubik text-base font-medium text-slate-500 hover:text-slate-800 cursor-pointer"
          onClick={() => dispatch(setWishlist())}
        >
          {!wishlist ? "WishList" : "Home"}
        </p>
      </div>
      <div className="search">
        <Search onChange={handleSearch} />
      </div>
      <div className="icon md:invisible">
        <FontAwesomeIcon icon={faBars} color="#809bce" size="lg" />
      </div>
    </div>
  );
};

export default TopBar;
