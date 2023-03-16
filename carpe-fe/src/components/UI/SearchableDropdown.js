import React, { useState, useRef, useEffect } from "react";

function DropDown({
  label,
  searchPlaceholder,
  labelColor = "white",
  heading,
  options,
  selectedValue,
  setSelectedValue,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [filteredOptions, setFilteredOptions] = useState(options);

  const dropdownRef = useRef(undefined);
  const buttonRef = useRef(undefined);

  function searchValue(key) {
    if (key) {
      const filteredOpts = options.filter((opt) => {
        return opt.toLowerCase().includes(key.toLowerCase());
      });
      if (filteredOpts.length == 0) {
        filteredOpts.push("No Record Found");
      }
      setFilteredOptions(filteredOpts);
    } else {
      setFilteredOptions(options);
    }
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      const isDropdownClick =
        dropdownRef.current && dropdownRef.current.contains(event.target);
      const isButtonClick =
        buttonRef.current && buttonRef.current.contains(event.target);

      if (isDropdownClick || isButtonClick) {
        return;
      }

      setFilteredOptions(options);
      setIsOpen(false);
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);

    /* Event cleanup */
    return () => {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("touchstart", handleClickOutside);
    };
  }, [dropdownRef, buttonRef]);

  return (
    <>
      <div className="relative inline-block text-left font-normal w-full md:w-52 justify-center justify-items-center box-border h-10 border border-solid border-gray-300 bg-clip-padding py-2 px-3 appearance-none rounded-lg ">
        <div className="flex justify-between">
          <span className={"text-" + labelColor} htmlFor="menu-button">
            {label}
          </span>
          <button
            ref={buttonRef}
            type="button"
            className={
              "text-sm truncate mr-2 w-full leading-tight justify-center rounded-md border-none bg-transparent  focus:outline-none focus:ring-0  select-none " +
              "text-" +
              labelColor
            }
            id="menu-button"
            aria-expanded="true"
            aria-haspopup="true"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            {selectedValue || heading}
            <svg
              className="absolute  h-5 w-5 right-0 top-2"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>

        <div
          ref={dropdownRef}
          className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-0 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
          tabIndex="-1"
        >
          {isOpen && (
            <div className="" role="none">
              <div class="absolute top-0 p-3">
                <label for="input-group-search" class="sr-only">
                  Search
                </label>
                <div class="relative">
                  <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg
                      class="w-5 h-5 text-ehite dark:text-white"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <input
                    type="text"
                    id="input-group-search"
                    class="block w-full p-2 pl-10 text-sm text-white border-none  rounded-lg bg-gray-800 focus:ring-0 focus:border-0 dark:bg-gray-800 dark:border-gray-500 dark:placeholder-white dark:text-white dark:focus:ring-0 dark:focus:border-0"
                    placeholder={searchPlaceholder}
                    onChange={(e) => {
                      searchValue(e.target.value);
                    }}
                  />
                </div>
              </div>
              <div className="mt-14 pb-6 max-h-48 overflow-y-auto">
                {filteredOptions.map(function (opt, index) {
                  return (
                    <a
                      key={index}
                      href="#"
                      className={
                        "text-gray-700 block px-4 py-2 select-none text-sm border-b-2 border-gray-200 hover:bg-primaryOrange-light hover:text-white mt-1 transition-all " +
                        (selectedValue == opt
                          ? "bg-primaryOrange-light text-white"
                          : "") +
                        ("No Record Found" == opt
                          ? " cursor-default hover:bg-transparent hover:text-gray-700"
                          : "")
                      }
                      role="menuitem"
                      tabIndex="-1"
                      id="menu-item-0"
                      onClick={(e) => {
                        if (e.target.text != "No Record Found") {
                          setSelectedValue(e.target.text);
                          setIsOpen(!isOpen);
                        }
                      }}
                    >
                      {opt}
                    </a>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default DropDown;
