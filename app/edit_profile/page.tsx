import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
export default function Home() {
    return (
      
      <div className="bg-gradient-to-r from-gray-600 to-gray-800 flex"> 

        <div className="h-fit w-3/5 rounded-lg mt-0 mr-16 ml-20">
         <section className="body-font overflow-hidden">

          <div className="h-68 mt-8 bg-gray-200 rounded-lg mb-12 mr-20 ml-4 ">
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
                required
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
                required
              />
            </div>
            </form>

              <form className="space-y-4">
            <div className="mb-4">
              <label htmlFor="name" className="block leading-7 text-sm text-black font-medium font-serif">
                Date of Birth:
              </label>
              <input
                type="text"
                placeholder="4242-4242-4242-4242" 
                id="name"
                name="name"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                required
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
                required
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
                required
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
                required
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
                required
              />
            </div>
            </form>

            </section>
          </div>
        </section>
      </div>

      <div className=" w-11/12 mt-8 mb-12 mr-24 -ml-20 bg-gray-200 rounded-lg p-4 m-4">
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
  