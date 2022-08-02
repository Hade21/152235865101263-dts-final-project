import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
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
  const [menu, setMenu] = useState(false);

  const handleSearch = (e) => {
    dispatch(setSearchKey(e.target.value));
    if (e.target.value.length > 0) {
      dispatch(setCategory(`Menampilkan hasil : ${e.target.value}`));
    } else {
      dispatch(setCategory(null));
    }
  };

  return (
    <div className="top-bar px-2 py-2 md:px-4 md:py-4 bg-third-ocean flex justify-end md:justify-between items-center">
      <div className="navigation hidden md:block">
        <p
          className="font-rubik text-base font-medium text-slate-500 hover:text-slate-800 cursor-pointer"
          onClick={() => dispatch(setWishlist())}
        >
          {!wishlist ? "WishList" : "Home"}
        </p>
      </div>
      <div className="search hidden md:block">
        <Search onChange={handleSearch} />
      </div>
      <div className="icon md:invisible visible relative md:static">
        <FontAwesomeIcon
          icon={faBars}
          color="#809bce"
          size="lg"
          className="text-base"
          onClick={() => setMenu(!menu)}
        />
        <div
          className={`content absolute md:hidden bg-third-ocean px-4 py-4 flex-col justify-center gap-3 -right-1 top-7 rounded-lg ${
            menu ? "flex" : "hidden"
          }`}
        >
          <p
            className="font-rubik text-sm font-medium text-slate-500 hover:text-slate-800 hover:bg-sec-blue cursor-pointer"
            onClick={() => dispatch(setWishlist())}
          >
            {wishlist ? "Home" : "Wishlist"}
          </p>
          <div className="search">
            <Search onChange={handleSearch} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
