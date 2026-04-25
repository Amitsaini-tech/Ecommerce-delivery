import React, { useState } from 'react';
import NavbarItem from '../dropDownMenus/NavbarItem'
import Elivery from "../images/Elivery.png";
import { Link } from 'react-router-dom';

const Header = () => {
    const [isMenu, setisMenu] = useState(false);
    const [openProducts, setOpenProducts] = useState(false);
    const [openPlatform, setOpenPlatform] = useState(false);

    const liClass = "text-sm text-gray-800 cursor-pointer hover:bg-blue-50 hover:text-blue-600 transition-all duration-100 ease-in-out px-4 py-2 rounded-md";
    const subLiClass = "text-xs text-gray-600 cursor-pointer hover:text-blue-600 px-4 py-1.5 pl-6";
    const headingClass = "flex items-center justify-between text-sm font-medium text-gray-800 cursor-pointer hover:bg-blue-50 hover:text-blue-600 px-4 py-2 rounded-md transition-all";

    return (
        <header className="fixed w-screen bg-blue-700 z-10">
            {/* Desktop & Tablet */}
            <div className="hidden w-full h-auto my-0 lg:my-1 px-2 lg:px-6 md:h-auto md:flex lg:flex items-center justify-evenly">
                <div className="flex items-center gap-1 lg:gap-2 text-2xl lg:text-3xl capitalize text-white">
                    <img src={Elivery} alt="" className="w-10 lg:w-14 h-10 lg:h-12 my-1 md:mx-0 lg:mx-1" />
                    Elivery
                </div>

                <NavbarItem />

                <div className="flex items-center justify-center my-0 lg:my-1">
                    <Link to={"/Login"}><div className="text-white mx-3 lg:mx-4 text-sm lg:text-base cursor-pointer">Login</div></Link>
                    <Link to={"/Login"}><div className="flex items-center justify-center bg-white text-center text-black w-20 lg:w-24 h-6 lg:h-8 text-sm lg:text-base border border-white rounded-md hover:bg-blue-700 hover:text-white active:ring-white focus:ring-slate-50 cursor-pointer">try for free</div></Link>
                </div>
            </div>

            {/* Mobile */}
            <div className="flex justify-between items-center md:hidden w-full h-full px-4 py-2 relative">
                <div className="flex items-center gap-2 text-xl capitalize text-white">
                    <img src={Elivery} alt="" className="w-8 h-8" />
                    Elivery
                </div>

                {/* Hamburger button */}
                <div
                    className="flex flex-col justify-center items-center gap-[5px] cursor-pointer p-2"
                    onClick={() => setisMenu(!isMenu)}
                >
                    <span className={`block w-6 h-[2px] bg-white transition-all duration-300 ${isMenu ? 'rotate-45 translate-y-[7px]' : ''}`}></span>
                    <span className={`block w-6 h-[2px] bg-white transition-all duration-300 ${isMenu ? 'opacity-0' : ''}`}></span>
                    <span className={`block w-6 h-[2px] bg-white transition-all duration-300 ${isMenu ? '-rotate-45 -translate-y-[7px]' : ''}`}></span>
                </div>

                {/* Mobile Menu Dropdown */}
                {isMenu && (
                    <div className="absolute top-full left-0 w-full bg-white shadow-2xl flex flex-col py-3 z-50 max-h-[85vh] overflow-y-auto">
                        <ul className="flex flex-col gap-1 px-2">
                            <li className={liClass} onClick={() => setisMenu(false)}>Track Orders</li>
                            <Link to={"/Pricing"} onClick={() => setisMenu(false)}><li className={liClass}>Pricing</li></Link>
                            <li className={liClass} onClick={() => setisMenu(false)}>Partners</li>
                            <li className={liClass} onClick={() => setisMenu(false)}>Calculator Shipment</li>

                            {/* Products with sub-menu */}
                            <li>
                                <div className={headingClass} onClick={() => setOpenProducts(!openProducts)}>
                                    <span>Products</span>
                                    <span className="text-lg">{openProducts ? '−' : '+'}</span>
                                </div>
                                {openProducts && (
                                    <ul className="flex flex-col mt-1 mb-1 border-l-2 border-blue-200 ml-4">
                                        <li className={subLiClass} onClick={() => setisMenu(false)}>Ecommerce Shipping</li>
                                        <li className={subLiClass} onClick={() => setisMenu(false)}>Warehouse</li>
                                        <li className={subLiClass} onClick={() => setisMenu(false)}>Ecommerce Shopping</li>
                                        <li className={subLiClass} onClick={() => setisMenu(false)}>B2B Shipping</li>
                                        <li className={subLiClass} onClick={() => setisMenu(false)}>Hyperlocal</li>
                                        <li className={subLiClass} onClick={() => setisMenu(false)}>Intercity Delivery</li>

                                        {/* Platform sub-sub-menu */}
                                        <li>
                                            <div
                                                className="flex items-center justify-between text-xs font-medium text-gray-700 cursor-pointer hover:text-blue-600 px-4 py-1.5 pl-6"
                                                onClick={(e) => { e.stopPropagation(); setOpenPlatform(!openPlatform); }}
                                            >
                                                <span>Platform</span>
                                                <span>{openPlatform ? '−' : '+'}</span>
                                            </div>
                                            {openPlatform && (
                                                <ul className="flex flex-col border-l-2 border-blue-100 ml-8">
                                                    <li className="text-xs text-gray-500 cursor-pointer hover:text-blue-600 px-4 py-1 pl-6" onClick={() => setisMenu(false)}>Cash on Delivery</li>
                                                    <li className="text-xs text-gray-500 cursor-pointer hover:text-blue-600 px-4 py-1 pl-6" onClick={() => setisMenu(false)}>Multiple Pick Up Point</li>
                                                    <li className="text-xs text-gray-500 cursor-pointer hover:text-blue-600 px-4 py-1 pl-6" onClick={() => setisMenu(false)}>Email & SMS Notification</li>
                                                </ul>
                                            )}
                                        </li>
                                    </ul>
                                )}
                            </li>

                            <li className={liClass} onClick={() => setisMenu(false)}>Careers</li>
                            <li className={liClass} onClick={() => setisMenu(false)}>Help Center</li>

                            {/* Login / Try for free */}
                            <li className="mt-3 px-2 flex flex-col gap-2">
                                <Link to={"/Login"} onClick={() => setisMenu(false)}>
                                    <div className="w-full text-center text-blue-600 border border-blue-600 rounded-md py-2 text-sm font-medium hover:bg-blue-600 hover:text-white transition-all">Login</div>
                                </Link>
                                <Link to={"/Login"} onClick={() => setisMenu(false)}>
                                    <div className="w-full text-center bg-blue-600 text-white rounded-md py-2 text-sm font-medium hover:bg-blue-700 transition-all">Try for free</div>
                                </Link>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </header>
    )
}



export default Header