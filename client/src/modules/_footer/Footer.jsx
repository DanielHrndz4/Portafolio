import React from "react";
import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";

export default function Footer() {
  const social_media = () => {
    const social = ["github", "linkedin", "instagram"];
    return social.map((item) => (
      <li
        key={item}
        className="hover:font- ease-in duration-150 cursor-pointer w-[32px]"
      >
        <img src={`./src/assets/images/icons/${item}.png`} alt={item} />
      </li>
    ));
  };
  const navbar = () => {
    const navitem = ["Home", "About", "Stack", "Projects", "Contact"];
    return navitem.map((item) => (
      <li
        key={item}
        className="hover:text-white hover:font-medium hover:font- ease-in duration-150 cursor-pointer"
      >
        {item === 'Home' ? (
            <Link to={`/`}>{item}</Link>
          ) : (
            <Link to={`/${item.toLowerCase()}`}>{item}</Link>
          )}
      </li>
    ));
  };
  return (
    <div className="w-full py-12">
      <div className="flex flex-row w-80 m-auto pb-6q">
        <div className="logo text-center w-9/12 text-[24px] font-bold uppercase flex flex-wrap text-solid_content">
          <span className="font-binline text-light_content">{"{"}&nbsp;</span>
          <span>Daniel Hrndz</span>
          <span className="font-binline text-light_content">&nbsp;{"}"}</span>
        </div>
        <div className="flex flex-row w-full m-auto">
          <div className="text-light_content m-auto w-full text-center">
            <span>+503 7198-5205</span>
          </div>
          <div className="text-light_content m-auto w-full text-center lowercase">
            <span>danielhrndz38@gmail.com</span>
          </div>
          <div>
            <ul className="flex flex-row gap-5 text-[20px] font-raleway font-medium mx-auto w-full">
              {social_media()}
            </ul>
          </div>
        </div>
      </div>
      <hr className="w-85 m-auto border-light_content mt-8"/>
      <div className="w-80 flex justify-center text-light_content items-center m-auto py-10">
        <ul className="flex flex-wrap gap-5 text-[20px] font-raleway font-medium w-full">
          {navbar()}
        </ul>
        <div className="text-[20px] font-raleway font-medium w-full">
          <p className="text-right">Designed and build by <span className="gradient-text font-bold">Daniel Hernández</span></p>
        </div>
      </div>
    </div>
  );
}
