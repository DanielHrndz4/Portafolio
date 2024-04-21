import React, { useEffect, useState } from "react";
import Title from "../_fragments/Title";
import axios from "axios";

export default function Footer() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const array = [
        "HTML",
        "CSS",
        "JavaScript",
        "React JS",
        "Express JS",
        "Tailwind CSS",
        "MongoDB",
        "Material Tailwind",
      ];
      const fetchedData = [];
      for (const item of array) {
        try {
          const response = await axios.get(
            `https://portafolio-1g6k.onrender.com/api/lan/name/${item}`
          );
          fetchedData.push(response.data);
        } catch (error) {
          console.error(error);
        }
      }
      setData(fetchedData);
    };

    fetchData();
  }, []);

  console.log(data);

  const madeWith = () => {
    return data.map((lan, index) => (
      <div className="bg-white hover:scale-105 hover:cursor-pointer ease-in-out duration-200 font-bold text-Cbackground p-2 rounded-full content-center text-center" key={index}>
        <img
          src={`/images/tech_stack/${lan[0].name}.png`}
          className="w-[24px] inline mr-2"
          alt={lan[0].name}
        />
        {lan[0].name}
      </div>
    ));
  };

  return (
    <div className="w-full pt-10 pb-20">
      <Title title="Portfolio Made with"></Title>
      <div className="w-[65%] lg:w-1/2 m-auto grid grid-cols-4 gap-4">{madeWith()}</div>
    </div>
  );
}
