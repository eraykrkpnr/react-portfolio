// FixedMenu.js
import React from "react";
import {
    AiFillLinkedin,
    AiFillYoutube,
    AiFillHome,
    AiFillInfoCircle,
    AiFillCode,
    AiFillAppstore
  } from "react-icons/ai";

function FixedMenu() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const size = "1.5rem"; // Define the size variable for all icons

  return (
    <div className="fixed left-0 top-1/2 transform -translate-y-1/2 z-50 ml-36">
      <button
        className="block py-2 px-4 eray text-white mb-4 rounded-lg focus:outline-none menu-icon"
        onClick={() => scrollToSection("welcome")}
      >
        <AiFillHome style={{ fontSize: size }} className="text-textColor"/>
      </button>
      <button
        className="block py-2 px-4 eray text-white mb-4 rounded-lg focus:outline-none menu-icon"
        onClick={() => scrollToSection("about")}
      >
        <AiFillInfoCircle style={{ fontSize: size }} className="text-textColor"/>
      </button>
      <button
        className="block py-2 px-4 eray text-white mb-4 rounded-lg focus:outline-none menu-icon"
        onClick={() => scrollToSection("services")}
      >
        <AiFillCode style={{ fontSize: size }} className="text-textColor"/>
      </button>
      <button
        className="block py-2 px-4 eray text-white mb-4 rounded-lg focus:outline-none menu-icon"
        onClick={() => scrollToSection("portfolio")}
      >
        <AiFillAppstore style={{ fontSize: size }} className="text-textColor"/>
      </button>
    </div>
  );
}

export default FixedMenu;
