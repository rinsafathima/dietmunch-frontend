import React from 'react';
import Image from 'next/image';
import {
    
    KeyIcon,
    ExclamationCircleIcon,
    LockClosedIcon
    

} from '@heroicons/react/24/outline';
import { ArrowRightIcon } from '@heroicons/react/20/solid';
import { Button } from '@/app/ui/button';



const changePassword: React.FC = () => {
    return (
        <div className='min-h-screen py-40 bg-gradient-to-br from-emerald-200 to-teal-300'>
            <div className='container mx-auto'>
                <div className='flex w-8/12 bg-white rounded-[10px] mx-auto shadow-lg overflow-hidden'>
                    <div className="w-1/2 flex flex-col items-center justify-center p-12 bg-no-repeat bg-center bg-gradient-to-tl from-emerald-300 to-teal-400 ">
                        <h1 className='text-white text-4xl font-bold mb-3'>Change your password</h1>
                        <div className=''>
                            <p className='text-white text-center'>Enter your emai and we&apos;ll send you  a link to reset your password</p>
                        </div>
                    </div>

                    <div className='w-1/2  py-16 px-12 '>
                        <div className='flex flex-col items-center pb-50  '>
                            <LockClosedIcon className='text-teal-500 h-40 font-bold ' />
                        </div>
                        <h3 className='pb-3 font-semibold text-gray-400 flex flex-col pt-5'>Change password</h3>
                        <form className="space-y-4">

                            <div className="relative grid grid-cols-1 gap-4">
                                <KeyIcon className="absolute left-3 top-1/2 h-5 w-5 text-gray-400 transform -translate-y-1/2 pointer-events-none" />
                                <input
                                    type="password"
                                    id="currentPassword"
                                    className=" border border-gray-300 rounded-md px-20 py-2 focus:outline-none focus:border-teal-400 pl-10"
                                    placeholder="Current Password"
                                />
                            </div>

                            <div className=' relative grid grid-cols-2 gap-4 '>
                                <KeyIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-400 peer-focus:text-gray-900" />
                                <input
                                    type="password"
                                    id="password"
                                    className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-teal-400 pl-10"
                                    placeholder="Password"
                                />
                                <input
                                    type="password"
                                    id="confirmPassword"
                                    className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-teal-400 pl"
                                    placeholder="Confirm Password"
                                />
                            </div>

                            <div className="flex flex-col justify-center">
                                <button
                                    type="submit"
                                    className="bg-teal-300 text-white px-10 py-2 rounded-md hover:bg-teal-600 focus:outline-none focus:bg-teal-600"
                                >
                                    Save
                                </button>

                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>



    );
};



export default changePassword;