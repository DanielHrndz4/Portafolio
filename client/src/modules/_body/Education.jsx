import React from "react";
import Title from "../_fragments/Title";
import Data from "../_fragments/Data";

export default function Education({ date, graduation, title, career, institution, location }) {
  return (
    <div className="w-[85%] m-auto py-10 flex flex-col">
      <Title title="Education"></Title>
      <div className="flex flex-row justify-around">
        <div className="w-[45%] educationbg flex flex-col p-6 rounded-xl">
          <div className="flex flex-row">
            <div className="flex justify-between w-full">
              <div className="bg-Cbackground w-auto text-Ctext font-bold px-6 py-2 rounded-full flex flex-row">
                <img src="/images/icons/calender.png" alt="calender" className="w-[24px] mr-3" />
                {date}
              </div>
              <div className="bg-white w-auto px-6 py-2 rounded-full font-semibold flex flex-row">
                <img src="/images/icons/graduation.png" alt="graduation" className="w-[24px] mr-3" />
                {graduation == true ? "Graduate" : "In Progress"}
              </div>
            </div>
          </div>
          <div className="flex flex-row py-4">
            <div className="flex w-full">
              <div className="bg-white w-auto text-Cbackground font-bold px-6 py-2 rounded-full mr-2 capitalize">
                {title}
              </div>
            </div>
          </div>
          <div className="w-full">
            <h1 className="font-black text-2xl pb-4 text-center">{career}</h1>
          </div>
          <Data image="university" data={institution}></Data>
          <Data image="location" data={location}></Data>
        </div>
      </div>
    </div>
  );
}
