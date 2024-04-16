import React from "react";

export default function FragProjects(){
    return(
        <div className="w-full bg-dark_mode">
            <div className="grid grid-cols-3 gap-6 gap-y-10 w-3/4 mb-20 mt-20 m-auto">
                <div className="w-full min-h-[20rem] h-[28rem] flex flex-col m-4 rounded-lg">
                    <div className="w-full h-[20rem]" >
                        <img  src={`./src/assets/images/projects/Electronica2001.png`} alt='Electronica 2001' className="bg-cover bg-center w-full h-full rounded-t-md"/>
                    </div>
                    <div className="w-full h-full bg-dark_card p-4 rounded-b-md">
                        <h1 className="text-solid_content uppercase font-bold">Electronica 2001, S.A de C.V</h1>
                        <p className="text-light_content font-medium py-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis nulla suscipit quae eaque quam maxime temporibus vero ipsum voluptatem blanditiis consectetur neque eum incidunt animi.</p>
                        <p className="text-solid_content">Tech Stack: <span className="text-light_content">HTML,CSS,JS,PHP,AJAX</span></p>
                        <p className="pt-2 flex flex-row items-center"><img src="./src/assets/images/icons/link.png" alt="Enlace" className="w-[14px] h-[14px] mr-2"/><a href="https://electronica2001es.com/" target="_blank" className="text-solid_content underline">Live Preview</a></p>
                    </div>
                </div>

                <div className="w-full min-h-[20rem] h-[28rem] flex flex-col m-4 rounded-lg">
                    <div className="w-full h-[20rem]" >
                        <img  src={`./src/assets/images/projects/Producciones2001.png`} alt='Electronica 2001' className="bg-cover bg-center w-full h-full rounded-t-md"/>
                    </div>
                    <div className="w-full h-full bg-dark_card p-4 rounded-b-md">
                        <h1 className="text-solid_content uppercase font-bold">Producciones 2001, S.A de C.V</h1>
                        <p className="text-light_content font-medium py-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis nulla suscipit quae eaque quam maxime temporibus vero ipsum voluptatem blanditiis consectetur neque eum incidunt animi.</p>
                        <p className="text-solid_content">Tech Stack: <span className="text-light_content">HTML,CSS,JS,PHP,AJAX</span></p>
                        <p className="pt-2 flex flex-row items-center"><img src="./src/assets/images/icons/link.png" alt="Enlace" className="w-[14px] h-[14px] mr-2"/><a href="https://producciones2001.com/" target="_blank" className="text-solid_content underline">Live Preview</a></p>
                    </div>
                </div>
                
            </div>
        </div>
    )
}