import React from 'react';
import Link from 'next/link';


export default function Home() {

  return (

    <div className="bg-gradient-to-r from-gray-600 to-gray-800 flex">
      <div className="h-fit w-3/5 rounded-lg mt-0 mr-16 ml-20">
        <section className="body-font overflow-hidden">
          <div className=" h-96 w-64 bg-gray-200 rounded-lg mt-20 mb-7 mr-20 ml-8">
            <div className="w-56 h-56 rounded-full mb-5 ml-4 mt-4 inline-flex items-center justify-center bg-green-50 text-gray-500">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-40 h-24" viewBox="0 0 24 24">
                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </div>
            <div className="mt-4 ml-0 mr-5">
              <p className="text-gray-900 text-center text-2xl mt-4 ml-7 font-sans"><b>Charuka Crishani Fernando</b></p>
            </div>
          </div>


          <div className="h-68 w-72 bg-gray-200 rounded-lg mb-14 mr-20 ml-4 ">
            <section className="body-font overflow-hidden p-6">
              <h1 className="font-sans text-lg p-6 -ml-2 -mt-5 font-mediumn "><b>User Profile Details..</b></h1>
              <p className="leading-relaxed text-gray-900 text-base -mt-3 font-serif"> Name: </p>
              <p className="leading-relaxed text-gray-900 text-base mt-3 font-serif"> Gender: </p>
              <p className="leading-relaxed text-gray-900 text-base mt-3 font-serif"> Date of Birth: </p>
              <p className="leading-relaxed text-gray-900 text-base mt-3 font-serif"> Height: </p>
              <p className="leading-relaxed text-gray-900 text-base mt-3 font-serif"> weight: </p>
              <p className="leading-relaxed text-gray-900 text-base mt-3 font-serif"> Mobile No: </p>
              <p className="leading-relaxed text-gray-900 text-base mt-3 font-serif"> E-mail: </p>

              <Link href="../../edit_profile">
                <button
                  type="submit"
                  className=" mt-7 ml-48 -mb-16 px-3 py-1 bg-rose-500 border-0 rounded text-white font-medium hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-200"
                  >Edit
                </button>
              </Link>
            </section>
          </div>
        </section>
      </div>

      <div className=" w-11/12 mt-20 mb-14 mr-24 -ml-20 bg-gray-200 rounded-lg p-4 m-4">
      <h1 className="font-sans text-2xl ml-16 mt-7 font-medium "><b>Health Goals: </b></h1>
      <p className='font-serif text-xl ml-24 mt-3'>Primary Goal:</p>
      <p className='font-serif text-xl ml-24 mt-2'>Cuisine Type:</p>
      <p className='font-serif text-xl ml-24 mt-2'>Timeline:</p>

      <h1 className="font-sans text-2xl ml-16 mt-7 font-medium "><b>Dietary Preferences:: </b></h1>
      <p className='font-serif text-xl ml-24 mt-3'>Cuisine Type:</p>
      <p className='font-serif text-xl ml-24 mt-2'>Allergies:</p>
      <p className='font-serif text-xl ml-24 mt-2'>Dietary Restrictions:</p>

      <h1 className="font-sans text-2xl ml-16 mt-7 font-medium "><b>Other Preferences: </b></h1>
      <p className='font-serif text-xl ml-24 mt-3'>Meal Frequency:</p>
      <p className='font-serif text-xl ml-24 mt-2'>Water Intake Goal:</p>

      <h1 className="font-sans text-2xl ml-16 mt-7 font-medium "><b>Personal Notes: </b></h1>
      <p className='font-serif text-xl ml-24 mt-3'>- </p>
      <p className='font-serif text-xl ml-24 mt-2'>- </p>
      </div>

    </div>

 

      );
}

