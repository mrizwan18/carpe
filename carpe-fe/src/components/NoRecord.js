import React from "react";

function NoRecord() {
  return (
    <div className="flex flex-col mt-20 pb-8 items-center justify-items-center text-center text-white">
      <img
        src="/NRF.png"
        alt="No records found"
        className="object-cover object-center rounded-lg max-h-96 ml-12"
      />
      <h1 className="text-2xl">No records found against specified criteria.</h1>
      <h3 className="text-primaryOrange-light">
        Please select different filters to fetch results.
      </h3>
    </div>
  );
}

export default NoRecord;
