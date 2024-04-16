import React, { useEffect } from "react";
import Navbar from "./Navbar";
import Typewriter from "typewriter-effect";

function Header() {
  return (
    <div className="flex flex-wrap bg-dark_mode">
      <Navbar color='green_dev' site='Home'></Navbar>
      <div className="w-70 h-[34rem] bg-dark_mode flex flex-column m-auto">
        <div className="w-full h-full font-raleway font-bold text-white flex justify-center items-center">
          <div className="capitalize w-85 flex flex-col gap-3">
            <span className="uppercase text-lg">Hi there 👋 I'm</span>
            <div className="flex flex-col">
              <span className="font-extrabold capitalize text-6xl">Daniel</span>
              <span className="font-extrabold capitalize text-6xl">
                Hernández
              </span>
            </div>
            <span className="uppercase text-lg text-green_dev">
              Full Stack web developer
            </span>
            <span className="text-md">
              Passionate full-stack web developer with strong technical and
              non-technical skills, dedicated to crafting interactive web
              applications.
            </span>
          </div>
        </div>
        <div className="w-full h-full flex justify-center items-center">
          <div className="w-[70%]">
            <img
              src="./images/avatar/avatar.png"
              alt="Daniel Hrndz"
              className="min-w-[100%] "
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
