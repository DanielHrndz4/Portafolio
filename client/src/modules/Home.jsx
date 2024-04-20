import React from 'react'
import { ComplexNavbar } from './_header/ComplexNavbar';
import Title from './_fragments/Title';
import Banner from './_fragments/Banner';
import AboutMe from './_body/AboutMe';
import Footer from './_footer/Footer';

export default function Home() {
    return (
        <main className='h-screen w-full bg-Cbackground'>
            <Banner className="absolute"></Banner>
            <div className='w-full bg-Cbackground'>
                <AboutMe></AboutMe>
                <hr className='border-b-[0.5px] border-Cunderline' />
                <Footer></Footer>
            </div>
        </main>
    );
}