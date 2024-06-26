import React from 'react';

import Link from 'next/link';
export default function Home() {
    return (
      
      <div className="h-screen bg-gray-200 flex"> 

        <div className="h-[778px] w-[1439px] bg-gray-50   ">
          
        <section className="body-font overflow-hidden p-6">
        <div className="p-[10px]"> </div>

        <div className="mb-10 mt-10 ml-96">
          <img src="/payment/5.gif" className="max-w-full h-96 rounded-full ml-[-100px] " alt="" />
        </div>

          <p className="leading-relaxed  mb-5 text-gray-900 font-large text-4xl font-sans ml-[460px]"> Thank You! </p>
            <p className="leading-relaxed mb-5 text-gray-900 font-large text-xl font-sans ml-[430px]"> Payment done successfully.. </p> 

            <Link href="../../home">
              <button
                type="submit"
                className="inline-flex items-center px-4 py-2 bg-green-400 border-0 rounded ml-[510px] text-white font-medium hover:bg-green-800"
                >HOME
              </button>
            </Link>

         
        </section>
        </div>
      </div>
    );
  }