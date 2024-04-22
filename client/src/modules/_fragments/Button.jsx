import React from 'react'

export default function Button({image, title}){
    return(
        <div className='w-auto my-4 mx-auto rounded-full bg-Cbutton px-8 py-3 border ease-in-out duration-300 hover:cursor-pointer border-Ctext hover:scale-105'>
            <a href="#" className='text-Ctext flex flex-row font-bold'><img src={`/images/icons/${image}.png`} alt="down" className='w-[24px] mr-4 justify-center content-center'/>{title}</a>
        </div>
    );
}