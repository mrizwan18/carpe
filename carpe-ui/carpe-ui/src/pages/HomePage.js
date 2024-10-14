import React from 'react';
import Navbar from '../components/Navbar';
import SearchBar from '../components/SearchBar';
import PoolCard from '../components/PoolCard';
import Footer from '../components/Footer';
import { useSelector } from 'react-redux';

const HomePage = () => {
  const pools = useSelector(state => state.pools.pools);

  return (
    <div className="bg-primaryBg text-white min-h-screen">
      <Navbar />
      <SearchBar />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {pools.map(pool => (
          <PoolCard key={pool.id} pool={pool} />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
