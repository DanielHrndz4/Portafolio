import React from 'react'
import Banner from './_fragments/Banner';
import AboutMe from './_body/AboutMe';
import Footer from './_footer/Footer';
import Education from './_body/Education';
import { motion } from "framer-motion"
import MyComponent from './_fragments/MyComponent';

export default function Home() {
    return (
        <main className='h-screen w-full bg-Cbackground'>
            <Banner className="absolute"></Banner>
            <div className='w-full bg-Cbackground'>
                <AboutMe></AboutMe>
                <hr className='border-b-[0.5px] border-Cbutton' />
                <Education date="2017 - Act" graduation={false} title="engineering" career="Informatics Engineering" institution="Universidad Centroamericana José Simeón Cañas" location="San Salvador, El Salvador"></Education>
                <hr className='border-b-[0.5px] border-Cbutton' />
                <Footer></Footer>
            </div>
        </main>
    );
}