import React, { useState, useRef, useEffect } from "react";

function DropDown({
  label,
  labelColor = "white",
  heading,
  options,
  selectedValue,
  setSelectedValue,
}) {
  const [isOpen, setIsOpen] = useState(false);

  const dropdownRef = useRef(undefined);
  const buttonRef = useRef(undefined);

  useEffect(() => {
    const handleClickOutside = (event) => {
      const isDropdownClick =
        dropdownRef.current && dropdownRef.current.contains(event.target);
      const isButtonClick =
        buttonRef.current && buttonRef.current.contains(event.target);

      if (isDropdownClick || isButtonClick) {
        return;
      }

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
      <div className="relative inline-block text-left">
        <div className="flex gap-4 justify-between px-4 py-2">
          <span className={"text-" + labelColor} htmlFor="menu-button">
            {label}
          </span>
          <button
            ref={buttonRef}
            type="button"
            className={
              "inline-flex md:w-72 mr-4 justify-center rounded-md border-none bg-transparent  font-medium focus:outline-none focus:ring-0  select-none " +
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
              className="absolute ml-4 mt-1 h-5 w-5 right-0"
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
            <div className="p-2" role="none">
              {options.map(function (opt, index) {
                return (
                  <a
                    key={index}
                    href="#"
                    className="text-gray-700 block px-4 py-2 select-none text-sm border-b-2 border-gray-200 hover:bg-primaryOrange-light hover:text-white mt-1 transition-all"
                    role="menuitem"
                    tabIndex="-1"
                    id="menu-item-0"
                    onClick={(e) => {
                      setSelectedValue(e.target.text);
                      setIsOpen(!isOpen);
                    }}
                  >
                    {opt}
                  </a>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default DropDown;
