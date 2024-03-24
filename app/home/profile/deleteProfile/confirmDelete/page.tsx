import React from 'react';
import Image from 'next/image';
import {
    AtSymbolIcon,
    KeyIcon,
    ExclamationCircleIcon,
    UserCircleIcon,

} from '@heroicons/react/24/outline';
import Link from 'next/link';



const deleteProfile: React.FC = () => {
    return (
        <div className='min-h-screen py-40 bg-gradient-to-br from-emerald-200 to-teal-300'>
            <div className='container mx-auto'>
                <div className='flex w-8/12 bg-white rounded-[10px] mx-auto shadow-lg overflow-hidden'>
                    <div className="w-1/2 flex flex-col items-center justify-center p-12 bg-no-repeat bg-center bg-gradient-to-tl from-emerald-300 to-teal-400 ">
                        <div className='flex flex-col items-center '>
                            <UserCircleIcon className='text-white h-40 font-bold' />
                        </div>
                        <div className=''>
                            <p className='text-white text-center'>Deleting your profile will remove your personal data</p>
                        </div>
                    </div>

                    <div className='w-1/2  py-16 px-12 '>

                        <h3 className='pb-3 font- text-center text-gray-400 pt-5 flex flex-col'>You&apos;re about to permanently delete your Page. If you&apos;re ready to delete, click confirm button. Once you submit your deletion, you have 30 days to reactivate your Page and cancel the deletion. </h3>



                        <div className="flex flex-col justify-center">
                            <button
                                type="submit"
                                className="bg-rose-500 text-white px-4  py-2 rounded-md hover:bg-rose-600 focus:outline-none focus:bg-rose-600"
                            >
                                Delete Account
                            </button>
                        </div>
                        <Link href="../">
                            <p className=" text-teal-400 text-center font-semibold underline hover:text-teal-500 pt-2 cursor-pointer"> Back to profile</p>
                        </Link>
                    </div>
                </div>
            </div>
        </div>



    );
};



export default deleteProfile;