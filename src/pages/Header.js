import React, { useState } from "react";
import "./css/header.css";
import { MobileNav } from "./subPages/MobileNav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [open, setOpen] = useState(false);

  return open ? (
    <MobileNav val={open} setVal={setOpen} />
  ) : (
    <div className="Header">
      <h3 className="logo">{!open ? "Stefan.dev" : ""}</h3>

      <ul className="nav">
        <li>Home</li>
        <li>About</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>
      <ul className="mobileMenu">
        <li
          className="triger"
          onClick={() => {
            setOpen(!open);
          }}
        >
          {!open ? (
            <FontAwesomeIcon icon={faBars} size="2xl" />
          ) : (
            <FontAwesomeIcon icon={faXmark} size="2xl" />
          )}
        </li>
      </ul>
    </div>
  );
};

export default Header;
