import React from 'react';
import Image from 'next/image';

export default function Registration() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* Left Side (Image) */}
      <div className="md:w-1/2 bg-gray-200 flex justify-center items-center">
      <Image
          src="C:\Users\Ruwi\Documents\GitHub\dietmunch-frontend\app\home\registration\FoodGroupsLP_804x482.jpg" // Replace this URL with your image URL
          alt="Registration"
          width={400}
          height={300}
          className="w-3/4 md:w-2/3 rounded-lg shadow-lg"
        />
      </div>

      {/* Right Side (Form) */}
      <div className="md:w-1/2 flex justify-center items-center p-8">
        <div className="w-full max-w-md">
          <h2 className="text-2xl font-semibold mb-8 text-center">Register</h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="firstName" className="block mb-1">First Name</label>
              <input
                type="text"
                id="firstName"
                className="w-full border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-400"
                placeholder="Enter your first name"
              />
            </div>

            <div>
              <label htmlFor="lastName" className="block mb-1">Last Name</label>
              <input
                type="text"
                id="lastName"
                className="w-full border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-400"
                placeholder="Enter your last name"
              />
            </div>

            <div>
              <label htmlFor="address" className="block mb-1">Address</label>
              <input
                type="text"
                id="address"
                className="w-full border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-400"
                placeholder="Enter your address"
              />
            </div>

            <div>
              <label htmlFor="gender" className="block mb-1">Gender</label>
              <select
                id="gender"
                className="w-full border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-400"
              >
                <option value="">Select your gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label htmlFor="mobileNumber" className="block mb-1">Mobile Number</label>
              <input
                type="tel"
                id="mobileNumber"
                className="w-full border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-400"
                placeholder="Enter your mobile number"
              />
            </div>

            <div>
              <label htmlFor="dob" className="block mb-1">Date of Birth</label>
              <input
                type="date"
                id="dob"
                className="w-full border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-400"
              />
            </div>

            <div>
              <label htmlFor="email" className="block mb-1">Email Address</label>
              <input
                type="email"
                id="email"
                className="w-full border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-400"
                placeholder="Enter your email address"
              />
            </div>

            <div>
              <label htmlFor="password" className="block mb-1">Password</label>
              <input
                type="password"
                id="password"
                className="w-full border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-400"
                placeholder="Enter your password"
              />
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block mb-1">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                className="w-full border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-400"
                placeholder="Confirm your password"
              />
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
