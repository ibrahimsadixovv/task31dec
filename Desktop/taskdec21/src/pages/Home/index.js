import React from 'react'
import Footer from '../../components/Footer'
import MainSlider from '../../components/HomeComponent/MainSlider/Index'
import SlickSlider from '../../components/HomeComponent/SlickSlider'
import Navbar from '../../components/Navbar'

function Home() {
  return (
    <>
    <Navbar/>
    <MainSlider/>
    <SlickSlider/>
    <Footer/>

    </>
  )
}

export default Home