import React from 'react';
import Link from 'next/link';
export default function Home() {
    return (
      
      <div className="h-screen bg-white flex"> 

        <div className="w-2/5 h-fit bg-gray-200 rounded-lg mr-20 ml-32 mt-40 mb-40 ">
          
          <section className="body-font overflow-hidden p-6">
          
            <div className="w-5/6 h-5/6 bg-blue-700 rounded-lg mr-8 ml-10 mt-5  ">
              <h1 className="font-serif text-2xl font-medium ml-40">Try again</h1>
            </div>
         
            <div className="p-[10px]"> </div>
            

            <p className="leading-relaxed mb-5 text-gray-900 font-medium font-sans">By placing your order, you agree to our application Privacy policy and Conditions of use.</p>
            <hr className="my-4" style={{ borderColor: 'black' }} /> 

              <p className="leading-relaxed mb-5 text-gray-900 text-2xl font-sans"> Order Summary </p>

              <div className="p-[100px]"> </div>
         
              <hr className="my-4" style={{ borderColor: 'black' }} />

              <div className="p-[10px]"> </div>

          


          </section>
        </div>

        <div className="h-fit w-2/5 bg-white rounded-lg mr-20 ml-auto mt-5 ">
          
        <section className="body-font overflow-hidden p-6">
        <div className="p-[10px]"> </div>

        <div className="mb-4">
          <img src="/error.png" className="max-w-full h-96 rounded-full ml-16 " alt="" />
        </div>

          <p className="leading-relaxed mb-5 text-gray-900 font-large text-4xl font-sans ml-40"> Payment Error! </p>
            <p className="leading-relaxed mb-5 text-gray-900 font-large text-base font-sans text-center"> Please check your security code, card details and connection and try again.</p> 
            

            <Link href="../home/cart">
              <button
                type="submit"
                className="inline-flex items-center px-4 py-2 bg-red-600 border-0 rounded ml-32 text-white font-medium hover:bg-red-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 "
                >BACK TO PAYMENT SELECTION
              </button>
            </Link>
            
   
         
        </section>
        </div>
      </div>
    );
  }