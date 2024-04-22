import React from "react";

export default function Title(props) {
    return (
        <div className="w-1/4 text-Ctext relative flex">
            <span className="absolute inset-0 flex items-center justify-center text-5xl backtitle tracking-wider text-Cbackground">{props.title}</span>
            <span className="absolute inset-0 flex items-center justify-center text-4xl fronttitle text-Ctext font-bold">{props.title}</span>
        </div>
    );
}
