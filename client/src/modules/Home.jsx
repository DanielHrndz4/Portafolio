import React from 'react'
import { ComplexNavbar } from './_header/ComplexNavbar';
import Title from './_fragments/Title';
import Banner from './_fragments/Banner';
import AboutMe from './_body/AboutMe';
import Footer from './_footer/Footer';
import Education from './_body/Education';

export default function Home() {
    return (
        <main className='h-screen w-full bg-Cbackground'>
            <Banner className="absolute"></Banner>
            <div className='w-full bg-Cbackground'>
                <AboutMe></AboutMe>
                <hr className='border-b-[0.5px] border-Cbutton' />
                <Education></Education>
                <hr className='border-b-[0.5px] border-Cbutton' />
                <Footer></Footer>
            </div>
        </main>
    );
}