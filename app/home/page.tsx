import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { lusitana } from '@/app/ui/fonts';

interface HomeProps {}

const HomePage: React.FC<HomeProps> = () => {
  // ... (rest of your code)

  return (
    <>
      <main className="min-h-screen flex flex-col bg-teal-400">
        <div className="container mx-auto"> {/* Create a container with appropriate width */}
          {/* Hero Section */}

        {/* {<Image
        src="/hero-desktop.png"
        width={1000}
        height={760}
        className="hidden md:block"
        alt="Screenshots of the dashboard project showing desktop version"
          />} */}

        {/* <div className="h-0 w-0 border-b-[30px] border-l-[20px] border-r-[20px] border-b-black border-l-transparent border-r-transparent"/> */}
        <div className={`${lusitana.className} text-center text-2xl md:text-4xl md:leading-normal`}> {/* Centered and increased font size */}
          <h2 className="text-3xl font-semibold text-black-800 md:text-4xl md:leading-normal mt-8 md:mt-16">
           Welcome to Diet Munch.
          </h2>
          <p className="mb-4">
            The place where you can get your personalized healthy meal to your doorstep on subscription basis.
          </p>
          </div>
  

          <div className="relative h-screen flex flex-col items-center justify-center px-4 lg:px-20">
            {/* ... */}
          </div>

          {/* Features Section */}
          <div className="py-20 px-4 lg:px-20 flex flex-col gap-10">
            {/* ... */}
          </div>

          {/* Other sections... */}
        </div>
      </main>
    </>
  );
};

export default HomePage;
