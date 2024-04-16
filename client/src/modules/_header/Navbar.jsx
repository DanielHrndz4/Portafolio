import React, { useEffect } from "react";
import { Link } from 'react-router-dom'; 
import Typewriter from "typewriter-effect";

export default function Navbar({site,color}) {
  useEffect(() => {
    const handleToggleClick = () => {
      nav.classList.toggle('hamburguer')
    };
    const nav = document.querySelector("#navbar")

    const tog = document.querySelector('#toggle');
    tog.addEventListener('click', handleToggleClick);

    return () => {
      tog.removeEventListener('click', handleToggleClick);
    };
  }, []); // El segundo argumento es un array vacío para indicar que este efecto solo se ejecuta una vez al montar el componente

  const navbar = () => {
    const navitem = ["Home", "About", "Stack", "Projects", "Contact"];
    return navitem.map((item) => (
      <li
        key={item}
        className={`${ site === item ? 'text-'+color : 'text-light_content'} hover:text-white hover:font-medium hover:font- ease-in duration-150 cursor-pointer`}
      >
        {item === 'Home' ? (
            <Link to={`/`}>{item}</Link>
          ) : (
            <Link to={`/${item.toLowerCase()}`}>{item}</Link>
          )}
      </li>
    ));
  };

  const social_media = () => {
    const social = ["github", "linkedin", "instagram"];
    return social.map((item) => (
      <li
        key={item}
        className="hover:font- ease-in duration-150 cursor-pointer w-[32px]"
      >
        <img src={`./images/icons/${item}.png`} alt={item} />
      </li>
    ));
  };

  return (
    <div className="mx-auto py-4 text-light_content bg-fixed top-0 flex flex-column w-70">
      <div className="logo text-center w-80 lg:w-1/4 text-[24px] font-bold uppercase flex flex-wrap text-green_dev">
          <span className="font-binline text-white" >{"{"}&nbsp;</span><Typewriter
            options={{
              loop: true,
            }}
            onInit={(typewriter) => {
              typewriter
                .typeString("Daniel Hrndz")
                .pauseFor(2000) // Pausa para dar tiempo de leer
                .deleteAll()
                .typeString("Developer")
                .pauseFor(2000) // Pausa para dar tiempo de leer
                .deleteAll()
                .typeString("Designer")
                .pauseFor(2000) // Pausa para dar tiempo de leer
                .deleteAll()
                .start();
            }}
          />
          <span className="font-binline text-white">&nbsp;{"}"}</span>
      </div>
      <div className="w-3/4 flex justify-end items-center">
      <button id="toggle" className="lg:hidden xl:hidden">hello</button>

        <ul id="navbar" className="lg:flex-wrap gap-5 text-[20px] font-raleway font-medium hidden lg:flex lg:flex-row">
          {navbar()}
          {social_media()}
        </ul>
      </div>
    </div>
  );
}
