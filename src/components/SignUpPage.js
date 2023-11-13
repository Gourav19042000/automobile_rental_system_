import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import SignUpPageImg from "../assets/SignUpPageImg.jpeg";

const SignUpPage = () => {
  const [signUpData, setSignUpData] = useState({
    Name: "",
    Address: "",
    License: "",
    Age: "",
    Email: "",
    Phone: "",
    PassWord: "",
  });
  const onChanges = (e) => {
    const { id, value } = e.target;
    setSignUpData((preData) => ({
      ...preData,
      [id]: value,
    }));
    console.log(e.target.value);
  };
  const onSubmitForms = async (e) => {
    e.preventDefault();
  
    try {
      // Validate the form data here if needed
  
      // Send data to the backend using Axios
      const response = await axios.post(
        "http://localhost:5043/api/Customers",
        signUpData
      );
  
      console.log("Form submitted successfully:", response.data);
  
      // Optionally, reset the form after successful submission
      setSignUpData({
        Name: "",
        Address: "",
        License: "",
        Age: '',
        Email: "",
        Phone: "",
        PassWord: "",
      });
    } catch (error) {
      console.error("Error submitting form data:", error);
  
      // Optionally, handle specific errors or display a user-friendly message
    }
  };

 
  return (
    <>
      <div>
        <div
          className="bg-cover bg-center bg-fixed"
          style={{ backgroundImage: `url(${SignUpPageImg})` }}
        >
          <div className="h-screen flex justify-end mr-10 items-center">
            <div className="bg-white mx-4 p-8 rounded shadow-md w-full md:w-1/2 lg:w-1/3">
              <h1 className="text-3xl font-bold mb-8 text-center">
                Registration
              </h1>
              <form onSubmit={onSubmitForms}>
                <div className="mb-4">
                  <label
                    className="block font-semibold text-gray-700 mb-2"
                    for="name"
                  >
                    Name :
                  </label>
                  <input
                    className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="Name"
                    type="text"
                    value={signUpData.Name}
                    onChange={onChanges}
                    placeholder="Enter your Name"
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block font-semibold text-gray-700 mb-2"
                    for="mobilenumber"
                  >
                    Mobile Number
                  </label>

                  <input
                    className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="Phone"
                    type="text"
                    value={signUpData.Phone}
                    onChange={onChanges}
                    placeholder="Enter your Mobile Number"
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block font-semibold text-gray-700 mb-2"
                    for="email"
                  >
                    Email Address
                  </label>
                  <input
                    className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="Email"
                    type="email"
                    value={signUpData.Email}
                    onChange={onChanges}
                    placeholder="Enter your email address"
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block font-semibold text-gray-700 mb-2"
                    for="age"
                  >
                    Age
                  </label>
                  <input
                    className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="Age"
                    type="text"
                    onChange={onChanges}
                    value={signUpData.Age}
                    placeholder="Enter your Age"
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
                    id="PassWord"
                    type="password"
                    onChange={onChanges}
                    value={signUpData.PassWord}
                    placeholder="Enter your password"
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block font-semibold text-gray-700 mb-2"
                    for="address"
                  >
                    Address
                  </label>
                  <input
                    className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="Address"
                    type="text"
                    value={signUpData.Address}
                    onChange={onChanges}
                    placeholder="Enter your Address"
                  />
                </div>
                <div>
                  <p className="text-gray-600 mt-2 hover:text-gray-800">
                    Already have Account{" "}
                    <Link to="/signIn" className="text-blue-700 underline">
                      SignIn
                    </Link>
                  </p>
                </div>
                <div className="mb-6">
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="submit"
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

export default SignUpPage;
