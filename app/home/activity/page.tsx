import Head from 'next/head';
import 'tailwindcss/tailwind.css'; // Import Tailwind CSS styles
import React from 'react';
// import Map from './Map';

export default function Home() {
  return (
    <div>
    

      <section className="text-gray-600 body-font relative ">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-200">
            🌿 Welcome to Online Nutrition Coaching! 🌿
              {/* <br className="hidden lg:inline-block">readymade gluten */}
            </h1>
            <p className="mb-8 leading-relaxed">
            Are you ready to embark on a journey towards a healthier, 
            happier you? Look no further! I am a certified and experienced online nutritionist, 
            dedicated to helping you achieve your wellness goals from the comfort of your own home.
            </p>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Schedule Now!</button>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img className="object-cover object-center rounded" alt="hero" src="/1.jpg" />
          </div>
      </div>

      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-200">
            Why Choose Online Nutrition Coaching?
            {/* <br classname="hidden lg:inline-block">readymade gluten */}
            </h1>
            <h2>✅ Personalized Guidance:</h2>
            <p className="mb-8 leading-relaxed">I understand that every individual is unique.
             I craft personalized nutrition plans tailored to your specific needs, 
            lifestyle, and preferences.</p>

            <h2>👩‍💻 Convenient and Flexible: </h2>
            <p className="mb-8 leading-relaxed">With online coaching, you have the flexibility to connect with
             me from anywhere in the world. No need to worry about commuting – 
             we can schedule virtual consultations at a time that suits you.</p>

            <h2>🍏 Holistic Approach:</h2>
            <p className="mb-8 leading-relaxed">I believe in a holistic approach to nutrition.It is not
             just about what you eat but also about creating sustainable lifestyle changes. 
             I provide support beyond meal plans, focusing on overall well-being.</p>

            <h2>📈 Progress Tracking:</h2>
            <p className="mb-8 leading-relaxed">We will track your progress together, making adjustments to 
            your plan as needed. Whether your goal is weight management, improved energy levels, or
             enhanced athletic performance, we will celebrate your victories along the way.</p>

            <h2>💬 Constant Support:</h2>
            <p className="mb-8 leading-relaxed"> I am here for you every step of the way. 
            From answering your nutrition-related questions to providing motivation and encouragement,
             I am committed to helping you stay on track.</p>

             <h2>🥑 Comprehensive Services:</h2>
            <p className="mb-8 leading-relaxed">Personalized Meal Plans <br />
            Nutritional Education <br />
            Goal Setting and Monitoring <br />
            Lifestyle Modification <br />
            Virtual Grocery Store Tours <br />
            Recipe Ideas and Cooking Tips  
            </p>

          <h2>Ready to prioritize your health and well-being? 
            Lets work together to create a sustainable and enjoyable approach to 
            nutrition that fits seamlessly into your life.</h2>
          </div>
        </div>


        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-200">
            📧 Contact me today to schedule your initial consultation and take the first step towards a healthier you!
            {/* <br classname="hidden lg:inline-block">readymade gluten */}
            </h1>
            <p className="mb-8 leading-relaxed">Email: abc@gmail.com</p>

            <p className="mb-8 leading-relaxed">Phone: 0123456789</p>

            <p className="mb-8 leading-relaxed"> Facebook: [Your Facebook Page] <br />
              Instagram: [Your Instagram Handle] <br />
              Twitter: [Your Twitter Handle] <br />
              LinkedIn: [Your LinkedIn Profile]</p>

            <p className="mb-8 leading-relaxed">
            Virtual Consultations: <br />
            I offer virtual consultations via Zoom, Skype, or your preferred platform. 
            To schedule an appointment, please reach out through email or direct message on social media.</p>
            
            <p className="mb-8 leading-relaxed">
            Office Hours: <br />
              Monday to Friday: [Your Operating Hours] <br />
              Saturday: [Your Operating Hours] <br />
              Sunday: [Your Operating Hours]
            </p>

            <p className="mb-8 leading-relaxed">Feel free to send me a message, and lets 
            start your journey towards a healthier lifestyle!!</p>


            <div className="flex justify-center">
            <button className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">Book Your Session</button>
            </div>
          </div>
        </div>

        
     </section>
</div>
);

}