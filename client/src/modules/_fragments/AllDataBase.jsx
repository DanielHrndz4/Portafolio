import React, { useEffect, useState } from "react";
import axios from "axios";

export default function AllDataBase() {
  const [database, setDatabase] = useState([]);
  const category = "database managers";

  useEffect(() => {
    axios
      .get(`https://portafolio-1g6k.onrender.com/api/lan/${category}`)
      .then((response) => setDatabase(response.data));
  });
  const language_db = () => {
    return database.map((item, index) => (
      <div className="w-[80%] m-auto relative group" key={index}>
        <div className="w-full h-full relative hover:blur-[3px]">
          <img
            src={`./images/programming_language_db/${item.name}.png`}
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
    <div className="grid grid-cols-6 gap-6 gap-y-12 w-3/4 mb-20 mt-20 m-auto">
      {language_db()}
    </div>
  );
}
