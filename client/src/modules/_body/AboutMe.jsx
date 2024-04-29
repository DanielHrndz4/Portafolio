import React, { useEffect } from "react";
import Title from "../_fragments/Title";
import SubTitle from "../_fragments/SubTitle";
import { Avatar } from "@material-tailwind/react";
import ILike from "../_fragments/ILike";
import { Fade } from "react-awesome-reveal";
import { json } from "../_data/data"
import Button from "../_fragments/Button";

export default function AboutMe() {
  return (
    <div className="w-[85%] m-auto py-10">
      <Title title="About me"></Title>
      <div className="flex lg:flex-row flex-col">
        <div className="w-full flex flex-col">
          <div className="w-full flex flex-row m-6">
            <Avatar
              variant="circular"
              size="xl"
              alt="avdaniel"
              src="/images/avatar/avdaniel.jpeg"
              className="border border-white p-[2px]"
            />
            <SubTitle title="I Like" className="h-full"></SubTitle>
          </div>
          <ILike></ILike>
        </div>
        <div className="w-full grid grid-cols-2 ">
          <Fade>
          <div className="w-auto rounded-3xl bg-Cprimary h-72 mx-6 my-6">
            <div className="m-auto flex flex-col min-h-full content-center justify-center text-center">
              <h1 className="text-7xl">
                {" "}
                <strong className="text-Ctext gradient_text">3+</strong>{" "}
              </h1>
              <h1 className="text-5xl text-white">
                Years <br /> Experience
              </h1>
            </div>
          </div>
          </Fade>
          <Fade>
          <div className="w-auto rounded-3xl bg-Cprimary h-72 ml-6 my-6">
            <div className="m-auto flex flex-col min-h-full content-center justify-center text-center">
              <h1 className="text-7xl">
                {" "}
                <strong className="text-Ctext gradient_text">10+</strong>{" "}
              </h1>
              <h1 className="text-5xl text-white">
                Project <br /> Completed
              </h1>
            </div>
          </div>
          </Fade>
        </div>
      </div>
      <div className="w-full">
        <div className="w-full rounded-3xl bg-Cprimary my-6">
          <div className="m-auto text-white text-justify flex flex-col min-h-full content-center justify-center p-10">
            <p>
              Hello! I am <strong className='text-Ctext'>{json.author}</strong>{json.aboutme}
            </p>
          </div>
        </div>
      </div>
      <div className="w-full flex">
        <Button image="down" title="Contact Me"></Button>
      </div>
    </div>
  );
}
