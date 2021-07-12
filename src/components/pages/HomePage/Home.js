import React from 'react';
import HeroSection from '../../molecules/HeroSection';
import { schoolInfo , juniorClgInfo ,collegeInfo } from './Data';

function Home() {
  return (
    <>
      <HeroSection {...schoolInfo} />
      <HeroSection {...juniorClgInfo} />
      <HeroSection {...collegeInfo} />
    </>
  );
}

export default Home;
