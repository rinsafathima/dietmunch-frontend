import React from 'react';
import Link from 'next/link';
export default function Home() {
    return (




      <div className="h-screen bg-gray-200 flex"> 

        <div className="h-[778px] w-[1439px] bg-white   ">
          
        <section className="body-font overflow-hidden p-6">
        <div className="p-[10px]"> </div>

        <div className="mb-10 mt-10 ml-96">
          <img src="/payment/6.gif" className="max-w-full h-96 rounded-full ml-2 " alt="" />
        </div>

          <p className="leading-relaxed  mb-5 text-gray-900 font-large text-4xl font-sans ml-[520px]">Please Try Again! </p>

          <Link href="../home/cart">
              <button
                type="submit"
                className="inline-flex items-center ml-[513px] px-4 py-2 bg-red-600 border-0 rounded ml-32 text-white font-medium hover:bg-red-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 "
                >BACK TO PAYMENT SELECTION
              </button>
            </Link>

         
        </section>
        </div>
      </div>



     
    );
  }