import React from 'react';

export default function Home() {

  return (

    <div className="bg-gradient-to-r from-blue-100 to-indigo-300 ">
      <div className="h-fit w-3/5 rounded-lg mt-0 mr-16 ml-20">
        <section className="body-font overflow-hidden">
          <div className=" h-96 w-64 bg-red-200 rounded-lg mt-20 mb-7 mr-20 ml-8">
            <div className="w-56 h-56 rounded-full mb-5 ml-4 mt-4 inline-flex items-center justify-center bg-green-50 text-gray-500">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-40 h-24" viewBox="0 0 24 24">
                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </div>
            <div className="mt-4 ml-0 mr-5">
              <p className="text-gray-900 text-center text-2xl mt-4 ml-7 font-sans"><b>Charuka Crishani</b></p>
            </div>
          </div>


          <div className="h-68 w-72 bg-red-200 rounded-lg mb-14 mr-20 ml-4 ">
            <section className="body-font overflow-hidden p-6">
              <h1 className="font-sans text-lg p-6 -ml-2 -mt-5 font-mediumn "><b>User Profile Details..</b></h1>
              <p className="leading-relaxed text-gray-900 text-base -mt-3 font-serif"> Name: </p>
              <p className="leading-relaxed text-gray-900 text-base mt-3 font-serif"> Gender: </p>
              <p className="leading-relaxed text-gray-900 text-base mt-3 font-serif"> Date of Birth: </p>
              <p className="leading-relaxed text-gray-900 text-base mt-3 font-serif"> Height: </p>
              <p className="leading-relaxed text-gray-900 text-base mt-3 font-serif"> weight: </p>
              <p className="leading-relaxed text-gray-900 text-base mt-3 font-serif"> Mobile No: </p>
              <p className="leading-relaxed text-gray-900 text-base mt-3 font-serif"> E-mail: </p>
            </section>
          </div>
        </section>``
      </div>
    </div>



      );
}

