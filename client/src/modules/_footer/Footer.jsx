import React, { useEffect, useState } from "react";
import Title from "../_fragments/Title";
import axios from "axios";

export default function Footer(){
    const [data,getData] = useState([])
    useEffect(()=>{
        axios.get('https://portafolio-1g6k.onrender.com/api/lan')
        .then((response)=> getData(response.data))
        .catch((error)=> console.error(error))
        console.log(data);
    },[]);
    return(
        <div className="w-full pt-10 pb-20">
            <Title title="Portfolio Made with"></Title>
            <div className="w-[65%] m-auto grid grid-cols-4 gap-4">    
                <div className="bg-white">HTML</div>
                <div className="bg-white">CSS</div>
                <div className="bg-white">JavaScript</div>
                <div className="bg-white">React JS</div>
                <div className="bg-white">Express JS</div>
                <div className="bg-white">Tailwind CSS</div>
                <div className="bg-white">Material Tailwind</div>
                <div className="bg-white">Mongodb</div>
            </div>
        </div>
    );
}