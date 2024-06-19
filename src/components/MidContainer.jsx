import React from 'react'
import Processdelivery from "../images/Process delivery.webp"

const MidContainer = () => {
  return (
    <div className="  w-screen h-full md:w-full  "><br />
      <p className=" text-sm md:text-mg  bg-clip-text text-transparent bg-gradient-to-br from-cyan-500 to-violet-800 mx-4 md:mx-6">A trusted growth partner</p><br />
      <div className="  capitalize mx-4 md:mx-6">
        <span className="font-semibold  text-xl md:text-2xl lg:text-3xl"> More than 100 ecommerce or business companies are with us,</span><br />
        <span className="bg-clip-text text-transparent bg-gradient-to-br from-amber-400 to-indigo-600 text-2xl md:text-3xl lg:text-4xl"> ensuring customer satisfaction through safe and timely courier delivery,<br /> bringing joy to our customers.</span>
      </div>
      <br />
      <div className="flex flex-col md:flex-row justify-between items-center w-auto mx-2 md:mx-5 lg:mx-10 px-6 md:px-5 lg:px-10">
        <div className=" box-border ">
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 justify-between gap-10 md:gap-20 lg:gap-24 items-start">
            <li className="">
              <p className=" text-3xl md:text-2xl lg:text-4xl font-semibold font-sans">2.5 lakhs+</p>
              <p className="text-lg md:text-sm lg:text-xl  font-normal capitalize text-black relative  after:absolute after:rounded-lg before:content after:w-48 after:md:w-36 after:h-1 after:-bottom-3 after:left-0 after:bg-gradient-to-bl from-cyan-300 to-sky-500 transition-all ease-in-out duration-100">Merchants nationwide</p>

            </li>
            <li className="">
              <p className=" text-3xl md:text-2xl lg:text-4xl font-semibold font-sans">20K</p>
              <p className="text-lg md:text-sm lg:text-xl font-normal capitalize text-black relative  after:absolute after:rounded-lg before:content after:w-48 after:md:w-36 after:h-1 after:-bottom-3 after:left-0 after:bg-gradient-to-bl from-cyan-300 to-sky-500 transition-all ease-in-out duration-100">Warehouse nationwide</p>
            </li>
            <li className="">
              <p className=" text-3xl md:text-2xl lg:text-4xl font-semibold font-sans">25</p>
              <p className="text-lg md:text-md lg:text-xl  font-normal capitalize text-black relative  after:absolute after:rounded-lg before:content after:w-48 after:md:w-36 after:h-1 after:-bottom-3 after:left-0 after:bg-gradient-to-bl from-cyan-300 to-sky-500 transition-all ease-in-out duration-100">Courier branches</p>
            </li>
            <li className="">
              <p className=" text-3xl md:text-2xl lg:text-4xl font-semibold font-sans">1.5k</p>
              <p className="text-lg md:text-md lg:text-xl  font-normal capitalize text-black relative  after:absolute after:rounded-lg before:content after:w-48 after:md:w-36 after:h-1 after:-bottom-3 after:left-0 after:bg-gradient-to-bl from-cyan-300 to-sky-500 transition-all ease-in-out duration-100">Transport vehicles</p>
            </li>
          </ul>
        </div>
        <div>
          <img src={Processdelivery} alt="" className=" hidden md:flex md:w-[30rem] lg:w-[40rem] my-2 md:my-3" />
        </div>
      </div><br />

      <div className="mx-4 md:mx-5 lg:mx-10 capitalize">
        <p className="text-2xl md:text-4xl lg:text-5xl text-gray-700">enhance your customer experience <br /> 
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-lime-300 to-indigo-700"> at every touch point</span></p>
      </div>


    
    </div>
  )
}

export default MidContainer