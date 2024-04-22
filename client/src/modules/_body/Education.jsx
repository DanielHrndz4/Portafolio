import React from "react";
import Title from "../_fragments/Title";

export default function Education() {
  return (
    <div className="w-[80%] m-auto py-10 flex flex-col">
      <Title title="Education"></Title>
      <div className="flex flex-row justify-around">
        <div className="w-[45%] bg-white flex p-4 ">
          <div className="flex justify-between w-full">
            <div className="bg-Cbackground w-auto text-white px-6 py-2">
              2017-2020
            </div>
            <div className="bg-Ctext w-auto px-6 py-2">In progress</div>
          </div>
        </div>

        <div className="w-[45%] bg-white flex p-4">
          <div className="flex justify-between w-full">
            <div className="bg-Cbackground w-auto text-white px-6 py-2">
              2017-2020
            </div>
            <div className="bg-Ctext w-auto px-6 py-2">In progress</div>
          </div>
        </div>
      </div>
    </div>
  );
}
