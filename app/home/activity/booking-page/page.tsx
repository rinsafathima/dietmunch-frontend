// pages/booking-page/page.tsx
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useState, ChangeEvent, FormEvent } from 'react';

export default function BookingPage() {

 

  return (
    <div>
      <Head>
        <title>Booking Page</title>
      </Head>



        <section className="text-gray-600 body-font relative ">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center "
       style={{ backgroundImage: `url('/13.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center', position: 'relative' }}>
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-800">
            📅 Book Your Session
              {/* <br className="hidden lg:inline-block">readymade gluten */}
            </h1>
            <p className="mb-8 leading-relaxed">
            Book a session with our nutritionist for personalized guidance on your wellness journey. 
            Achieve your health goals with expert support
            </p>
            
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          </div>
      </div>


      </section>

        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center" style={{ backgroundColor: '#2B3B4A'}}>
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-200">
            📈Book Your Nutritionist Session📈
              {/* <br className="hidden lg:inline-block">readymade gluten */}
            </h1>
            <p className="mb-8 leading-relaxed text-gray-400">
            Welcome to our booking page! Take the first step towards a healthier you by scheduling a session with our expert nutritionist. 
            Please fill out the form below to book your appointment.
            </p>
           
          </div>
          

      


    
      <div className="h-fit w-3/5 bg-blue-200 rounded-lg mr-10 mb-16 mt-16 ml-auto ">
          
          <section className="body-font overflow-hidden p-6">
          <div className="p-[10px]"> </div>
            <h1 className="font-serif text-3xl font-medium ">Book Your Nutritionist Session</h1>
            <hr className="my-4" style={{ borderColor: 'black' }} /> 
  
            <p className="leading-relaxed mb-5 text-gray-900 font-medium font-sans">  </p>
           
              
             
            <form className="space-y-4">
              <div className="mb-4">
                <label htmlFor="name" className="block leading-7 text-sm text-black font-medium font-sans">
                  Full Name:
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="email" className="block leading-7 text-sm text-black font-medium font-sans">
                  Phone Number:
                </label>
                <input
                  type="number"
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  required
                />
                </div>
              <div className="mb-4">
                <label htmlFor="email" className="block leading-7 text-sm text-black font-medium font-sans">
                  E-mail:
                </label>
                <input
                  type="String"
                  placeholder="abc@gmail.com" 
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  required
                />
              </div>

              
  
              <div className="grid grid-cols-3 gap-4 my-4">
                <div className="relative max-w-sm col-span-2">
                <label htmlFor="email" className="block leading-7 text-sm text-black font-medium font-sans">
                Preferred Date:
                </label>
                <input
                  type="date"
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  required
                />
                </div>
  
                <div>
                <label htmlFor="email" className="block leading-7 text-sm text-black font-medium font-sans">
                Preferred Time:
                </label>
                <input
                  type="time"
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  required
                />
                </div>
                
              </div>
              

              
                <div className="mb-4">
            <label htmlFor="reason" className="block leading-7 text-sm text-black font-medium font-sans">
               Reason for Booking:
            </label>
              <select
            name="reason"
    
           className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          required
          > 
        
        <option value="Weight Management">Weight Management</option>
        <option value="Dietary Advice">Dietary Advice</option>
        <option value="Health Optimization">Health Optimization</option>
      </select>
    </div>

            
  
            <div className="p-[10px]"> </div>
  
            
            <Link href="booking-success">
              <button
                type="submit"
                className="inline-flex items-center px-4 py-2 bg-fuchsia-800 border-0 rounded text-white font-medium hover:bg-fuchsia-950 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >BOOK NOW
              </button>
            </Link>
              
  
            <div className="p-[10px]"> </div>
            </form>
          </section>
          </div>

          </div>
      
    </div>



  );
}