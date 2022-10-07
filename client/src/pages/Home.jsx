import React from 'react'
import DestinationHome from '../components/HomeSection/Destina/DestinationHome'
import Hero from '../components/HomeSection/Hero'
import HomeAbout from '../components/HomeSection/HomeAbout'
import Popular from '../components/HomeSection/popular/Popular'
import Work from '../components/work/Work'
import '../styles/Home.css'

const Home = () => {
  return (
    <>
      <Hero />
      <HomeAbout />
      <Popular />
      <DestinationHome />
      <Work />
    </>
  )
}

export default Home
