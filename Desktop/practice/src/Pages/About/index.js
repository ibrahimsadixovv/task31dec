import React from 'react'
import Navbar from '../../Layouts/Navbar'
import { Helmet } from 'react-helmet'
import Footer from '../../Layouts/Footer'
import MainAbout from '../../Components/AboutComponents/MainAbout'
import Founding from '../../Components/AboutComponents/Founding'
import Team from '../../Components/AboutComponents/Team'

function About() {
  return (
   
    <div> 
       <Helmet>
    <title>About Page</title>
    
   </Helmet>
   <Navbar/>
   <MainAbout/>
   <Founding/>
   <Team/>
   <Footer/>
   </div>
    
  )
}

export default About