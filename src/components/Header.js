import React from "react";
import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";

export const Title = () => {
  return (
    <>
      <div>
        <div>
          <ul className="flex justify-center ml-2">
            <li>
              <Link to="/">
                <img
                  className="w-[100px] h-[70px] rounded-xl"
                  src={Logo}
                  alt="logo"
                />
              </Link>
            </li>
            <li>
              <Link to="/">
                <h1 className="text-2xl font-bold ml-2 mt-3  hover:text-violet-400 duration-200 cursor-pointer">
                  Huron Rentals
                </h1>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

const Header = () => {
  return (
    <>
      <div className="p-3">
        <div className="pb-2 pl-4 rounded-xl header sticky top-0 bg-white shadow-lg flex items-end justify-between px-8 py-02">
          <Title />
          <div>
            <nav className="nav font-semibold text-lg flex justify-end">
              <ul className="flex items-stretch">
                <li className="p-4 border-b-2 border-blue-500 border-opacity-0 hover:border-opacity-100 hover:text-blue-500 duration-200 cursor-pointer active">
                  <Link to="/">Home</Link>
                </li>
                <li className="p-4 border-b-2 border-blue-500 border-opacity-0 hover:border-opacity-100 hover:text-blue-500 duration-200 cursor-pointer">
                  <Link to="/">Automobiles</Link>
                </li>
                <li className="p-4 border-b-2 border-blue-500 border-opacity-0 hover:border-opacity-100 hover:text-blue-500 duration-200 cursor-pointer">
                  <Link to="/">About Us</Link>
                </li>
                <li className="p-4 border-b-2 border-blue-500 border-opacity-0 hover:border-opacity-100 hover:text-blue-500 duration-200 cursor-pointer">
                  <Link to="/">Contact</Link>
                </li>
              </ul>
              <div className="relative px-4  flex justify-between items-center bg-white">
                <Link
                  class="block p-4 mb-2  mx-2 leading-loose text-lg text-center font-semibold  bg-gray-50 hover:bg-gray-300 rounded-xl"
                  to="/signIn"
                >
                  Sign in
                </Link>
                <Link
                  class="block p-4 mb-2 mx-2 leading-loose text-lg text-center text-white font-semibold bg-blue-600 hover:bg-blue-700  rounded-xl"
                  to="signUp"
                >
                  Sign Up
                </Link>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};
export default Header;
