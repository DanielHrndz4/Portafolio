import React, { useEffect, useState } from "react";
import axios from "axios";

export default function FragStackComplete() {
  const [showAll, setShowAll] = useState(false);
  const [completeData, setCompleteData] = useState([]);
  const category = "programming language";
  useEffect(() => {
    axios
      .get(`https://portafolio-1g6k.onrender.com/api/lan/${category}`)
      .then((response) => setCompleteData(response.data));
  }, []);

  function FragLanguague(name) {
    return (
      <div className="w-3/5 m-auto relative group" key={name}>
        <div className="w-full h-full relative hover:blur-[3px]">
          <img
            src={`./src/assets/images/programming_language/${name}.png`}
            alt={name}
            className="mx-auto w-full object-contain group-hover:blur-[5px] transition easy-in-out duration-300 hover:cursor-pointer" // Para centrar las imágenes
          />
        </div>
        <div className="text-center opacity-0 group-hover:text-white group-hover:opacity-100 absolute flex bottom-0 left-0 h-full items-center justify-center w-full cursor-pointer text-3xl">
          <h1 className="[text-shadow:3px_3px_3px_rgb(0_0_0_/_70%)]">
            {name.replace("sharp", "#").replace("mas", "++")}
          </h1>
        </div>
      </div>
    );
  }

  const language = () => {
    if (showAll) {
      return completeData.map((item) => FragLanguague(item.name));
    } else {
      return completeData.slice(0, 12).map((item) => FragLanguague(item.name));
    }
  };

  const handleShowAll = () => {
    setShowAll((show) => !show);
  };

  return (
    <>
      <div className="grid grid-cols-6 gap-6 gap-y-12 w-3/4 mb-20 mt-20 m-auto">
        {language()}
      </div>
      <div className="w-3/4 m-auto">
        <button
          onClick={handleShowAll}
          className="duration-300 transition-transform font-bold border-2 border-green_dev hover:bg-solid_content hover:text-black hover:border-solid_content ease-in-out py-2 px-6 rounded-md text-green_dev"
        >
          {showAll ? "See Less" : "See More"}
        </button>
      </div>
    </>
  );
}
