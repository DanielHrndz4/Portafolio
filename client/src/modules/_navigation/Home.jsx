import React from "react";
import Header from "../_header/Header";
import FragStack from "../_fragments/FragStack";
import FragProjects from "../_fragments/FragProjects";
import Footer from "../_footer/Footer";

export default function Home() {
  
  return (
    <div className="h-screen w-full">
      <Header />
      <div className="w-full h-screen bg-dark_mode font-raleway capitalize">
        <h1 className="text-center text-solid_content text-4xl py-10 font-bold">
          My Tech Stack
        </h1>
        <p className="text-center text-light_content text-2xl font-medium">
          Technologies I've been working with recently
        </p>
        <FragStack></FragStack>
        <h1 className="text-center text-solid_content text-4xl py-6 font-bold">
            Projects
        </h1>
        <p className="text-center text-light_content text-2xl font-medium">
          Things I've built so far
        </p>
        <FragProjects></FragProjects>
        <Footer></Footer>

      </div>
    </div>
  );
}
