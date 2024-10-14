import React, { useState } from "react";
import DropDown from "../UI/DropDown";
import { AiFillCloseCircle } from "react-icons/ai";

export default function Filters({ openFilter, setOpenFilter }) {
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [timein, setTimein] = useState("");
  const [timeout, setTimeout] = useState("");
  const [cost, setCost] = useState("");

  function resetFilters() {
    setDestination("");
    setPickup("");
    setTimein("");
    setTimeout("");
    setCost("");
  }

  return (
    <div
      className={
        "fixed top-0 right-0 p-4 w-screen md:w-[40%] lg:w-1/3 h-screen bg-gray-800 z-50 ease-in-out duration-300 transform " +
        (openFilter ? "translate-x-0" : "translate-x-full")
      }
    >
      <AiFillCloseCircle
        color="white"
        size={28}
        className="absolute right-4 top-4 cursor-pointer"
        onClick={() => {
          setOpenFilter(!openFilter);
        }}
      />
      <div className="flex flex-col space-y-4 m-4 mt-8 min-w-full">
        <DropDown
          label={"Pickup Location:"}
          heading={"Select from popular areas"}
          options={[
            "DHA Phase 7",
            "Model Town C Block",
            "Gulberg 1",
            "Sanda",
            "Bahria Town",
          ]}
          selectedValue={pickup}
          setSelectedValue={setPickup}
        />
        <DropDown
          label={"Destination Location:"}
          heading={"Select from popular areas"}
          options={[
            "DHA Phase 7",
            "Model Town C Block",
            "Gulberg 1",
            "Sanda",
            "Bahria Town",
          ]}
          selectedValue={destination}
          setSelectedValue={setDestination}
        />

        <DropDown
          label={"Timein:"}
          heading={"Select from popular timein"}
          options={[
            "8:00 A.M.",
            "8:30 A.M.",
            "9:00 A.M.",
            "9:30 A.M.",
            "10:00 A.M.",
          ]}
          selectedValue={timein}
          setSelectedValue={setTimein}
        />

        <DropDown
          label={"Timeout:"}
          heading={"Select from popular timeout"}
          options={[
            "6:00 P.M.",
            "6:30 P.M.",
            "7:00 P.M.",
            "7:30 P.M.",
            "8:00 P.M.",
          ]}
          selectedValue={timeout}
          setSelectedValue={setTimeout}
        />

        <DropDown
          label={"Cost:"}
          heading={"Select from popular cost"}
          options={[
            "less than 2000",
            "less than 2500",
            "less than 3000",
            "less than 3500",
            "less than 4000",
          ]}
          selectedValue={cost}
          setSelectedValue={setCost}
        />
        <button
          className="bg-primaryOrange-light hover:bg-primaryOrange-dark text-white py-2 px-4 rounded"
          onClick={() => {
            setOpenFilter(false); // Closes the filter on apply
          }}
        >
          Apply
        </button>

        <button
          className="bg-white text-primaryOrange-light py-2 px-4 rounded"
          onClick={() => {
            resetFilters();
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
}
