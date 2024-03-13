import React from 'react';
export default function Home() {
    return (
      
      <div className="h-screen bg-white flex"> 

        <div className="w-2/5 h-fit bg-gray-200 rounded-lg mr-20 ml-32 mt-40 mb-40 ">
          
          <section className="body-font overflow-hidden p-6">
          
            <div className="w-5/6 h-5/6 bg-blue-700 rounded-lg mr-8 ml-10 mt-5  ">
              <h1 className="font-serif text-2xl font-medium">Proceed to make a shedule with dietician</h1>
            </div>
         
            <div className="p-[10px]"> </div>
            

            <p className="leading-relaxed mb-5 text-gray-900 font-medium font-sans">By placing your order, you agree to our application Privacy policy and Conditions of use.</p>
            <hr className="my-4" style={{ borderColor: 'black' }} /> 

              <p className="leading-relaxed mb-5 text-gray-900 text-2xl font-sans"> Enjoy your Subscription plan for a month </p>

              <div className="p-[100px]"> </div>
         
              <hr className="my-4" style={{ borderColor: 'black' }} />

              <div className="p-[10px]"> </div>

          </section>
        </div>

        <div className="h-fit w-2/5 bg-white rounded-lg mr-20 ml-auto mt-5 ">
          
        <section className="body-font overflow-hidden p-6">
        <div className="p-[10px]"> </div>

        <div className="mb-4">
          <img src="/IMG_8088.png" className="max-w-full h-96 rounded-full ml-16 " alt="" />
        </div>

          <p className="leading-relaxed mb-5 text-gray-900 font-large text-4xl font-sans ml-40"> Thank You! </p>
            <p className="leading-relaxed mb-5 text-gray-900 font-large text-xl font-sans ml-32"> Payment done Sucessfully.. </p> 

            <button
              type="submit"
              className="inline-flex items-center px-4 py-2 bg-green-400 border-0 rounded ml-52 text-white font-medium hover:bg-green-800"
            >HOME
            </button>


         
        </section>
        </div>
      </div>
    );
  }