import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Hero from '../Components/Hero'
import Categories from '../Components/Categories'
import Slider from '../Components/Slider'


function Home() {
  return (
    <div>
      <Navbar />
      {/* <Hero /> */}
      <Slider />
      <Categories />
      <Footer />
    </div>
  )
}

export default Home
