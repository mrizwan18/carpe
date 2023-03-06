import React, { useState } from "react";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";

function Pagination({ currentPage, totalPages }) {
  const [startingPage, setStartingPage] = useState(true);

  return (
    <div className="flex w-full">
      <div className="flex justify-between w-1/3 justify-items-center mx-auto">
        <div>
          <AiFillCaretLeft size={24} color="white" />
        </div>
        <div>
          <AiFillCaretRight size={24} color="white" />
        </div>
      </div>
    </div>
  );
}

export default Pagination;
