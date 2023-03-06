import React, { useState } from "react";
import DropDown from "../UI/DropDown";
import { AiFillCloseCircle } from "react-icons/ai";

export default function Filters({ openFilter, setOpenFilter }) {
  const [area, setArea] = useState("");
  const [timein, setTimein] = useState("");
  const [timeout, setTimeout] = useState("");
  const [cost, setCost] = useState("");

  function resetFilters() {
    setArea("");
    setTimein("");
    setTimeout("");
    setCost("");
  }

  return (
    <div
      className={
        "fixed flex right-0 top-0 p-4 w-1/3 h-screen bg-gray-800 z-50 justify-center justify-items-center ease-in-out transition-transform duration-300 " +
        (openFilter ? " " : " -right-[60%]")
      }
    >
      <AiFillCloseCircle
        color="white"
        size={24}
        className="absolute left-0 m-4 ml-8 cursor-pointer"
        onClick={() => {
          setOpenFilter(!openFilter);
        }}
      />
      <div className="flex flex-col space-y-4 m-4 mt-8">
        <DropDown
          label={"Area:"}
          heading={"Select from popular areas"}
          options={[
            "DHA Phase 7",
            "Model Town C Block",
            "Gulberg 1",
            "Sanda",
            "Bahria Town",
          ]}
          selectedValue={area}
          setSelectedValue={setArea}
        />

        <DropDown
          label={"Timein:"}
          heading={"Select from popular timein"}
          options={[
            "DHA Phase 7",
            "Model Town C Block",
            "Gulberg 1",
            "Sanda",
            "Bahria Town",
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
          className="bg-primaryOrange-light hover:bg-primaryOrange-light text-white py-2 px-4 rounded"
          onClick={() => {
            setOpenFilter(!openFilter);
          }}
        >
          Apply
        </button>

        <button
          className="bg-white  text-primaryOrange-light py-2 px-4 rounded"
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
