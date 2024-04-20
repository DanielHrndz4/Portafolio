import React from "react";
import Title from "../_fragments/Title";
import SubTitle from "../_fragments/SubTitle";

export default function AboutMe() {
    return (
        <div className="w-[90%] m-auto py-10">
            <Title title="About me"></Title>
            <div className="flex flex-row">
                <div className="w-full">
                    <SubTitle title="I Like"></SubTitle>
                    
                </div>
                <div className="w-full grid grid-cols-2 ">
                    <div className="w-auto rounded-3xl bg-Cprimary h-72 mx-6 my-6">
                        <div className="m-auto flex flex-col min-h-full content-center justify-center text-center">
                        <h1 className="text-7xl"> <strong className="text-Ctext gradient_text">3+</strong> </h1>
                        <h1 className="text-5xl text-white">Years Experience</h1>
                        </div>
                    </div>
                    <div className="w-auto rounded-3xl bg-Cprimary h-72 mx-6 my-6">
                    <div className="m-auto flex flex-col min-h-full content-center justify-center text-center">
                        <h1 className="text-7xl"> <strong className="text-Ctext gradient_text">10+</strong> </h1>
                        <h1 className="text-5xl text-white">Project Completed</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}