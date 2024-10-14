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
  const [showRight, setShowRight] = useState(false);
  const totalPages = Math.ceil(totalRecords / recordsPerPage);

  const pageRange = useMemo(() => {
    let pages = [];
    let totalPagesEnd = currentPage + pagesPernav;
    setShowRight(totalPagesEnd < totalPages);
    totalPagesEnd = showRight ? totalPagesEnd : totalPages;
    let cpage =
      currentPage == 1
        ? 1
        : showRight
        ? currentPage - 1
        : totalPages - pagesPernav;

    cpage = cpage < 1 ? 1 : cpage;

    for (; cpage <= totalPagesEnd; cpage++) {
      pages.push(cpage);
    }
    return pages;
  }, [currentPage, showRight]);

  return (
    <div className="flex font-bold mt-20">
      <div>
        {currentPage > 1 && (
          <div className="flex md:gap-4">
            <div className="flex">
              <MdOutlineNavigateBefore
                size={24}
                color="white"
                className="cursor-pointer m-1 md:m-2 transition-all"
                onClick={() => {
                  setCurrentPage(1);
                }}
              />
              <MdOutlineNavigateBefore
                size={24}
                color="white"
                className="cursor-pointer m-1 -ml-6 md:mt-2 transition-all "
                onClick={() => {
                  setCurrentPage(1);
                }}
              />
            </div>
            <AiFillCaretLeft
              size={24}
              color="white"
              className="cursor-pointer m-1 md:m-2"
              onClick={() => {
                setCurrentPage(--currentPage);
              }}
            />
          </div>
        )}
      </div>
      <div>
        <ol className="flex justify-between md:gap-2">
          {pageRange.map((cpage) => {
            return (
              <li
                key={cpage}
                value={cpage}
                href="#"
                className={
                  "text-white block px-2 py-1 md:px-4 md:py-2  select-none hover:bg-primaryOrange-light hover:text-white rounded-full  transition-all cursor-pointer " +
                  (currentPage == cpage
                    ? "bg-primaryOrange-light"
                    : "bg-transparent")
                }
                onClick={(e) => {
                  setCurrentPage(e.target.value);
                }}
              >
                {cpage}
              </li>
            );
          })}
        </ol>
      </div>
      <div>
        {showRight && (
          <div className="flex md:gap-4">
            <AiFillCaretRight
              size={24}
              color="white"
              className="cursor-pointer m-1 md:m-2 transition-all"
              onClick={() => {
                setCurrentPage(++currentPage);
              }}
            />
            <div className="flex">
              <MdOutlineNavigateNext
                size={24}
                color="white"
                className="cursor-pointer m-1  md:m-2 transition-all"
                onClick={() => {
                  setCurrentPage(totalPages);
                }}
              />
              <MdOutlineNavigateNext
                size={24}
                color="white"
                className="cursor-pointer m-1 md:mt-2 transition-all -ml-6"
                onClick={() => {
                  setCurrentPage(totalPages);
                }}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Pagination;
