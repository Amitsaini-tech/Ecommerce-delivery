import React from 'react'
import Elivery from "../images/Elivery.png";

const Footer = () => {
    const insta = [
        "https://d2kh7o38xye1vj.cloudfront.net/wp-content/uploads/2023/07/icon1.svg",
        "https://d2kh7o38xye1vj.cloudfront.net/wp-content/uploads/2023/09/twitter-x-logo-black-round-20851.svg",
        "https://d2kh7o38xye1vj.cloudfront.net/wp-content/uploads/2023/07/icon3.svg",
        "https://d2kh7o38xye1vj.cloudfront.net/wp-content/uploads/2023/07/icon4.svg",
        "https://d2kh7o38xye1vj.cloudfront.net/wp-content/uploads/2023/07/icon5.svg",
    ]
    return (
        <div className=" sticky w-screen md:w-full h-full  ">
            <div className="w-full md:w-auto  h-full md:h-auto">
                <div className="flex flex-col md:flex-row justify-center md:justify-between items-center capitalize mx-1 md:mx-2 lg:mx-3">
                    <div className=" w-auto h-48 md:h-52 lg:h-64 flex flex-col items-center text-lg md:text-xs lg:text-xl font-semibold font-serif px-2 md:px-3 lg:px-4 ">
                        <img src={Elivery} className=" w-14 h-12 md:w-12 lg:w-14 md:h-10 lg:h-12" />
                        Elivery Transport Pvt. ltd.
                        <div className=" w-auto  flex flex-col justify-center items-center ">
                            <ul className=" flex flex-col">
                                <li className=" flex">
                                    {insta.map(el => (
                                    <img src={el} alt="" className=" w-8 h-8 mx-1 md:w-6 lg:w-8 md:h-6 lg:h-8" />
                                ))}</li>

                            </ul>
                        </div>

                    </div>

                    <div className=" w-auto  flex  justify-center items-center ">
                        <ul className=" flex flex-col justify-center items-center">
                            <li className=" font-semibold md:text-sm lg:text-lg my-2 ">products</li>
                            <li className="text-sm md:text-[0.6rem] lg:text-sm hover:text-sky-600 my-2 md:my-1">ecommerce shipping</li>
                            <li className="text-sm md:text-[0.65rem]  lg:text-sm hover:text-sky-600 my-2">1day/2day delivery</li>
                            <li className="text-sm md:text-[0.65rem]  lg:text-sm hover:text-sky-600 my-2 md:my-1">hyperlocal</li>
                            <li className="text-sm md:text-[0.65rem] lg:text-sm hover:text-sky-600 my-2 md:my-1">intercity shipping</li>
                            <li className="text-sm md:text-[0.65rem] lg:text-sm hover:text-sky-600 my-2 md:my-1">elivery packaging </li>
                        </ul>
                    </div>
                    <div className="w-auto  flex justify-center items-center">
                        <ul className=" flex flex-col justify-center items-center">
                            <li className="font-semibold md:text-sm lg:text-lg my-2">features</li>
                            <li className="text-sm md:text-[0.65rem] lg:text-sm hover:text-sky-600 my-2 md:my-1 lg:my-2">cash on delivery</li>
                            <li className="text-sm md:text-[0.65rem] lg:text-sm hover:text-sky-600 my-2 md:my-1 lg:my-2">serviceable pincodes</li>
                            <li className="text-sm md:text-[0.65rem] lg:text-sm hover:text-sky-600 my-2 md:my-1 lg:my-2">multiple pickup location </li>
                            <li className="text-sm md:text-[0.65rem] lg:text-sm hover:text-sky-600 my-2 md:my-1 lg:my-2">print shipping labels</li>
                            <li className="text-sm md:text-[0.65rem] lg:text-sm hover:text-sky-600 my-2 md:my-1 lg:my-2">email & sms notifications</li>
                            <li className="text-sm md:text-[0.65rem] lg:text-sm hover:text-sky-600 my-2 md:my-1  lg:my-2">all features</li>
                            <li className=" font-semibold md:text-sm lg:text-lg mt-1 md:mt-14">partner</li>
                            <li className="text-sm md:text-[0.65rem] lg:text-sm hover:text-sky-600 my-2 md:my-1 lg:my-2">carrier</li>
                            <li className="text-sm md:text-[0.65rem] lg:text-sm hover:text-sky-600 my-2 md:my-1 lg:my-2">technology</li>
                            <li className="text-sm md:text-[0.65rem] lg:text-sm hover:text-sky-600 my-2 md:my-1 lg:my-2">become a partner</li>
                        </ul>
                    </div>
                    <div className="w-auto  flex justify-center items-center">
                        <ul className=" flex flex-col justify-center items-center">
                            <li className="font-semibold md:text-sm lg:text-lg my-2">resources</li>
                            <li className="text-sm md:text-[0.65rem] lg:text-sm hover:text-sky-600 my-2 md:my-1 lg:my-2">Shipping Rate Calculator</li>
                            <li className="text-sm md:text-[0.65rem] lg:text-sm hover:text-sky-600 my-2 md:my-1 lg:my-2">Volumetric Weight Calculator</li>
                            <li className="text-sm md:text-[0.65rem] lg:text-sm hover:text-sky-600 my-2 md:my-1 lg:my-2">Knowledge Base </li>
                            <li className="text-sm md:text-[0.65rem] lg:text-sm hover:text-sky-600 my-2 md:my-1 lg:my-2">coupons</li>
                            <li className="text-sm md:text-[0.65rem] lg:text-sm hover:text-sky-600 my-2 md:my-1 lg:my-2">FAQ’s</li>
                            <li className="text-sm md:text-[0.65rem] lg:text-sm hover:text-sky-600 my-2 md:my-1 lg:my-2 ">Developers</li>
                            <li className="text-sm md:text-[0.65rem] lg:text-sm hover:text-sky-600 my-2 md:my-1 lg:my-2 ">blog</li>
                            <li className="text-sm md:text-[0.65rem] lg:text-sm hover:text-sky-600 my-2 md:my-1 lg:my-2">Ebook</li>
                            <li className="text-sm md:text-[0.65rem] lg:text-sm hover:text-sky-600 my-2 md:my-1 lg:my-2">video and podcast</li>
                            <li className="text-sm md:text-[0.65rem] lg:text-sm hover:text-sky-600 my-2 md:my-1 lg:my-2">ecommerce report 2023</li>
                            <li className="text-sm md:text-[0.65rem] lg:text-sm hover:text-sky-600 my-2 md:my-1 lg:my-2">customers stories</li>
                            <li className="text-sm md:text-[0.65rem] lg:text-sm hover:text-sky-600 my-2 md:my-1 lg:my-2">showcase your brand</li>
                        </ul>
                    </div>
                    <div className="w-auto  flex justify-center items-center">
                        <ul className=" flex flex-col justify-center items-center">
                        <li className="font-semibold md:text-sm lg:text-lg my-2">company</li>
                        <li className="text-sm md:text-[0.65rem] lg:text-sm hover:text-sky-600 my-2 md:my-1 lg:my-2">about us </li>
                        <li className="text-sm md:text-[0.65rem] lg:text-sm hover:text-sky-600 my-2 md:my-1 lg:my-2">contact us</li>
                        <li className="text-sm md:text-[0.65rem] lg:text-sm hover:text-sky-600 my-2 md:my-1 lg:my-2">customer</li>
                        <li className="text-sm md:text-[0.65rem] lg:text-sm hover:text-sky-600 my-2 md:my-1 lg:my-2">careers</li>
                        <li className="text-sm md:text-[0.65rem] lg:text-sm hover:text-sky-600 my-2 md:my-1 lg:my-2">company updates</li>

                    </ul>
                    </div>
                  
                </div>
                <div className=" w-full h-20 flex flex-col md:flex-row justify-evenly items-center md:items-end bg-blue-700 capitalize rounded-bl-full rounded-br-full ">
                        <div className="flex text-[1rem] md:text-base px-1 md:px-2 mx-5 md:mx-8 my-2 md:my-3">
                            &copy;2024 Elivery.All right reserved.</div>
                        <div className="flex text-[0.6rem] md:text-base mx-5 md:mx-8 px-1 md:px-2 my-1 md:my-3">
                            <p className="text-white">
                                <span className=" m-3">Privacy policy</span>
                                |
                                <span className="m-3">compliance</span>
                                |
                                <span className="m-2 md:m-3 hidden md:flex ">refund & cancellation policy</span>
                            </p>
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default Footer