import { SignUp } from '@clerk/nextjs'

export default function Page() {

  
  return (
        <div className='grid grid-cols-1 md:grid-cols-2'>
          <div className='flex justify-center items-center h-screen'>
            <SignUp/>   
          </div>
          <div className='shadow-2xl shadow-black-700'>
            <img src='/background-2.jpg' className='h-full w-full'/>
          </div>  
        </div> 
  )
}