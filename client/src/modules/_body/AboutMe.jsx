import React from "react";
import Title from "../_fragments/Title";
import SubTitle from "../_fragments/SubTitle";
import { Avatar } from "@material-tailwind/react";
import ILike from "../_fragments/ILike";
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
        </div>
      </div>
      <div className="w-full">
        <div className="w-full rounded-3xl bg-Cprimary my-6">
          <div className="m-auto text-white text-justify flex flex-col min-h-full content-center justify-center p-10">
            <p>
              Hello! I am <strong className="text-Ctext">Daniel Hernández</strong>, a passionate Computer Engineering
              student at the Universidad Centroamericana José Simeón Cañas (UCA)
              in El Salvador. With a solid academic background and three years
              of practical experience in the world of programming, I have
              dedicated myself to creating innovative solutions and high-impact
              websites. During my career, I have had the privilege of working on
              notable projects such as Electronica 2001 and Producciones 2001,
              where I was able to apply my skills and knowledge to develop
              functional and attractive websites that have left a mark on the
              industry. These projects have been an invaluable test bed where I
              have been able to demonstrate my ability to use various
              technologies and programming languages. My technical skills
              include mastery of PHP, AJAX, JavaScript, React, Express, MongoDB
              and Tailwind, among others. These tools have allowed me to carry
              out projects from conceptualization to implementation, ensuring
              quality results and client satisfaction. As a committed student, I
              am constantly seeking opportunities to learn and grow in the field
              of computer engineering. I am passionate about solving problems
              and creating innovative solutions that improve people's lives and
              advance technology. I am excited about what the future holds and I
              am willing to face new challenges and adventures in the world of
              programming. I am always open to new opportunities and
              collaborations, so don't hesitate to contact me if you think I can
              contribute to your project or team.
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
