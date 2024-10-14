import React, { useState } from "react";
import Pool from "../components/UI/Pool";
import Pagination from "./UI/Pagination";
import { useSelector } from "react-redux";
import { selectPools } from "../store/poolSlice";

function HomepagePools() {
  const [currentPage, setCurrentPage] = useState(1);
  const pools = useSelector(selectPools); // Get pools from the Redux store

  // Calculate the pools to display based on the current page
  const recordsPerPage = Number(process.env.REACT_APP_RECORDS_PER_PAGE) || 4; // Default to 4 per page if not set
  const startIdx = (currentPage - 1) * recordsPerPage;
  const selectedPools = pools.slice(startIdx, startIdx + recordsPerPage);

  return (
    <div className="flex flex-col w-3/4 mx-auto mt-20 pb-8 items-center justify-items-center">
      <div className="grid grid-cols-1 gap-4 gap-y-24 md:grid-cols-3">
        {selectedPools.map((pool) => (
          <Pool
            key={pool.id}
            image={pool.image}
            altImageText={pool.altImageText}
            tag={pool.tag}
            tagColor={pool.tagColor}
            headerText={pool.headerText}
            title={pool.title}
            mapLink={pool.mapLink}
            address={pool.address}
            timein={pool.timein}
            timeout={pool.timeout}
            poolId={pool.poolId}
          />
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        recordsPerPage={recordsPerPage}
        setCurrentPage={setCurrentPage}
        totalRecords={pools.length} // Use total pool count from the store
        pagesPernav={Number(process.env.REACT_APP_PAGES_PER_NAV) || 5} // Default to 5 pages per navigation if not set
      />
    </div>
  );
}

export default HomepagePools;