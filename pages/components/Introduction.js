// Introduction.js
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import {
    AiFillLinkedin,
    AiFillYoutube,
} from "react-icons/ai";

function Introduction() {
  const [text, count] = useTypewriter({
    words: ["I'm a Fullstack Developer.", "I love games.", "I love music."],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className="text-center">
      <div className="p-10">
        <h2 className="text-5xl py-2 text-textColor font-medium md:text-6xl md:mt-28">
          Eray Kırkpınar
        </h2>
        <h3 className="text-2xl py-2 md:text-3xl dark:text-textColor">
          {text}
          <Cursor cursorColor="rgb(153 246 228)" />
        </h3>
        <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto dark:text-textColor">
          I am Eray Kırkpınar and I use <span className="text-teal-500">Kray</span> as a nickname on
          <br />
          social media. I love games and music.
        </p>
      </div>
      <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
        <AiFillLinkedin className="text-textColor"/>
        <AiFillYoutube className="text-textColor"/>
      </div>
    </div>
  );
}

export default Introduction;
