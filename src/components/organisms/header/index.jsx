import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faListUl,
  faUserCircle,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { Logo } from "../../../assets";
import { ListCategory } from "../../molecules";
import { api } from "../../../config/api/api";
import { useCookies } from "react-cookie";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../../app/userSlice/userReducer";
import { useNavigate } from "react-router-dom";
import { setReset } from "../../../app/bookSlice/bookSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [cookies, setCookies, removeCookies] = useCookies(["token"]);
  const user = useSelector((state) => state.user.user);

  const handleLogout = () => {
    api
      .post(
        "/logout",
        {},
        {
          headers: {
            Authorization: `Bearer ${cookies.token}`,
          },
        }
      )
      .then((res) => {
        if (res.status === 200) {
          if (res.data.token.status === "Revoked") {
            removeCookies("token");
            dispatch(setUser(null));
            dispatch(setReset());
            navigate("/login");
          }
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  console.log(user);

  return (
    <header className="px-2 py-2 lg:px-4 lg:py-8 bg-third-ocean w-fit h-screen flex flex-col justify-between items-center z-10">
      <div className="logo w-fit">
        <img
          src={Logo}
          alt="logo"
          className="rounded-lg lg:w-14 lg:h-14 sm:w-10 sm:h-10 w-8 h-8"
        />
      </div>
      <div className="category flex flex-col h-2/5 gap-6 justify-center">
        <FontAwesomeIcon
          icon={faListUl}
          color="#809bce"
          size="lg"
          className="cursor-pointer text-lg sm:text-2xl lg:text-3xl"
          onClick={() => setShow(!show)}
        />
        <div className={show ? "list h-full w-fit" : "list w-0 h-0"}>
          {show ? <ListCategory /> : null}
        </div>
      </div>
      <div className="flex flex-col gap-6">
        <div className="user">
          <FontAwesomeIcon
            icon={faUserCircle}
            color="#809bce"
            size="lg"
            className="text-lg sm:text-2xl lg:text-3xl"
          />
          <h3 className="font-rubik font-normal text-slate-600 text-xs lg:text-base w-min">
            {user ? user.name : "Guest"}
          </h3>
        </div>
        <FontAwesomeIcon
          icon={faRightFromBracket}
          color="#c64191"
          size="lg"
          className="cursor-pointer text-lg sm:text-2xl lg:text-3xl"
          onClick={handleLogout}
        />
      </div>
    </header>
  );
};

export default Header;
