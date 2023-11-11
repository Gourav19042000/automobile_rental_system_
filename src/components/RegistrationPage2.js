import React from "react";

import LoginImg from "../assets/familylogo.png";
const RegPage = () => {
  return (
    <>
      {
        //background-image:url()"}>
      }
      <div >
        <div
          className="bg-cover bg-center bg-fixed"
          style={{ backgroundImage: `url(${LoginImg})` }}
        >
          <div className="h-screen flex justify-center items-center">
            <div className="bg-white mx-4 p-8 rounded shadow-md w-full md:w-1/2 lg:w-1/3">
              <h1 className="text-3xl font-bold mb-8 text-center">Login</h1>
              <form>
                <div className="mb-4">
                  <label
                    className="block font-semibold text-gray-700 mb-2"
                    for="email"
                  >
                    Email Address
                  </label>
                  <input
                    className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="email"
                    type="email"
                    placeholder="Enter your email address"
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block font-semibold text-gray-700 mb-2"
                    for="password"
                  >
                    Password
                  </label>
                  <input
                    className="border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                  />
                  <a className="text-gray-600 hover:text-gray-800" href="#">
                    Forgot your password?
                  </a>
                </div>
                <div className="mb-6">
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="button"
                  >
                    Sign Up
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default RegPage;
