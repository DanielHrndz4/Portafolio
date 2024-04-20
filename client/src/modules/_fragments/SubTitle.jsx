import React from "react";

export default function Title(props) {
    return (
        <div className="w-full text-Ctext h-10 relative py-20">
            <span className="absolute inset-0 flex items-center justify-center text-5xl backtitle tracking-wider text-Cbackground">{props.title}</span>
            <span className="absolute inset-0 flex items-center justify-center text-4xl fronttitle text-Ctext font-bold z-10">{props.title}</span>
        </div>
    );
}
