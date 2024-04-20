import React from "react";
import '../../../src/banner.css';
import { ComplexNavbar } from "../_header/ComplexNavbar";
import Title from "./Title";

export default function Banner() {
    return (
        <div className="">
            <div className="context z-10 absolute top-0 py-4">
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