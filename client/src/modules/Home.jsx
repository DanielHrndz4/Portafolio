import React from 'react'
import { ComplexNavbar } from './_header/ComplexNavbar';
import Title from './_fragments/Title';
import Banner from './_fragments/Banner';

export default function Home() {
    return (
        <main className='h-screen w-full bg-Cbackground'>
            <Banner className="absolute"></Banner>
            <div className='w-full bg-Cbackground'>
                <Title title="About me"></Title>
            </div>
        </main>
    );
}