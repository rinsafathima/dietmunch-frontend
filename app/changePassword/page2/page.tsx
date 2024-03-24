import React from 'react';
import Image from 'next/image';
import {
    AtSymbolIcon,
    KeyIcon,
    ExclamationCircleIcon,
    CheckBadgeIcon,
    LockClosedIcon,

} from '@heroicons/react/24/outline';
import { ArrowRightIcon } from '@heroicons/react/20/solid';
import { Button } from '@/app/ui/button';



const changePassword: React.FC = () => {
    return (
        <div className='min-h-screen py-40 bg-gradient-to-br from-emerald-200 to-teal-300'>
            <div className='container mx-auto'>
                <div className='flex w-8/12  bg-white rounded-[10px] mx-auto shadow-lg overflow-hidden'>
                    <div className="w-1/2 flex flex-col items-center justify-center p-10 bg-no-repeat bg-center bg-gradient-to-tl from-emerald-300 to-teal-400 ">
                        <LockClosedIcon className='text-white h-44 font-bold ' /> 
                        <div className=''>
                            <p className='text-white text-center font-bold text-xl pt-5'>continue to enter with your new password</p>
                        </div>
                    </div>

                    <div className='w-1/2  py-16 px-12 '>
                        <div className='flex flex-col items-center '>
                            <CheckBadgeIcon className='text-teal-500 h-40 font-bold ' />
                        </div>
                        <h3 className='pb-3 font-bold text-center text-gray-400 text-3xl flex flex-col pt-10 pb-20'>Your password has changed successfully</h3>
                        

                        <div className="flex flex-col justify-center pt-20">
                            <button
                                type="submit"
                                className="bg-teal-300 text-white px-10 py-2 rounded-md hover:bg-teal-600 focus:outline-none focus:bg-teal-600"
                            >
                                Continue
                            </button>
                        </div>
                            
                        
                    </div>
                </div>
            </div>
        </div>



    );
};



export default changePassword;