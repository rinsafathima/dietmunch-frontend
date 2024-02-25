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

      <div className="parallax-background">
      <div className="relative overflow-hidden bg-cover bg-no-repeat" style={{ backgroundPosition: '50%', backgroundImage: "url('/subscribe.jpg')", height: '500px' }}>
        <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsla(0,0%,0%,0.75)] bg-fixed">
          <div className="flex h-full items-center justify-center">
            <div className="px-6 text-center text-white md:px-12">
              <h1 className="mt-2 mb-16 text-5xl font-bold tracking-tight md:text-6xl xl:text-7xl">
                Personalized meal plan<br /><span>for a healthy lifestyle</span>
              </h1>
              <button type="button" className="rounded border-2 border-neutral-50 px-[46px] pt-[14px] pb-[12px] text-sm font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-100 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200">
                Get started
              </button>
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>


      <section className="text-gray-200 body-font">
      <div className="container px-5 py-24 mx-auto flex flex-wrap">
        <div className="flex w-full mb-20 flex-wrap">
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-100 lg:w-1/3 lg:mb-0 mb-4">The Palce where you acheive your Health goals</h1>
          <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">The Palce where you acheive your Health goals. Subscribe to a preferred package and Get your meal plans delivereded to your doorstep according to yuor preference.</p>
        </div>
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
      </div>
      
    </section>
    </div>
  );
};


export default HomePage;

