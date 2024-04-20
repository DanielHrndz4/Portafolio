import React from 'react'
import { ComplexNavbar } from './_header/ComplexNavbar';
import Title from './_fragments/Title';

export default function Home(){
    return(
        <main className='h-screen w-full bg-black py-4'>
            <ComplexNavbar></ComplexNavbar>
            <Title></Title>
        </main>
    );
}