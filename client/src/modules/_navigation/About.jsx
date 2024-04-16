import React from "react";
import Navbar from "../_header/Navbar";
import Footer from "../_footer/Footer";

export default function About() {
  return (
    <div className="w-full h-screen">
      <Navbar color="green_dev" site="About"></Navbar>
      <div className="text-center text-5xl text-white">About</div>
      <Footer></Footer>
    </div>
  );
}
