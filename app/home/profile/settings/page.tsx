import React from 'react';
import Link from 'next/link';


export default function Home() {

  return (
    <div className="bg-gradient-to-r from-gray-600 to-gray-800 flex"> 
      

    <div className="h-fit w-3/5 rounded-lg -mt-5 mr-16 ml-44">
     <section className="body-font overflow-hidden">

      <div className="h-fit mt-20 bg-gray-200 rounded-lg mb-12 mr-[12px] ml-20 ">
        <section className="body-font overflow-hidden p-6">
          <h1 className="font-sans text-lg p-6 -mt-5 font-mediumn text-center "><b>SETTINGS</b></h1>
          <Link href="../profile">
            <button
              type="submit"
              className="inline-flex mt-4 ml-16 h-16 w-96 items-center px-7 py-1 bg-gray-400 border-0 rounded text-black font-medium hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                <div className='ml-[105px]'>
                <b>view My Profile</b>
                </div>
                
            </button>
          </Link>
        
          <Link href="profile/Meal_Plan">
            <button
              type="submit"
              className="inline-flex mt-8 h-16 w-96 ml-16 items-center px-7 py-1 bg-gray-400 border-0 rounded text-black font-medium hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                <div className='ml-[99px]'>
                <b>Delete My Profile</b>
                </div>
            </button>
          </Link>

          <Link href="profile/Meal_Plan">
            <button
              type="submit"
              className="inline-flex mt-8 ml-16 h-16 w-96 items-center px-7 py-1 bg-gray-400 border-0 rounded text-black font-base hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                <div className='ml-[96px]'>
                <b>Change Password</b>
                </div>
                
            </button>
          </Link>

          <Link href="profile/Meal_Plan">
            <button
              type="submit"
              className="inline-flex mt-8 ml-16 h-16 w-96 items-center px-7 py-1 bg-gray-400 border-0 rounded text-black font-medium hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                <div className='ml-[100px]'>
                <b>Forget Password</b>
                </div>
                
            </button>
          </Link>

          <Link href="profile/Meal_Plan">
            <button
              type="submit"
              className="inline-flex mt-32 mb-6 ml-16 h-16 w-96 items-center px-7 py-1 bg-gray-400 border-0 rounded text-black font-medium hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                <div className='ml-[135px]'>
                <b>Log Out</b>
                </div>
                
            </button>
          </Link>

        </section>
      </div>
    </section>
  </div>
  </div>
  );

};