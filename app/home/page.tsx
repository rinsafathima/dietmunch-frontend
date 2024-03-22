import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { lusitana } from '@/app/ui/fonts';

interface HomeProps {}

const HomePage: React.FC<HomeProps> = () => {
  // ... (rest of your code)

  return (
    <div className="bg-gradient-to-r from-gray-600 to-gray-800 min-h-screen">
    <section className="parallex-selection mb-40">
      <nav className="relative flex w-full items-center justify-between bg-white py-2 shadow-sm shadow-neutral-700/10 dark:bg-neutral-800 dark:shadow-black/30 lg:flex-wrap lg:justify-start">
        <div className="flex w-full flex-wrap items-center justify-between px-6">
          <div className="flex items-center">
            <button
              className="block border-0 bg-transparent py-2 pr-2.5 text-neutral-500 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 dark:text-neutral-200 lg:hidden"
              type="button"
              aria-controls="navbarSupportedContentY"
              aria-expanded="false"
              aria-label="Toggle navigation">
              <span className="[&>svg]:w-7">
                {/* SVG inline or use Image component for external SVG */}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7">
                  <path fillRule="evenodd" d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z" clipRule="evenodd" />
                </svg>
              </span>
            </button>
            <a className="text-primary dark:text-primary-400" href="#!">
              {/* Next.js Image component for logos/icons if needed */}
            </a>
          </div>

          <div className="!visible hidden flex-grow basis-[100%] items-center lg:!flex lg:basis-auto" id="navbarSupportedContentY">
            <ul className="mr-auto lg:flex lg:flex-row">
              {/* Navigation items */}
            </ul>
          </div>

          <div className="my-1 flex items-center lg:my-0 lg:ml-auto">
            {/* Buttons */}
          </div>
        </div>
      </nav>

      <div className="parallax-background mt-[-16px]">
      <div className="relative  overflow-hidden bg-cover bg-no-repeat" style={{ backgroundPosition: '50%', backgroundImage: "url('/subscribe.jpg')", height: '500px' }}>
        <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed">
          <div className="flex h-full items-center justify-center">
            <div className="px-6 text-center text-white md:px-12">
              <h1 className="mt-[-150px] ml-[475px] mb-16 text-5xl font-bold tracking-tight text-center md:text-9xl:text-11xl">
                Personalized meal plan<br /><span>for a healthy lifestyle</span>
              </h1>
              <button type="button" className="rounded border-2 ml-[475px] border-neutral-50 px-[46px] pt-[14px] pb-[12px] text-sm font-medium uppercase leading-normal text-neutral-50 transition
               duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-100 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200">
                Get started
              </button>
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>

      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col mt-[-160px] items-center"
      style={{ backgroundColor: '#E7FBD7'}}>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            Welcome to Diet Munch
            {/* <br classname="hidden lg:inline-block">readymade gluten */}
            </h1>
            <p className="mb-8 leading-relaxed">Imagine having your own personal nutritionist at your fingertips, guiding you towards a healthier lifestyle with ease. 
            Our platform offers precisely that – a tailored experience crafted to suit your individual needs and preferences. 
            Through personalized meal plans, we empower you to take control of your health journey, whether you're aiming to shed extra weight or simply maintain a balanced diet.</p>
            <p className="mb-8 leading-relaxed">Gone are the days of generic diet plans that don't fit your lifestyle. 
            With us, you'll receive nutrition solutions customized to your unique requirements. 
            We understand that every individual is different, which is why our platform takes into account your dietary preferences, health goals, and lifestyle factors to curate a plan that works best for you.</p>
            <p className="mb-8 leading-relaxed">Our goal is to make achieving better health and vitality a seamless and enjoyable process. By joining our platform, 
            you're not just accessing meal plans – you're embarking on a transformative journey towards a healthier, happier you. 
            Say goodbye to guesswork and hello to a personalized approach to wellness. Let's embark on this journey together!</p>
          </div>
        </div>


        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center"
        style={{ backgroundColor: '#213737'}}>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-200">
            User Registration
            </h1>
            <p className="mb-8 leading-relaxed  text-gray-400">Get started in seconds! Diet Munch with NutriPal for a personalised journey to better health. Input your preferences, set goals, and dive into a world of tailored meal plans and expert guidance. Your path to wellness begins here.</p>

            
          </div>
        </div>

        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col mt-[0px] items-center"
      style={{ backgroundColor: '#E7FBD7'}}>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            Welcome to Diet Munch
            {/* <br classname="hidden lg:inline-block">readymade gluten */}
            </h1>
            <p className="mb-8 leading-relaxed">Imagine having your own personal nutritionist at your fingertips, guiding you towards a healthier lifestyle with ease. 
            Our platform offers precisely that – a tailored experience crafted to suit your individual needs and preferences. 
            Through personalized meal plans, we empower you to take control of your health journey, whether you're aiming to shed extra weight or simply maintain a balanced diet.</p>
            <p className="mb-8 leading-relaxed">Gone are the days of generic diet plans that don't fit your lifestyle. 
            With us, you'll receive nutrition solutions customized to your unique requirements. 
            We understand that every individual is different, which is why our platform takes into account your dietary preferences, health goals, and lifestyle factors to curate a plan that works best for you.</p>
            <p className="mb-8 leading-relaxed">Our goal is to make achieving better health and vitality a seamless and enjoyable process. By joining our platform, 
            you're not just accessing meal plans – you're embarking on a transformative journey towards a healthier, happier you. 
            Say goodbye to guesswork and hello to a personalized approach to wellness. Let's embark on this journey together!</p>
          </div>
        </div>

        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center"
        style={{ backgroundColor: '#213737'}}>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-200">
            📧 Contact me today to schedule your initial consultation and take the first step towards a healthier you!
            {/* <br classname="hidden lg:inline-block">readymade gluten */}
            </h1>
            <p className="mb-8 leading-relaxed  text-gray-400">Email: abc@gmail.com</p>

            <p className="mb-8 leading-relaxed  text-gray-400">Phone: 0123456789</p>

            <p className="mb-8 leading-relaxed text-gray-400">
            Virtual Consultations: <br />
            I offer virtual consultations via Zoom, Skype, or your preferred platform. 
            To schedule an appointment, please reach out through email or direct message on social media.</p>
            
            <p className="mb-8 leading-relaxed text-gray-400" >
            Office Hours: <br />
              Monday to Friday: [Your Operating Hours] <br />
              Saturday: [Your Operating Hours] <br />
              Sunday: [Your Operating Hours]
            </p>

            <p className="mb-8 leading-relaxed text-gray-400">Feel free to send me a message, and lets 
            start your journey towards a healthier lifestyle!!</p>


            <div className="flex justify-center">
            <button className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">Book Your Session</button>
            </div>
          </div>
        </div>





      <section className="text-gray-200 body-font">
        <div className="flex flex-wrap md:-m-2 -m-1">
          <div className="flex flex-wrap w-1/2">
            <div className="md:p-2 p-1 w-1/2">
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img className="object-cover object-center rounded" alt="hero" src="/1.jpg" />
          </div>
            </div>
            <div className="md:p-2 p-1 w-1/2">
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img className="object-cover object-center rounded" alt="hero" src="/2.jpg" />
          </div>
            </div>
            <div className="md:p-2 p-1 w-full">
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img className="object-cover object-center rounded" alt="hero" src="/5.jpg" />
          </div>
            </div>
          </div>
          <div className="flex flex-wrap w-1/2">
            <div className="md:p-2 p-1 w-full">
            <div className="lg:max-w-lg lg:w-full md:w-2/2 w-5/6">
            <img className="object-cover object-center rounded" alt="hero" src="/6.jpg" />
          </div>
            </div>
            <div className="md:p-2 p-1 w-1/2">
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img className="object-cover object-center rounded" alt="hero" src="/11.jpg" />
          </div>
            </div>
            <div className="md:p-2 p-1 w-1/2">
              
            <img className="object-cover object-center rounded" alt="hero" src="/3.jpg" />
            </div>
          </div>
        </div>
      
      
    </section>
    </div>
  );
};


export default HomePage;

