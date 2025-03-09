import { SignIn } from '@clerk/nextjs';
import Image from 'next/image';

export default function Page() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2'>
      <div className='shadow-2xl shadow-black-700'>
        <img src='/background.jpg' className='h-full w-full'/>
      </div>
      <div className='flex justify-center items-center h-screen'>
        <SignIn />   
      </div>  
    </div> 
  )
}