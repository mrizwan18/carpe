import React, { useState, useMemo } from "react";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
import { MdOutlineNavigateNext, MdOutlineNavigateBefore } from "react-icons/md";

function Pagination({
  currentPage,
  setCurrentPage,
  recordsPerPage,
  totalRecords,
  pagesPernav,
}) {
  const totalPages = Math.ceil(totalRecords / recordsPerPage);
  const [showRight, setShowRight] = useState(currentPage < totalPages);

  const pageRange = useMemo(() => {
    let pages = [];
    const startPage = Math.max(1, currentPage);
    let endPage = Math.min(startPage + pagesPernav - 1, totalPages);

    setShowRight(endPage < totalPages);

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }
    return pages;
  }, [currentPage, totalPages, pagesPernav]);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="flex justify-center items-center font-bold mt-10">
      {/* Previous Button */}
      <div className="flex items-center">
        {currentPage > 1 && (
          <>
            <MdOutlineNavigateBefore
              size={24}
              color="white"
              className="cursor-pointer m-1 transition-all"
              onClick={() => setCurrentPage(1)} // Go to first page
            />
            <AiFillCaretLeft
              size={24}
              color="white"
              className="cursor-pointer m-1 transition-all"
              onClick={handlePreviousPage} // Go to previous page
            />
          </>
        )}
      </div>

      {/* Page Numbers */}
      <div className="flex space-x-2">
        {pageRange.map((page) => (
          <span
            key={page}
            className={`text-white px-4 py-2 rounded-full cursor-pointer transition-all ${
              currentPage === page
                ? "bg-primaryOrange-light text-white"
                : "bg-transparent hover:bg-primaryOrange-light"
            }`}
            onClick={() => setCurrentPage(page)}
          >
            {page}
          </span>
        ))}
      </div>

      {/* Next Button */}
      <div className="flex items-center">
        {showRight && (
          <>
            <AiFillCaretRight
              size={24}
              color="white"
              className="cursor-pointer m-1 transition-all"
              onClick={handleNextPage} // Go to next page
            />
            <MdOutlineNavigateNext
              size={24}
              color="white"
              className="cursor-pointer m-1 transition-all"
              onClick={() => setCurrentPage(totalPages)} // Go to last page
            />
          </>
        )}
      </div>
    </div>
  );
}

export default Pagination;
