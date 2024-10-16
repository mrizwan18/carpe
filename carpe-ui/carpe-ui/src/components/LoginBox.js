import React, { useState } from "react";
import Footer from "./Footer";
import Navbar from "./UI/Navbar";
import { BsGoogle } from "react-icons/bs";
import { NavLink } from "react-router-dom";

function LoginBox() {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [userIdError, setUserIdError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [errors, setErrors] = useState([]);

  function submitForm() {
    setErrors([]);
    setUserIdError(false);
    setPasswordError(false);
    let formErrors = [];

    if (!userId) {
      formErrors.push("Valid User Id is required");
      setUserIdError(true);
    }

    if (!password) {
      formErrors.push("Valid Password is required");
      setPasswordError(true);
      setPassword("");
    }

    setErrors(formErrors);
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="w-full max-w-full mx-auto mt-20 md:mb-20 p-6 lg:w-5/12">
        <div className="relative z-0 flex flex-col justify-center bg-white border-0 shadow-soft-xl rounded-2xl lg:p-12">
          {/* Error Handling */}
          {errors.length > 0 && (
            <div className="flex p-4 m-4 text-red-500 border-2 rounded-md border-red-500 justify-center">
              <div className="flex flex-col">
                {errors.map((err, id) => (
                  <div className="ml-3 text-sm font-medium" key={id}>
                    {err}
                  </div>
                ))}
              </div>
              <button
                type="button"
                className="ml-auto text-red-500 rounded-lg inline-flex h-8 w-8 justify-center"
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
          )}

          {/* Login Heading */}
          <div className="p-6 mb-0 text-center bg-white border-b-0 rounded-t-2xl text-gray-800 font-bold">
            <h5>Login with</h5>
          </div>

          {/* Google Login Button */}
          <div className="flex justify-center mt-4 mb-8">
            <div className="flex font-bold text-center justify-evenly p-6 lg:gap-x-4 text-gray-800 align-middle transition-all bg-transparent border border-gray-300 border-solid rounded-lg shadow-none cursor-pointer hover:scale-102 leading-pro ease-soft-in tracking-tight-soft hover:bg-primaryOrange-light hover:text-white duration-200">
              <BsGoogle size={24} />
              <h2 className="ml-2">Continue with Google</h2>
            </div>
          </div>

          {/* Login Form */}
          <div className="flex-auto p-4">
            <form role="form">
              <div className="mb-4">
                <input
                  type="text"
                  className={
                    "text-sm block w-full rounded-lg border border-solid border-gray-300 py-2 px-3 font-normal text-gray-700 transition-all focus:outline-none " +
                    (userIdError ? "border-red-500" : "")
                  }
                  placeholder="User Id"
                  value={userId}
                  onChange={(e) => setUserId(e.target.value)}
                />
              </div>

              <div className="mb-4">
                <input
                  type="password"
                  className={
                    "text-sm block w-full rounded-lg border border-solid border-gray-300 py-2 px-3 font-normal text-gray-700 transition-all focus:outline-none " +
                    (passwordError ? "border-red-500" : "")
                  }
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              {/* Login Button */}
              <div className="text-center">
                <button
                  type="button"
                  onClick={submitForm}
                  className="inline-block w-full px-6 py-3 mt-6 mb-2 font-bold text-center text-white uppercase transition-all bg-primaryOrange-light border-0 rounded-lg cursor-pointer hover:bg-primaryOrange-dark"
                >
                  Login
                </button>
              </div>
            </form>

            {/* Registration Link */}
            <p className="mt-4 mb-0 leading-normal text-sm text-center">
              Don't have an account?{" "}
              <NavLink to="/register" className="font-bold text-slate-700">
                Register
              </NavLink>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default LoginBox;
