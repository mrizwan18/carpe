import React from "react";
import { BsPinMapFill } from "react-icons/bs";

function PoolPlaceholder() {
  return (
    <>
      <div className="select-none">
        <div className=""></div>

        <div className="relative px-4 -mt-16  ">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex items-baseline">
              <span
                className={
                  (tagColor ? "bg-" + tagColor : "blue") +
                  " text-white text-xs px-2 inline-block rounded-full  uppercase font-semibold tracking-wide"
                }
              >
                {tag}
              </span>
              <div className="ml-2 text-gray-600 uppercase text-xs font-semibold tracking-wider">
                {headerText}
              </div>
            </div>

            <h4 className="mt-1 text-xl font-semibold uppercase leading-tight truncate">
              {title}
            </h4>

            <div className="flex justify-between mt-1">
              {address}
              <span>
                <BsPinMapFill
                  size={24}
                  onClick={() => {
                    alert(mapLink);
                  }}
                  className="cursor-pointer"
                />
              </span>
            </div>
            <div className="mt-4">{timein}</div>
            <div className="mt-4 py-4">{timeout}</div>
          </div>
          <div className="w-full text-center -mt-7">
            <button
              className="bg-primaryOrange-light hover:bg-primaryOrange-dark text-white px-8 py-4 rounded font-semibold text-bold text-xl"
              onClick={() => {
                alert(poolId);
              }}
            >
              POOL
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default PoolPlaceholder;
