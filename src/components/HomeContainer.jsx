import React from 'react'
import { motion } from "framer-motion"
import Delivery from "../images/Delivery.png"
import background from "../images/bg-home.jpg"


const HomeContainer = () => {

  return (
    <div className="w-full h-full md:h-656 md:w-screen lg:h-screen ">
      <div className="md:flex flex-row justify-between items-start  w-full md:w-screen h-full md:h-screen  ">
        <div
          style={{ backgroundImage: `url(${background})`, }}
          className="flex flex-col justify-center items-start  w-full h-full bg-cover bg-center ">
          <p className=" w-full p-7 text-2xl text-white  backdrop-blur-sm backdrop-brightness-75">
            <span className="text-5xl md:text-6xl p-2 bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-violet-600 -z-0 flex ">Welcome to Elivery</span>
            <br /><br />
            "Swift Solutions, Secure Deliveries: Your Trusted Courier Partner!"
          </p>

          <div className="flex flex-row justify-center items-center md:items-start gap-8 mt-4">
            <motion.button whileTap={{ scale: 0.75 }} type="button" className=" relative left-8 md:left-12 border border-white text-white w-28 md:w-32 h-10  rounded-lg hover:bg-violet-400 active:bg-violet-500 focus:outline-none focus:ring focus:ring-violet-300 text-sm md:text-lg ">GET STARTED
            </motion.button>
            <motion.button whileTap={{ scale: 0.75 }} type="button" className=" relative left-6 md:left-12 border border-black w-28 md:w-32 h-10 bg-gradient-to-br from-amber-300 to-yellow-300 rounded-lg hover:bg-amber-400 active:bg-amber-500 focus:outline-none focus:ring focus:ring-yellow-300 text-sm md:text-lg ">KNOW MORE
            </motion.button>
          </div>
        </div>

        <div className=" hidden md:hidden lg:flex flex-col justify-center items-center w-750 h-full">
          <img src={Delivery} alt="" className="w-full h-full" />
          {/* <p className=" p-7 text-xl"> in the greatest world but i can choose you :  </p> */}
        </div>
      </div>
    </div>
  )
}

export default HomeContainer