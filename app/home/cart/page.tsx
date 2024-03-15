import React from 'react';
import visa from '../../../public/visa.png'
import master from '../../../public/master.png'
import Image from 'next/image';
export default function Home() {
    return (
      
      <div className="bg-white flex"> 

        <div className="h-fit w-3/5 bg-gray-200 rounded-lg mt-28 mr-16">
          
          <section className="body-font overflow-hidden p-6">
          
            <div className="w-5/6 h-5/6 bg-fuchsia-700 rounded-lg mr-8 ml-5 mt-5  ">
              <h1 className="font-serif text-4xl font-medium ml-20">Place Order</h1>
            </div>
         
            <div className="p-[15px]"> </div>
            

            <p className="leading-relaxed mb-5 text-gray-900 font-medium font-sans">By placing your order, you agree to our application Privacy policy and Conditions of use.</p>
            <hr className="my-4" style={{ borderColor: 'black' }} /> 

              <p className="leading-relaxed mb-5 text-gray-900 text-3xl font-sans"> Order Summary </p>

              <div className="p-[40px]"> </div>

              <p className="leading-relaxed mb-5 text-gray-900 text-xl font-sans"> Package Elite </p>            
              <hr className="my-4" style={{ borderColor: 'black' }} />

              <p className="leading-relaxed mb-5 text-gray-900 text-2xl font-sans"> Order Total </p>  


          </section>
        </div>

        <div className="h-fit w-3/5 bg-fuchsia-200 rounded-lg mr-20 mt-16 ml-auto ">
          
        <section className="body-font overflow-hidden p-6">
        <div className="p-[10px]"> </div>
          <h1 className="font-serif text-3xl font-medium ">Payment Info.</h1>
          <hr className="my-4" style={{ borderColor: 'black' }} /> 

          <p className="leading-relaxed mb-5 text-gray-900 font-medium font-sans"> Payment Method: </p>
          <div className='flex mb-4'>
              <button type="button" className="text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-800 dark:bg-white dark:border-gray-700 dark:text-gray-900 dark:hover:bg-gray-200 mr-2">
                  <Image src = {visa} alt='visa' width={31} style={{marginRight: 5}}/>
                  Pay with Visa
              </button>

              <button type="button" className="text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 ml-2">
                <Image src = {master} alt='master' width={31}/>
                  Pay with MasterCard
              </button>
              </div>
            
           
          <form className="space-y-4">
            <div className="mb-4">
              <label htmlFor="name" className="block leading-7 text-sm text-black font-medium font-sans">
                Name On Card:
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
                Card Number:
              </label>
              <input
                type="number"
                placeholder="4242-4242-4242-4242" 
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                required
              />
            </div>

            <div className="grid grid-cols-3 gap-4 my-4">
              <div className="relative max-w-sm col-span-2">
              <label htmlFor="email" className="block leading-7 text-sm text-black font-medium font-sans">
              Card expiration date:
              </label>
              <input
                type="date"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                required
              />
              </div>

              <div>
              <label htmlFor="email" className="block leading-7 text-sm text-black font-medium font-sans">
              CVC/CVV:
              </label>
              <input
                type="number"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                required
              />
              </div>
            </div>


          <div className="p-[10px]"> </div>


            <button
              type="submit"
              className="inline-flex items-center px-4 py-2 bg-fuchsia-800 border-0 rounded text-white font-medium hover:bg-fuchsia-950 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >Complete Checkout
            </button>

          <div className="p-[10px]"> </div>
          </form>
        </section>
        </div>
      </div>
    );
  }
  