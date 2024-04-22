import React from "react";
import { Avatar } from "@material-tailwind/react";

export default function Data({image, data}){
    return(
        <div className="w-full flex flex-row py-1">
            <Avatar
              variant="square"
              size="sm"
              alt="avdaniel"
              src={`/images/icons/${image}.png`}
              className=" mr-3"
            />
            <p className="font-bold text-center py-2">{data}</p>
          </div>
    );
}