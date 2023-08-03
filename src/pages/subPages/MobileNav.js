import React from "react";
import "./mobilenav.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
export const MobileNav = ({ val, setVal }) => {
  return (
    <div>
      <ul className="navMOB">
        <li
          className="triger"
          onClick={() => {
            setVal(!val);
          }}
        >
          {!val ? "open" : <FontAwesomeIcon icon={faXmark} size="2xl" />}
        </li>
      </ul>
      <ul className="nav1">
        <li>Home</li>
        <li>About</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>
    </div>
  );
};
