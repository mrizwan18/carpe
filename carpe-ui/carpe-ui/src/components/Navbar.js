import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [isToggle, setIsToggle] = useState(true);

  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <NavLink to="/">
                <svg
                  className="h-8 w-8 text-primaryOrange-light"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 3H21V21H3V3ZM5 5V19H19V5H5ZM7 7H17V17H7V7ZM9 9V15H15V9H9Z"
                    fill="currentColor"
                  />
                </svg>
              </NavLink>
              <span className="text-3xl font-bold px-3">Carpe</span>
            </div>
            <div className="hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8">
              <NavLink
                to="/support"
                className="border-primaryOrange-light text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
              >
                Support
              </NavLink>
            </div>
          </div>
          <div className="sm:hidden flex items-center">
            <button
              type="button"
              className={
                "text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600 "
              }
              aria-label="toggle menu"
              onClick={() => setIsToggle(!isToggle)}
            >
              <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h16v2H4v-2z"
                />
              </svg>
            </button>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center gap-2">
            <NavLink
              to="/login"
              className="bg-primaryOrange-light hover:bg-primaryOrange-light text-white font-semibold py-2 px-4 rounded"
            >
              Login
            </NavLink>
            <NavLink
              to="/register"
              className="bg-primaryOrange-light hover:bg-primaryOrange-light text-white font-semibold py-2 px-4 rounded"
            >
              Signup
            </NavLink>
          </div>
        </div>
      </div>
      <div id="menu" className={"sm:hidden " + (isToggle ? "hidden" : null)}>
        <NavLink
          to="/support"
          className="block px-4 py-2 text-primaryBg hover:bg-primaryOrange-dark focus:bg-primaryOrange-dark  hover:text-white focus:text-white"
        >
          Support
        </NavLink>
        <NavLink
          to="/register"
          className="block px-4 py-2 text-primaryBg hover:bg-primaryOrange-dark focus:bg-primaryOrange-dark  hover:text-white focus:text-white"
        >
          Login
        </NavLink>
        <NavLink
          to="/register"
          className="block px-4 py-2 text-primaryBg hover:bg-primaryOrange-dark focus:bg-primaryOrange-dark hover:text-white focus:text-white"
        >
          Signup
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
