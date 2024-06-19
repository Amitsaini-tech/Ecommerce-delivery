import React from 'react'
import HomeContainer from './HomeContainer'
import MidContainer from './MidContainer'
import Mid2Container from './Mid2Container'
import Marquee from './Marquee'
import Footer from './Footer'
import Mid3Container from './Mid3Container'

const MainContainer = () => {
  return (
    <div >
      <div className=" my-1 bg-gray-100 w-full h-full md:h-auto">
        <HomeContainer/>
        <Marquee/>
        <MidContainer/>
        <Mid2Container/>
        <Mid3Container/>
        <Footer/>
        </div>
    </div>
  )
}

export default MainContainer