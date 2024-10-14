import React, { useState } from "react";
import Footer from "./Footer";
import Navbar from "./UI/Navbar";
import SearchableDropdown from "./UI/SearchableDropdown";
import { BsGoogle } from "react-icons/bs";
import { CgFacebook } from "react-icons/cg";
import { FaLinkedinIn } from "react-icons/fa";
import { NavLink } from "react-router-dom";
var passwordValidator = require("password-validator");

function RegisterBox() {
  var schema = new passwordValidator();
  schema
    .is()
    .min(8)
    .is()
    .max(100)
    .has()
    .uppercase()
    .has()
    .lowercase()
    .has()
    .digits(1)
    .has()
    .not()
    .spaces();

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const [city, setCity] = useState("");
  const [userId, setUserId] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userIdError, setUserIdError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [errors, setErrors] = useState([]);
  const cities = [];

  function submitForm() {
    setErrors([]);
    setUserIdError(false);
    setEmailError(false);
    setPasswordError(false);
    let formErrors = [];
    if (!userId) {
      formErrors.push("User Id is required");
      setUserIdError(true);
    }
    if (!email) {
      formErrors.push("Email is required");
      setEmailError(true);
    }
    if (!validateEmail(email)) {
      formErrors.push("Please provide a valid email");
      setEmailError(true);
    }
    if (!password) {
      formErrors.push("We can't create your account without password");
      setPasswordError(true);
    }
    if (!schema.validate(password)) {
      formErrors.push(
        "Please choose a more strong password. Make sure your password contains at least 1 Uppercase letter, 1 lowercase letter, 1 digit, and minimum 8 length."
      );
      setPasswordError(true);
      setPassword("");
    }
    setErrors(formErrors);
  }
  return (
    <div
      className="flex flex-col
    "
    >
      <Navbar />
      <div className="w-full max-w-full mx-auto mt-20 md:mb-20 p-6 lg:w-5/12">
        <div className="relative z-0 flex flex-col justify-center break-words min-w-fit bg-white border-0 shadow-soft-xl rounded-2xl bg-clip-border lg:p-12">
          {errors.length > 0 && (
            <div id="error">
              <div
                id="alert-border-2"
                className="flex p-4 m-4 text-red-500 border-2 rounded-md border-red-500 justify-center"
              >
                <div className="flex flex-col">
                  {errors.map((err, id) => {
                    return (
                      <div className="ml-3 text-sm font-medium" key={id}>
                        {err}
                      </div>
                    );
                  })}
                </div>

                <button
                  type="button"
                  className="ml-auto text-red-500 rounded-lg inline-flex h-8 w-8 justify-center"
                  data-dismiss-target="#alert-border-2"
                  aria-label="Close"
                  onClick={() => setErrors([])}
                >
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          )}
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
              <div className="flex justify-between gap-2">
                <div className="mb-4 w-2/3">
                  <input
                    type="text"
                    className={
                      "text-sm focus:shadow-soft-primary-outline leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 px-3 font-normal text-gray-700 transition-all focus:border-gray-300 focus:bg-white focus:text-gray-700 focus:outline-none focus:transition-shadow " +
                      (userIdError ? "border-red-500" : "")
                    }
                    placeholder="User Id"
                    name="userId"
                    aria-label="User Id"
                    autoComplete="userId"
                    value={userId}
                    onChange={(e) => {
                      setUserId(e.target.value);
                    }}
                  />
                </div>

                <SearchableDropdown
                  searchPlaceholder={"Search City"}
                  labelColor={"gray-700"}
                  heading={"Select City"}
                  options={cities}
                  selectedValue={city}
                  setSelectedValue={setCity}
                />
              </div>
              <div className="mb-4">
                <input
                  type="email"
                  className={
                    "text-sm focus:shadow-soft-primary-outline leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 px-3 font-normal text-gray-700 transition-all focus:border-gray-300 focus:bg-white focus:text-gray-700 focus:outline-none focus:transition-shadow " +
                    (emailError ? "border-red-500" : "")
                  }
                  placeholder="Email"
                  name="email"
                  aria-label="Email"
                  value={email}
                  aria-describedby="email-addon"
                  autoComplete="email"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </div>
              <div className="mb-4">
                <input
                  type="password"
                  className={
                    "text-sm focus:shadow-soft-primary-outline leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 px-3 font-normal text-gray-700 transition-all focus:border-gray-300 focus:bg-white focus:text-gray-700 focus:outline-none focus:transition-shadow " +
                    (passwordError ? "border-red-500" : "")
                  }
                  placeholder="Password"
                  aria-label="Password"
                  value={password}
                  aria-describedby="password-addon"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
                <div className="mt-4 text-sm text-primaryOrange-dark">
                  Please make sure your password contains at least 1 Uppercase
                  letter, 1 lowercase letter, 1 digit, and minimum 8 length.
                </div>
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
                  onClick={() => submitForm()}
                  className="inline-block w-full px-6 py-3 mt-6 mb-2 font-bold text-center text-white uppercase align-middle transition-all bg-primaryOrange-light border-0 rounded-lg cursor-pointer hover:bg-primaryOrange-dark"
                >
                  Sign up
                </button>
              </div>
              <p className="mt-4 mb-0 leading-normal text-sm">
                Already have an account?
                <NavLink to="/login" className="font-bold text-slate-700">
                  Sign in
                </NavLink>
              </p>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default RegisterBox;
