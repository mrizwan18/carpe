import React from 'react';

const PoolCard = ({ pool }) => {
  return (
    <div className="border rounded-lg p-4 shadow-lg bg-primaryBlue-light text-white">
      <img src={pool.image} alt="Pool" className="w-full h-40 object-cover rounded-t-lg" />
      <h3 className="text-xl font-semibold mt-2">{pool.location}</h3>
      <p>{pool.timeIn} - {pool.timeOut}</p>
      <p>Cost: {pool.cost}</p>
    </div>
  );
};

export default PoolCard;
