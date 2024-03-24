import React from 'react';
import 'tailwindcss/tailwind.css';
import Link from 'next/link';

export default function BookingSuccessPage() {
  return (
    <section className="body-font overflow-hidden p-6 flex justify-center items-center h-screen">
      <div className="text-center">
        <div className="mb-10">
          <img src="/1.gif" className="max-w-full h-96 rounded-full ml-[75px]" alt="Booking Success GIF" />
        </div>
        
        <div>
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Booking Successful!</h1>
          <p className="text-lg md:text-xl mb-4">Your booking has been confirmed. Thank you for choosing our service.</p>
        </div> 

        <Link
      href="../activity"
      className="inline-block px-6 py-3 rounded-lg bg-sky-400 text-white font-medium transition-colors hover:bg-sky-800"
    >
      BACK
    </Link>
      </div>
    </section>
  );
};
