import React, { useEffect, useState } from "react";
import axios from "axios";

export default function FragStack() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://portafolio-1g6k.onrender.com/api/lan")
      .then((response) => setData(response.data));
  }, []);

  const language = () => {
    return data.slice(0,12).map((item, index) => (
      <div className="w-3/5 m-auto relative group" key={index}>
        <div className="w-full h-full relative hover:blur-[3px]">
          <img
            src={`./images/programming_language/${item.name}.png`}
            alt={item.name}
            className="mx-auto w-full object-contain group-hover:blur-[5px] transition easy-in-out duration-300 hover:cursor-pointer" // Para centrar las imágenes
          />
        </div>
        <div className="text-center opacity-0 group-hover:text-white group-hover:opacity-100 absolute flex bottom-0 left-0 h-full items-center justify-center w-full cursor-pointer text-3xl">
          <h1 className="[text-shadow:3px_3px_3px_rgb(0_0_0_/_70%)]">
            {item.name.replace("sharp", "#").replace("mas", "++")}
          </h1>
        </div>
      </div>
    ));
  };
  return (
    <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 gap-y-12 w-3/4 mb-24 mt-24 m-auto">
      {language()}
    </div>
  );
}
