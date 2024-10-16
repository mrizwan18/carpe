import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilters, setPickup, setDestination, setTimein, setTimeout, setCost, resetFilters } from '../../store/filtersSlice';
import DropDown from '../UI/DropDown';
import { AiFillCloseCircle } from 'react-icons/ai';
import axios from 'axios'; // For making API calls

export default function Filters({ openFilter, setOpenFilter }) {
  const dispatch = useDispatch();
  const filters = useSelector(selectFilters);

  const applyFilters = () => {
    axios.post('https://jsonplaceholder.typicode.com/posts', filters)
      .then(response => {
        console.log('API response:', response.data);
        setOpenFilter(false);
      })
      .catch(error => {
        console.error('Error in API call:', error);
      });
  };

  return (
    <div
      className={
        "fixed inset-0 flex justify-end p-4 bg-gray-800 bg-opacity-90 z-50 ease-in-out duration-300 transform " +
        (openFilter ? "translate-x-0" : "translate-x-full")
      }
    >
      <div className="w-full md:w-[40%] lg:w-1/3 h-screen bg-gray-800 p-6 relative overflow-y-auto">
        {/* Close Icon */}
        <AiFillCloseCircle
          color="white"
          size={32}
          className="absolute top-6 right-6 cursor-pointer"
          onClick={() => setOpenFilter(false)}
        />

        {/* Filter Form */}
        <div className="flex flex-col space-y-6 mt-8">
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
            selectedValue={filters.pickup}
            setSelectedValue={(value) => dispatch(setPickup(value))}
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
            selectedValue={filters.destination}
            setSelectedValue={(value) => dispatch(setDestination(value))}
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
            selectedValue={filters.timein}
            setSelectedValue={(value) => dispatch(setTimein(value))}
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
            selectedValue={filters.timeout}
            setSelectedValue={(value) => dispatch(setTimeout(value))}
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
            selectedValue={filters.cost}
            setSelectedValue={(value) => dispatch(setCost(value))}
          />

          {/* Apply Button */}
          <button
            className="bg-primaryOrange-light hover:bg-primaryOrange-dark text-white py-2 px-4 rounded"
            onClick={applyFilters} // Call API with filters
          >
            Apply
          </button>

          {/* Reset Button */}
          <button
            className="bg-white text-primaryOrange-light py-2 px-4 rounded"
            onClick={() => dispatch(resetFilters())} // Reset filters
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}
