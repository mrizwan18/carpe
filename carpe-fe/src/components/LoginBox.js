import React, { useState } from "react";
import Footer from "./Footer";
import Navbar from "./UI/Navbar";
import DropDown from "./UI/DropDown";
import SearchableDropdown from "./UI/SearchableDropdown";
import { BsGoogle } from "react-icons/bs";
import { CgFacebook } from "react-icons/cg";
import { FaLinkedinIn } from "react-icons/fa";

function LoginBox() {
  const [city, setCity] = useState("");
  return (
    <div
      className="flex flex-col
    "
    >
      <Navbar />
      <div className="w-full max-w-full mx-auto mt-20 md:mb-20 p-6 lg:w-5/12">
        <div className="relative z-0 flex flex-col break-words min-w-fit bg-white border-0 shadow-soft-xl rounded-2xl bg-clip-border lg:p-12">
          <div className="p-6 mb-0 text-center bg-white border-b-0 rounded-t-2xl text-gray-800 font-bold">
            <h5>Register with</h5>
          </div>
          <div className="flex flex-col lg:flex-row justify-items-center gap-y-4 lg:gap-x-4 lg:justify-around m-4 mt-0">
            <div className="flex font-bold text-center justify-evenly p-6 lg:gap-x-4 text-gray-800 align-middle transition-all bg-transparent border border-gray-300 border-solid rounded-lg shadow-none cursor-pointer hover:scale-102 leading-pro ease-soft-in tracking-tight-soft hover:bg-primaryOrange-light hover:text-white hover:cursor-pointer duration-200">
              <BsGoogle size={24} />
              <h2>Continue with Google</h2>
            </div>
            <div className="flex font-bold text-center justify-evenly  p-6 lg:gap-x-4 text-gray-800 align-middle transition-all bg-transparent border border-gray-300 border-solid rounded-lg shadow-none cursor-pointer hover:scale-102 leading-pro ease-soft-in tracking-tight-soft  hover:bg-primaryOrange-light hover:text-white hover:cursor-pointer duration-200">
              <CgFacebook size={24} />
              <h2>Continue with Facebook</h2>
            </div>
            <div className="flex font-bold text-center justify-evenly  p-6 lg:gap-x-4 text-gray-800 align-middle transition-all bg-transparent border border-gray-300 border-solid rounded-lg shadow-none cursor-pointer hover:scale-102 leading-pro ease-soft-in tracking-tight-soft  hover:bg-primaryOrange-light hover:text-white hover:cursor-pointer  duration-200">
              <FaLinkedinIn size={24} />
              <h2>Continue with Linkedin</h2>
            </div>
          </div>
          <div className="flex font-bold text-center justify-evenly  text-gray-800 align-middle">
            <h2>OR</h2>
          </div>
          <div className="flex-auto p-4">
            <form role="form text-left">
              <div className="flex justify-between">
                <div className="mb-4 w-2/3">
                  <input
                    type="text"
                    className="text-sm focus:shadow-soft-primary-outline leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 px-3 font-normal text-gray-700 transition-all focus:border-primaryOrange-light focus:bg-white focus:text-gray-700 focus:outline-none focus:transition-shadow"
                    placeholder="Name"
                    name="name"
                    aria-label="Name"
                    aria-describedby="email-addon"
                    autoComplete="name"
                  />
                </div>

                <SearchableDropdown
                  label={""}
                  labelColor={"black"}
                  heading={"Select City"}
                  options={[
                    "DHA Phase 7",
                    "Model Town C Block",
                    "Gulberg 1",
                    "Sanda",
                    "Bahria Town",
                    "DHA Phase 7",
                    "Model Town C Block",
                    "Gulberg 1",
                    "Sanda",
                    "Bahria Town",
                  ]}
                  selectedValue={city}
                  setSelectedValue={setCity}
                />
              </div>
              <div className="mb-4">
                <input
                  type="email"
                  className="text-sm focus:shadow-soft-primary-outline leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 px-3 font-normal text-gray-700 transition-all focus:border-primaryOrange-light focus:bg-white focus:text-gray-700 focus:outline-none focus:transition-shadow"
                  placeholder="Email"
                  name="email"
                  aria-label="Email"
                  aria-describedby="email-addon"
                  autoComplete="email"
                />
              </div>
              <div className="mb-4">
                <input
                  type="password"
                  className="text-sm focus:shadow-soft-primary-outline leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 px-3 font-normal text-gray-700 transition-all focus:border-primaryOrange-light focus:bg-white focus:text-gray-700 focus:outline-none focus:transition-shadow"
                  placeholder="Password"
                  aria-label="Password"
                  aria-describedby="password-addon"
                />
              </div>
              <div className="min-h-6 pl-7 mb-0.5 block">
                <input
                  id="terms"
                  className="w-5 h-5 ease-soft -ml-7 rounded-1.4 checked:bg-primaryOrange-light   relative float-left mt-1 cursor-pointer appearance-none border border-solid border-slate-800 bg-white bg-contain bg-center bg-no-repeat align-top transition-all after:absolute after:flex after:h-full after:w-full after:items-center after:justify-center after:text-white after:opacity-0 after:transition-all after:content-['\2713'] checked:border-0 checked:border-transparent checked:bg-transparent checked:after:opacity-100"
                  type="checkbox"
                  value=""
                />
                <label
                  className="mb-2 ml-1 font-normal select-none text-sm text-slate-700"
                  htmlFor="terms"
                >
                  I agree the with &nbsp;
                  <a href="#" className="font-bold text-slate-700">
                    Terms and Conditions
                  </a>
                </label>
              </div>
              <div className="text-center">
                <button
                  type="button"
                  className="inline-block w-full px-6 py-3 mt-6 mb-2 font-bold text-center text-white uppercase align-middle transition-all bg-primaryOrange-light border-0 rounded-lg cursor-pointer hover:bg-primaryOrange-dark"
                >
                  Sign up
                </button>
              </div>
              <p className="mt-4 mb-0 leading-normal text-sm">
                Already have an account?
                <a href="#" className="font-bold text-slate-700">
                  Sign in
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default LoginBox;
