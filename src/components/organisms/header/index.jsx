import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faListUl,
  faUserCircle,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { Logo } from "../../../assets";
import { ListCategory } from "../../molecules";

const Header = () => {
  const [show, setShow] = useState(false);
  return (
    <header className="px-4 py-8 bg-third-ocean w-fit h-screen flex flex-col justify-between items-center">
      <div className="logo w-fit">
        <img src={Logo} alt="logo" className="rounded-lg w-14 h-14" />
      </div>
      <div className="category flex flex-col h-2/5 gap-6 justify-center">
        <FontAwesomeIcon
          icon={faListUl}
          color="#809bce"
          size="2x"
          className="cursor-pointer"
          onClick={() => setShow(!show)}
        />
        <div className={show ? "list h-full w-fit" : "list w-0 h-0"}>
          {show ? <ListCategory /> : null}
        </div>
      </div>
      <div className="flex flex-col gap-6">
        <div className="user">
          <FontAwesomeIcon icon={faUserCircle} color="#809bce" size="3x" />
          <h3 className="font-rubik font-normal text-slate-600 text-base w-min">
            User Testing
          </h3>
        </div>
        <FontAwesomeIcon
          icon={faRightFromBracket}
          color="#c64191"
          size="2x"
          className="cursor-pointer"
        />
      </div>
    </header>
  );
};

export default Header;
