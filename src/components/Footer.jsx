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
            <div className="w-full h-full md:h-auto pt-8 pb-12">
                <div className="flex flex-col md:flex-row justify-center md:justify-around items-center md:items-start capitalize mx-4 md:mx-8 lg:mx-12 gap-10 md:gap-4">
                    {/* Brand Section */}
                    <div className="flex flex-col items-center md:items-start text-lg md:text-sm lg:text-xl font-semibold font-serif w-full md:w-1/5">
                        <img src={Elivery} className="w-16 h-14 md:w-12 lg:w-16 md:h-10 lg:h-14 mb-3" alt="Elivery Logo" />
                        <span className="text-center md:text-left">Elivery Transport Pvt. ltd.</span>
                        <div className="mt-4 flex gap-3">
                            {insta.map((el, idx) => (
                                <img key={idx} src={el} alt="social-icon" className="w-8 h-8 md:w-6 lg:w-8 md:h-6 lg:h-8 hover:scale-110 transition-transform cursor-pointer" />
                            ))}
                        </div>
                    </div>

                    {/* Products Section */}
                    <div className="flex flex-col items-center md:items-start w-full md:w-1/6">
                        <h3 className="font-semibold text-lg md:text-base lg:text-xl mb-4">products</h3>
                        <ul className="flex flex-col items-center md:items-start space-y-2 text-gray-700">
                            <li className="text-sm md:text-xs lg:text-sm hover:text-sky-600 cursor-pointer">ecommerce shipping</li>
                            <li className="text-sm md:text-xs lg:text-sm hover:text-sky-600 cursor-pointer">1day/2day delivery</li>
                            <li className="text-sm md:text-xs lg:text-sm hover:text-sky-600 cursor-pointer">hyperlocal</li>
                            <li className="text-sm md:text-xs lg:text-sm hover:text-sky-600 cursor-pointer">intercity shipping</li>
                            <li className="text-sm md:text-xs lg:text-sm hover:text-sky-600 cursor-pointer">elivery packaging</li>
                        </ul>
                    </div>

                    {/* Features Section */}
                    <div className="flex flex-col items-center md:items-start w-full md:w-1/6">
                        <h3 className="font-semibold text-lg md:text-base lg:text-xl mb-4">features</h3>
                        <ul className="flex flex-col items-center md:items-start space-y-2 text-gray-700">
                            <li className="text-sm md:text-xs lg:text-sm hover:text-sky-600 cursor-pointer">cash on delivery</li>
                            <li className="text-sm md:text-xs lg:text-sm hover:text-sky-600 cursor-pointer">serviceable pincodes</li>
                            <li className="text-sm md:text-xs lg:text-sm hover:text-sky-600 cursor-pointer">multiple pickup location</li>
                            <li className="text-sm md:text-xs lg:text-sm hover:text-sky-600 cursor-pointer">print shipping labels</li>
                            <li className="text-sm md:text-xs lg:text-sm hover:text-sky-600 cursor-pointer">email & sms notifications</li>
                            <li className="text-sm md:text-xs lg:text-sm hover:text-sky-600 cursor-pointer text-blue-500 font-medium">all features ⬈</li>
                        </ul>
                        <h3 className="font-semibold text-lg md:text-base lg:text-xl mt-6 mb-4">partner</h3>
                        <ul className="flex flex-col items-center md:items-start space-y-2 text-gray-700">
                            <li className="text-sm md:text-xs lg:text-sm hover:text-sky-600 cursor-pointer">carrier</li>
                            <li className="text-sm md:text-xs lg:text-sm hover:text-sky-600 cursor-pointer">technology</li>
                            <li className="text-sm md:text-xs lg:text-sm hover:text-sky-600 cursor-pointer">become a partner</li>
                        </ul>
                    </div>

                    {/* Resources Section */}
                    <div className="flex flex-col items-center md:items-start w-full md:w-1/6">
                        <h3 className="font-semibold text-lg md:text-base lg:text-xl mb-4">resources</h3>
                        <ul className="flex flex-col items-center md:items-start space-y-2 text-gray-700">
                            <li className="text-sm md:text-xs lg:text-sm hover:text-sky-600 cursor-pointer">Shipping Rate Calculator</li>
                            <li className="text-sm md:text-xs lg:text-sm hover:text-sky-600 cursor-pointer">Volumetric Weight Calculator</li>
                            <li className="text-sm md:text-xs lg:text-sm hover:text-sky-600 cursor-pointer">Knowledge Base</li>
                            <li className="text-sm md:text-xs lg:text-sm hover:text-sky-600 cursor-pointer">coupons</li>
                            <li className="text-sm md:text-xs lg:text-sm hover:text-sky-600 cursor-pointer">FAQ’s</li>
                            <li className="text-sm md:text-xs lg:text-sm hover:text-sky-600 cursor-pointer">Developers</li>
                            <li className="text-sm md:text-xs lg:text-sm hover:text-sky-600 cursor-pointer">blog</li>
                            <li className="text-sm md:text-xs lg:text-sm hover:text-sky-600 cursor-pointer">Ebook</li>
                            <li className="text-sm md:text-xs lg:text-sm hover:text-sky-600 cursor-pointer">video and podcast</li>
                            <li className="text-sm md:text-xs lg:text-sm hover:text-sky-600 cursor-pointer">ecommerce report 2023</li>
                            <li className="text-sm md:text-xs lg:text-sm hover:text-sky-600 cursor-pointer">customers stories</li>
                            <li className="text-sm md:text-xs lg:text-sm hover:text-sky-600 cursor-pointer">showcase your brand</li>
                        </ul>
                    </div>

                    {/* Company Section */}
                    <div className="flex flex-col items-center md:items-start w-full md:w-1/6">
                        <h3 className="font-semibold text-lg md:text-base lg:text-xl mb-4">company</h3>
                        <ul className="flex flex-col items-center md:items-start space-y-2 text-gray-700">
                            <li className="text-sm md:text-xs lg:text-sm hover:text-sky-600 cursor-pointer">about us</li>
                            <li className="text-sm md:text-xs lg:text-sm hover:text-sky-600 cursor-pointer">contact us</li>
                            <li className="text-sm md:text-xs lg:text-sm hover:text-sky-600 cursor-pointer">customer</li>
                            <li className="text-sm md:text-xs lg:text-sm hover:text-sky-600 cursor-pointer">careers</li>
                            <li className="text-sm md:text-xs lg:text-sm hover:text-sky-600 cursor-pointer">company updates</li>
                        </ul>
                    </div>
                </div>
                <div className=" w-full min-h-20 py-4 flex flex-col md:flex-row justify-evenly items-center bg-blue-700 capitalize rounded-bl-[3rem] rounded-br-[3rem] text-white">
                        <div className="flex text-[1rem] md:text-base px-1 md:px-2 mx-5 md:mx-8 my-2 md:my-0">
                            &copy;2024 Elivery. All rights reserved.</div>
                        <div className="flex text-[1rem] md:text-base px-1 md:px-2 mx-5 md:mx-8 my-2 md:my-0 text-center">
                            <p className="text-white flex items-center justify-center flex-wrap">
                                <span className="mx-2 md:mx-3">Privacy policy</span>
                                <span className="hidden md:inline">|</span>
                                <span className="mx-2 md:mx-3">compliance</span>
                                <span className="hidden md:inline">|</span>
                                <span className="mx-2 md:mx-3 hidden md:inline">refund & cancellation policy</span>
                            </p>
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default Footer