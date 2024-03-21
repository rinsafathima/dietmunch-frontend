import React from 'react';

import Link from 'next/link';
export default function Home() {
    return (
      
      <div className="bg-gradient-to-r from-gray-600 to-gray-800 flex"> 

        <div className="h-fit w-3/5 rounded-lg mt-0 mr-16 ml-20">
         <section className="body-font overflow-hidden">

          <div className="h-68 mt-20 bg-gray-200 rounded-lg mb-12 mr-20 ml-4 ">
            <section className="body-font overflow-hidden p-6">
              <h1 className="font-sans text-lg p-6 -ml-2 -mt-5 font-mediumn "><b>User Profile Details..</b></h1>
              <form className="space-y-4">
            <div className="mb-4">
              <label htmlFor="name" className="block leading-7 text-sm text-black font-medium font-serif">
                Name:
              </label>
              <input
                type="text"
                placeholder="4242-4242-4242-4242" 
                id="name"
                name="name"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
    
              />
            </div>
            </form>
            
            <form className="space-y-4">
            <div className="mb-4">
              <label htmlFor="name" className="block leading-7 text-sm text-black font-medium font-serif">
              Gender:
              </label>
              <input
                type="text"
                placeholder="4242-4242-4242-4242" 
                id="name"
                name="name"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                
              />
            </div>
            </form>

              <form className="space-y-4">
            <div className="mb-4">
              <label htmlFor="name" className="block leading-7 text-sm text-black font-medium font-serif">
                Date of Birth:
              </label>
              <input
                type="date"
                placeholder="4242-4242-4242-4242" 
                id="name"
                name="name"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            
              />
            </div>
            </form>

              <form className="space-y-4">
            <div className="mb-4">
              <label htmlFor="name" className="block leading-7 text-sm text-black font-medium font-serif">
              Height:
              </label>
              <input
                type="text"
                placeholder="4242-4242-4242-4242" 
                id="name"
                name="name"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
               
              />
            </div>
            </form>

              <form className="space-y-4">
            <div className="mb-4">
              <label htmlFor="name" className="block leading-7 text-sm text-black font-medium font-serif">
              weight: 
              </label>
              <input
                type="text"
                placeholder="4242-4242-4242-4242" 
                id="name"
                name="name"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                
              />
            </div>
            </form>

              <form className="space-y-4">
            <div className="mb-4">
              <label htmlFor="name" className="block leading-7 text-sm text-black font-medium font-serif">
              Mobile No:
              </label>
              <input
                type="text"
                placeholder="4242-4242-4242-4242" 
                id="name"
                name="name"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                
              />
            </div>
            </form>

              <form className="space-y-4">
            <div className="mb-4">
              <label htmlFor="name" className="block leading-7 text-sm text-black font-medium font-serif">
              E-mail:
              </label>
              <input
                type="text"
                placeholder="4242-4242-4242-4242" 
                id="name"
                name="name"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
         
              />
            </div>
            </form>

            </section>
          </div>
        </section>
      </div>

      <div className=" w-7/12 mt-12 mb-12 mr-24 -ml-20 bg-gray-200 rounded-lg p-1 m-4">
      <h1 className="font-sans text-2xl ml-8 mt-7 mb-3 font-medium "><b>Health Goals: </b></h1>

      <div>
      <label htmlFor="textInput" className='font-serif text-xl text-black font-medium ml-16 mt-3'>Primary Goal: </label>
      <input
        type="text"
        id="textInput"
        className='w-96 bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out' 
      />
      </div>

      <div>
      <label htmlFor="textInput" className='font-serif text-xl text-black font-medium ml-16 mt-3'>Cuisine Type: </label>
      <input
        type="text"
        id="textInput"
        className='w-96 ml-1 bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out' 
      />
      </div>

      <div>
      <label htmlFor="textInput" className='font-serif text-xl text-black font-medium ml-16 mt-3'>Timeline: </label>
      <input
        type="text"
        id="textInput"
        className='w-96 bg-white ml-10 rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out' 
      />
      </div>

      <h1 className="font-sans text-2xl ml-8 mt-7 mb-3 font-medium  "><b>Dietary Preferences:</b></h1>

      <div>
      <label htmlFor="textInput" className='font-serif text-xl text-black font-medium ml-16 mt-3'>Cuisine Type: </label>
      <input
        type="text"
        id="textInput"
        className='w-96 bg-white ml-1  rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out' 
      />
      </div>

      <div>
      <label htmlFor="textInput" className='font-serif text-xl text-black font-medium ml-16 mt-3'>Allergies: </label>
      <input
        type="text"
        id="textInput"
        className='w-96 bg-white ml-10 rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out' 
      />
      </div>

      <div>
      <label htmlFor="textInput" className='font-serif text-xl text-black font-medium ml-16 mt-3'>Dietary Restrictions: </label>
      <input
        type="text"
        id="textInput"
        className='w-80 ml-1 bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out' 
      />
      </div>

      <h1 className="font-sans text-2xl ml-8 mt-7 mb-3 font-medium "><b>Other Preferences: </b></h1>


      <div>
      <label htmlFor="textInput" className='font-serif text-xl text-black font-medium ml-16 mt-3'>Meal Frequency: </label>
      <input
        type="text"
        id="textInput"
        className='w-80 ml-10 bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out' 
      />
      </div>

      <div>
      <label htmlFor="textInput" className='font-serif text-xl text-black font-medium ml-16 mt-3'>Water Intake Goal: </label>
      <input
        type="text"
        id="textInput"
        className='w-80 ml-5 bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out' 
      />
      </div>

      <h1 className="font-sans text-2xl ml-8 mt-7 mb-3 font-medium  "><b>Personal Notes: </b></h1>
      <input
        type="text"
        id="textInput"
        className='w-96 ml-28 bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out' 
      />

      <Link href="../home/profile">
            <button
                type="submit"
                className=" mt-7 ml-96 mb-7 px-16 py-1 bg-rose-500 border-0 rounded text-white font-medium hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-300"
                >Done
            </button>
        </Link>

      </div>

      </div>
    );
  }
  