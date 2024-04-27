import React from "react";
import { ComplexNavbar } from "../_header/ComplexNavbar";
import { motion } from "framer-motion";
import '../../../src/banner.css';

export default function Banner() {
    const MAX = 50;

    const generateArray = () => {
        const array = [];
        for (let i = 1; i <= MAX; i++) {
            array.push(i);
            console.log(array)
        }
        return array;
    };

    return (
        <div className="border-b-[0.5px] border-Cbutton w-full">
            <div className="context z-10 absolute top-0 py-2 w-full h-full flex">
                <ComplexNavbar className="absolute top-0"></ComplexNavbar>
                <div className="flex">
                    <motion.div
                    className="my-auto absolute"
                        animate={{
                            y: [125, 0, 0, 0, 0],
                        }}
                        transition={{
                            duration: 3,
                        }}>
                        <img src="/images/aboutme/mac.png" alt=""/>
                    </motion.div>
                    <motion.div
                    className="absolute m-auto left-0 justify-center"
                        animate={{
                            y: [125, 0, 0, 0, 0],
                        }}
                        transition={{
                            duration: 3,
                        }}>
                        <img src="/images/aboutme/phone.png" alt="" className="w-[95%]" />
                    </motion.div>
                </div>
            </div>
            <div className="area">
                <ul className="circles">
                    {generateArray().map((num) => (
                        <li key={num}></li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
