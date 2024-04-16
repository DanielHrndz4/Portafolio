import React from "react";
import Footer from "../_footer/Footer";
import Navbar from "../_header/Navbar";
import AllDataBase from "../_fragments/AllDataBase";
import FragStackComplete from "../_fragments/FragStackComplete";
import OperatingSystems from "../_fragments/OperatingSystems";
export default function TechStack() {
  return (
    <div className="w-full h-screen">
      <Navbar color="green_dev" site="Stack"></Navbar>
      <h1 className="text-center text-solid_content text-4xl py-10 font-bold">
        My Tech Stack
      </h1>
      <p className="text-center text-light_content text-2xl font-medium">
        Technologies I've been working with recently
      </p>
      <FragStackComplete></FragStackComplete>
      <h1 className="text-center text-solid_content text-4xl py-10 font-bold capitalize">
        Database managers
      </h1>
      <p className="text-center text-light_content text-2xl font-medium">
        Technologies I've been working with recently
      </p>
      <AllDataBase></AllDataBase>
      <h1 className="text-center text-solid_content text-4xl py-10 font-bold capitalize">
        operating systems
      </h1>
      <p className="text-center text-light_content text-2xl font-medium">
        Technologies I've been working with recently
      </p>
      <OperatingSystems></OperatingSystems>
      <Footer></Footer>
    </div>
  );
}
