import React from 'react'
import Banner from './../../components/banner/index';
import FindTheBus from '../../components/findTheBus';
import SlickSwiper from '../../components/slickSwiper';
import PopularRoute from '../../components/popularRoute';
import Quantity from './../../components/quantity/index';
import PopularDestination from '../../components/popularDestination';

const Home = () => {
  return (
    <>
      <Banner />
      <FindTheBus />
      <SlickSwiper />
      <PopularRoute />
      <Quantity />
      <PopularDestination />
    </>
  )
}

export default Home