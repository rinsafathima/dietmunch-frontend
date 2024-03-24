import React from 'react';
import Image from 'next/image';
import link from 'next/link'
import {
  AtSymbolIcon,
  KeyIcon,
  ExclamationCircleIcon,
  UserCircleIcon,
  
} from '@heroicons/react/24/outline';
import { ArrowRightIcon } from '@heroicons/react/20/solid';
import { Button } from '@/app/ui/button';



const deleteProfile: React.FC = () => {
  return (
    <div className='min-h-screen py-40 bg-gradient-to-br from-emerald-200 to-teal-300'>
      <div className='container mx-auto'>
        <div className='flex w-8/12 bg-white rounded-[10px] mx-auto shadow-lg overflow-hidden'>
          <div className="w-1/2 flex flex-col items-center justify-center p-12 bg-no-repeat bg-center bg-gradient-to-tl from-emerald-300 to-teal-400 ">
            <div className='flex flex-col items-center '>
              <UserCircleIcon className='text-white h-40 font-bold'/>
            </div>
            <div className=''>
              <p className='text-white text-center'>Deleting your profile will remove your personal data</p>
            </div>
          </div>

          <div className='w-1/2  py-16 px-12 '>
            
            <h3 className='pb-3 font-semibold text-gray-400 pt-5 flex flex-col'>Delete Profile</h3>
            <form className="space-y-4">

            <div className='flex flex-col text-gray-400'>
                <select
                  id="gender"
                  className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-teal-400"
                >
                  <option value="" className=''>Tell us why you are leaving</option>
                  <option value="male">Now im on my target weight</option>
                  <option value="female">Im not getting results</option>
                  <option value="other">subscription is too expensive</option>
                  <option value="other">Food reccomendations are not good enough</option>
                  <option value="other">Other</option>
                  
                </select>
              </div>

              <div className="relative grid grid-cols-1 gap-4">
                <AtSymbolIcon className="absolute left-3 top-1/2 h-5 w-5 text-gray-400 transform -translate-y-1/2 pointer-events-none" />
                <input
                type="email"
                id="email"
                className=" border border-gray-300 rounded-md px-20 py-2 focus:outline-none focus:border-teal-400 pl-10"
                placeholder="Email address"
                />
              </div>
              <div className=' relative flex flex-col'>
                <KeyIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-400 peer-focus:text-gray-900" />
                <input
                  type="password"
                  id="password"
                  className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-teal-400 pl-10"
                  placeholder="Password"
                />
              </div>

              <div className="flex flex-col justify-center">
                <button
                  type="submit"
                  className="bg-rose-500 text-white px-4 py-2 rounded-md hover:bg-teal-600 focus:outline-none focus:bg-teal-600"
                
                >
                Delete Account
                </button>
              </div>
              <div>
                <p className=" text-teal-400 text-center font-semibold underline hover:text-teal-500 cursor-pointer"> Back to profile</p>
              </div>
          </form>
          </div>
        </div>
      </div>
    </div>
        


  );
};



export default deleteProfile;