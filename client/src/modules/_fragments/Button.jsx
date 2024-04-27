import { motion } from "framer-motion";
import React from 'react'

export default function Button({ image, title }) {
    return (
        <motion.button className="box className='w-auto my-4 mx-auto rounded-full bg-Cbutton px-8 py-3 border hover:cursor-pointer border-Ctext"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
            <a href="#" className='text-Ctext flex flex-row font-bold'><img src={`/images/icons/${image}.png`} alt="down" className='w-[24px] mr-4 justify-center content-center' />{title}</a>
        </motion.button>
    );
}