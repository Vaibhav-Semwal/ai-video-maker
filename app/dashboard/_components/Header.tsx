import { UserButton } from '@clerk/nextjs';
import React from 'react';

export default function Header(){ 
    
    return (
        <div className='p-3 px-5 flex items-center justify-between'>
            <div className='flex gap-3 items-center'>
                <img src='/logo.png' height={40} width={40}/>
                <h2 className='font-bold text-xl'> Vid-Make</h2>
            </div>
            <div className='flex gap-3 items-center'>
                <UserButton/>
            </div>
        </div>
    );
}

