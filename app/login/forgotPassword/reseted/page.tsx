import React from 'react';
import Link from 'next/link';
import {
  AtSymbolIcon,
  ExclamationCircleIcon,
  CheckCircleIcon,
  EnvelopeIcon,
  
} from '@heroicons/react/24/outline';




const forgotPassword: React.FC = () => {
  return (
    <div className='min-h-screen py-40 bg-gradient-to-br from-emerald-200 to-teal-300'>
      <div className='container mx-auto'>
        <div className='flex w-8/12 bg-white rounded-[10px] mx-auto shadow-lg overflow-hidden'>
          <div className="w-1/2 flex flex-col items-center justify-center p-12 bg-no-repeat bg-center bg-gradient-to-tl from-emerald-300 to-teal-400 ">
            <h1 className='text-white text-4xl font-bold mb-3'>Check your email</h1>
            <div className=''>
              <p className='text-white text-center'>Fear not. we already sent an email you instructions to reset your password</p>
            </div>
          </div>

          <div className='w-1/2  py-16 px-12 '>
            <div className='flex flex-col items-center '>
              <EnvelopeIcon className='text-teal-500 h-40 font-bold'/>
            </div>
            <h3 className='pb-3 font-semibold text-gray-400 text-center pt-5 flex flex-col'>We&apos;ve sent instructions on how to reset your password to your password. you can reset your password by that link</h3>
            

              
            <Link href='/login'>
            <div>
              <p className=" text-teal-400 text-center pt-4 font-semibold underline hover:text-teal-500 cursor-pointer"> Return to login</p>
            </div>
            </Link>
          
          </div>
        </div>
      </div>
    </div>
        


  );
};



export default forgotPassword;