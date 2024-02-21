export default function Home() {
  return (
    <div className="bg-gradient-to-r from-gray-600 to-gray-800 min-h-screen flex flex-col md:flex-row flex-wrap md:space-x-8">

      <section className="md:w-1/3 bg-white overflow-hidden flex flex-col justify-center items-center">
        {/* Replace with your image component or URL */}
        <img src="/img_1.jpg" alt="image" width="500" height="300" className="mb-8" />
      </section>

      <section className="text-gray-100 body-font md:w-1/2 overflow-hidden p-8">
        <h2 className="text-gray-100 text-lg mb-1 font-medium title-font">Checkout</h2>
        <p className="leading-relaxed mb-5 text-gray-100">
          Thank you for choosing our application! Please fill out the form below to complete your checkout.
        </p>
        <form className="space-y-4">
          <div className="mb-4">
            <label htmlFor="name" className="block leading-7 text-sm text-gray-100">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block leading-7 text-sm text-gray-100">
              Card Number
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block leading-7 text-sm text-gray-100">
              Email address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block leading-7 text-sm text-gray-100">
              Contact
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block leading-7 text-sm text-gray-100">
              Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              required
            />
          </div>
          {/* Add more form fields as needed */}
          <button
            type="submit"
            className="inline-flex items-center px-4 py-2 bg-indigo-500 border-0 rounded text-white font-medium hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Complete Checkout
          </button>
        </form>
      </section>

    </div>
  );
}
