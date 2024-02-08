import Head from 'next/head';
import 'tailwindcss/tailwind.css'; // Import Tailwind CSS styles

export default function Home() {
  return (
    <div>
      <Head>
        <title>My Next.js Tailwind Site</title>
      </Head>
      
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            Healthy Eating Starts Here - 
            Lite & Simple
              {/* <br className="hidden lg:inline-block">readymade gluten */}
            </h1>
            <p className="mb-8 leading-relaxed">
            Take the first step toward a healthier you with our Lite plan. Enjoy:
            A curated selection of weekly meal plans based on your preferences.
            Basic recipe filtering for dietary restrictions and allergies.
            Automated grocery lists for chosen plans.
            </p>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Subscribe</button>
              <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img className="object-cover object-center rounded" alt="hero" src="/hero-desktop.png" />
          </div>
        </div>

        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img className="object-cover object-center rounded" alt="hero" src="/hero-desktop.png" />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Unlock More Variety & Personalization - 
            Elite Your Plate
            {/* <br classname="hidden lg:inline-block">readymade gluten */}
            </h1>
            <p className="mb-8 leading-relaxed">Upgrade your healthy eating journey with our Elite plan, featuring:
            All Lite plan benefits, plus:
            More diverse weekly meal plans, including vegetarian, vegan, and gluten-free options.
            Advanced recipe filtering based on specific health goals.
            Portion control guidance for personalized calorie targets.</p>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg">Subscribe</button>
              <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button>
            </div>
          </div>
        </div>
  
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            Customize & Conquer - 
            Pro Meal Mastery
              {/* <br className="hidden lg:inline-block">readymade gluten */}
            </h1>
            <p className="mb-8 leading-relaxed">
            Experience complete control over your health with our Pro plan:
            All Elite plan benefits, plus:
            Completely customized weekly meal plans tailored to your unique preferences, allergies, and goals.
            Integration with fitness trackers and health apps for data-driven insights.
            In-depth nutritional analysis of your meal plans for deeper understanding.
            </p>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">Subscribe</button>
              <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img className="object-cover object-center rounded" alt="hero" src="/hero-desktop.png" />
          </div>
        </div>

      </section>
    </div>
  );
}
