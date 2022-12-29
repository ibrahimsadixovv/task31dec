import React from 'react'
import Navbar from '../../Layouts/Navbar'
import Search from '../../Components/HomeComponents/Search'
import MainPage from '../../Components/HomeComponents/MainPage'
import Quote from '../../Components/HomeComponents/Quote'
import Blog from '../../Components/HomeComponents/Blog'
import BetterWay from '../../Components/HomeComponents/BetterWay'
import Footer from '../../Layouts/Footer'
import { Helmet } from 'react-helmet'



function Home() {
  return (
    
    <div>
<Helmet>
    <title>Home</title>
    
   </Helmet>

      <Navbar/>
    <MainPage/>
    <BetterWay/>
    <Quote/>
    <Blog/>
    <Search/>
    <Footer/>
    
    </div>
  )
}

export default Home