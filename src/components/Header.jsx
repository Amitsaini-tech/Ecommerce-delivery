import React, { useState } from 'react';
import NavbarItem from '../dropDownMenus/NavbarItem'
import Elivery from "../images/Elivery.png";

const Header = () => {
    const [isMenu, setisMenu] = useState(false);
    return (
        <header className=" fixed w-screen  bg-blue-700 z-10">
            {/* {desktop & tablet} */}
            <div className=" hidden w-full h-auto my-0 lg:my-1 px-2 lg:px-6 md:h-auto  md:flex lg:flex items-center justify-evenly ">
                <div className="flex items-center gap-1 lg:gap-2 text-2xl lg:text-3xl capitalize">
                    <img src={Elivery} alt="" className=" w-10 lg:w-14 h-10 lg:h-12 my-1 md:mx-0 lg:mx-1" />
                    Elivery
                </div>

                <NavbarItem />

                <div className="flex items-center justify-center my-0 lg:my-1 ">
                    {/* <SearchBar /> */}
                    <div className="text-white mx-3 lg:mx-4 text-sm lg:text-base cursor-pointer">Login</div>
                    <div className="flex items-center justify-center bg-white text-center text-black w-20 lg:w-24 h-6 lg:h-8 text-sm lg:text-base border border-white rounded-md hover:bg-blue-700 hover:text-white active:ring-white focus:ring-slate-50 cursor-pointer">try for free</div>
                </div>

            </div>
            {/* mobile */}
            <div className=" flex  justify-between items-center md:hidden w-full h-full">

                <div className="flex items-center gap-2 text-3xl capitalize">
                    <img src={Elivery} alt="" className=" w-10 md:w-12 h-8 md:h-10" />
                    Elivery
                </div>
                <div className=""   
                >
                    <p className="w-[1.5rem] h-[0.07rem] bg-gray-300 m-1 "></p>
                    <p className="w-[1.5rem] h-[0.07rem] bg-gray-300 m-1 my-1"></p>
                    <p className="w-[1.5rem] h-[0.07rem] bg-gray-300 m-1"></p>

                    {isMenu && (
                    <div className=" w-40 bg-gray-50 shadow-xl rounded-lg absolute top-12 right-0 flex flex-col">
                        <ul className="flex flex-col  gap-5 ">
                            <li className="text-base text-black cursor-pointer hover:bg-slate-200 transition-all duration-100 ease-in-out" onClick={() => setisMenu(false)}>
                                 Home</li>
                            <li className="text-base text-black cursor-pointer hover:bg-slate-200 transition-all duration-100 ease-in-out" onClick={() => setisMenu(false)}>Menu</li>
                            <li className="text-base text-black cursor-pointer hover:bg-slate-200 transition-all duration-100 ease-in-out" onClick={() => setisMenu(false)}>About Us</li>
                            <li className="text-base text-black cursor-pointer hover:bg-slate-200 transition-all duration-100 ease-in-out" onClick={() => setisMenu(false)}>Service</li>
                        </ul>
                    </div>)}

                </div>

            </div>
        </header>
    )
}



export default Header