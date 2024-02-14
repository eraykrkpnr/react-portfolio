// Navigation.js
import React from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiFillHome, AiFillInfoCircle, AiFillCode, AiFillAppstore } from "react-icons/ai";

function Navigation({ darkMode, setDarkMode }) {
  return (
    <nav className="py-10 mb-12 flex justify-between">
      <h1 className="text-2xl font-burtons dark:text-textColor">kray</h1>
      <ul className="flex items-center">
        {/*
        <li>
          <BsFillMoonStarsFill
            onClick={() => {
              setDarkMode(!darkMode);
            }}
            className="cursor-pointer text-2xl text-textColor"
          />
        </li>
          */}
        <li>
          <a
            className="bg-gradient-to-r from-cyan-500 to-teal-500 text-textColor   px-4 py-2 rounded-md ml-8"
            href="#services"
          >
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
