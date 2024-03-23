import React from 'react';
import Image from 'next/image';
import {
  AtSymbolIcon,
  ExclamationCircleIcon,
  
} from '@heroicons/react/24/outline';




const forgotPassword: React.FC = () => {
  return (
    <div className='min-h-screen py-40 bg-gradient-to-br from-emerald-200 to-teal-300'>
      <div className='container mx-auto'>
        <div className='flex w-8/12 bg-white rounded-[10px] mx-auto shadow-lg overflow-hidden'>
          <div className="w-1/2 flex flex-col items-center justify-center p-12 bg-no-repeat bg-center bg-gradient-to-tl from-emerald-300 to-teal-400 ">
            <h1 className='text-white text-4xl font-bold mb-3'>Troble login in?</h1>
            <div className=''>
              <p className='text-white text-center'>Fear not. we&apos;ll email you instructions to reset your password</p>
            </div>
          </div>

          <div className='w-1/2  py-16 px-12 '>
            <div className='flex flex-col items-center '>
              <ExclamationCircleIcon className='text-teal-500 h-40 font-bold'/>
            </div>
            <h3 className='pb-3 font-semibold text-gray-400 pt-5 flex flex-col'>Forgot password?</h3>
            <form className="space-y-4">

              <div className="relative grid grid-cols-1 gap-4">
                <AtSymbolIcon className="absolute left-3 top-1/2 h-5 w-5 text-gray-400 transform -translate-y-1/2 pointer-events-none" />
                <input
                type="email"
                id="email"
                className=" border border-gray-300 rounded-md px-20 py-2 focus:outline-none focus:border-teal-400 pl-10"
                placeholder="Username / Email address"
                />
              </div>

              <div className="flex flex-col justify-center">
                <button
                  type="submit"
                  className="bg-teal-300 text-white px-4 py-2 rounded-md hover:bg-teal-600 focus:outline-none focus:bg-teal-600"
                >
                  Reset Password
                </button>
              </div>
              <div>
                <p className=" text-teal-400 text-center font-semibold underline hover:text-teal-500 cursor-pointer"> Return to login</p>
              </div>
          </form>
          </div>
        </div>
      </div>
    </div>
        


  );
};



export default forgotPassword;