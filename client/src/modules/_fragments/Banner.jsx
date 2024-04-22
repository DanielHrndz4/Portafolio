import React from "react";
import '../../../src/banner.css';
import { ComplexNavbar } from "../_header/ComplexNavbar";

export default function Banner() {
    return (
        <div className="border-b-[0.5px] border-Cbutton w-full">
            <div className="context z-10 absolute top-0 py-2">
                <ComplexNavbar className="absolute top-0"></ComplexNavbar>
            </div>
            <div className="area" >
                <ul className="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div >
        </div>
    );
}