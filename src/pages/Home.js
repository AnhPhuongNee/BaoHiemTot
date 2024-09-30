import React from 'react';
import Hero from '../components/Hero';
import PackageInfo from '../components/PackageInfo';
import RegisterForm from '../components/RegisterForm';
import InsuranceCards from '../components/InsuranceCards';

const Home = () => {
  return (
    <div>
      <Hero />
      <InsuranceCards/>
      <PackageInfo />
    </div>
  );
};

export default Home;
