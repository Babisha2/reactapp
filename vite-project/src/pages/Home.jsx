import React from 'react';;
import Navbar from '../components/Navbar'
import Carousel from '../components/carousel';
import Container from '../components/Container';
import Banner from  '../components/Banner';
import Section from  '../components/Section';
const Home = () => {
  return (
    <div>
      <Navbar/>
      <Carousel/>
      <Container/>
      <Banner/>
      <Section/>
    </div>
  )
}

export default Home
