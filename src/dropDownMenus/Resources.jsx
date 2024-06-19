import React, { useState } from 'react';
import Customer from "../images/Customer stories.webp"

const Flyout = ({ children, href, FlyoutCont }) => {
        const [open, setOpen] = useState(false);
        const ShowFlyout = open && FlyoutCont;
        const [timeoutId, setTimeoutId] = useState(null);

        const HandleOpenMenu = () => {
                if (timeoutId) {
                        clearTimeout(timeoutId);
                        setTimeoutId(null);
                }
                setOpen(true)
        };
        const HandleCloseMenu = () => {
                const id = setTimeout(() => setOpen(false), 200);
                setTimeoutId(id);
        };
        return (
                <div className="relative w-fit h-fit"
                        onMouseEnter={() => HandleOpenMenu(true)}
                        onMouseLeave={() => HandleCloseMenu(false)}
                >
                        <a href={href} className="relative text-white">
                                {children} {/* Use 'children' to refer to content between component tags */}
                                <span
                                        style={{ transform: ShowFlyout ? "scaleX(1)" : "scaleX(0)" }}
                                        className="absolute -bottom-2 -left-2 -right-2 h-1 origin-left rounded-full bg-gray-700 transition-transform duration-300 ease-in-out" />
                        </a>
                        {ShowFlyout && <FlyoutCont />}
                </div>
        );
};
const DropDownContent = () => {
        return (
                <div className="fixed top-14 right-56 w-full md:w-[29rem] h-[24rem] bg-white drop-shadow-md  z-[101] cursor-pointer rounded-xl shadow-lg">
                        <div className=" flex justify-evenly items-start">
                                <div>
                                        <span className="text-lg text-gray-700 font-light mx-2"> PRODUCT HELP</span>
                                        <ul className="mx-6  grid grid-row-5 grid-cols-1 my-2">
                                                <li className=" text-sm my-2 hover:text-blue-600 underline decoration-white hover:decoration-blue-700 text-black">
                                                        Shipping rate calculator
                                                </li>
                                                <li className=" text-sm my-2 hover:text-blue-600 underline decoration-white hover:decoration-blue-700 text-black">Volumetric weight calculator
                                                </li>
                                                <li className=" text-sm my-2 hover:text-blue-600 underline decoration-white hover:decoration-blue-700 text-black">Knowledge base
                                                </li>
                                                <li className=" text-sm my-2 hover:text-blue-600 underline decoration-white hover:decoration-blue-700 text-black">FAQ's
                                                </li>
                                                <li className=" text-sm my-2 hover:text-blue-600 underline decoration-white hover:decoration-blue-700 text-black">Developers
                                                </li>
                                                
                                        </ul>
                                </div>
                                {/* second */}
                                <div>
                                        <span className="text-lg text-gray-700 font-light mx-2">LEARN</span>
                                        <ul className="mx-6 grid grid-row-5 grid-cols-1 my-2">
                                                <li className=" text-sm my-2 hover:text-blue-600 underline decoration-white hover:decoration-blue-700 text-black">
                                                        Blog
                                                </li>
                                                <li className=" text-sm my-2 hover:text-blue-600 underline decoration-white hover:decoration-blue-700 text-black">Ebook
                                                </li>
                                                <li className=" text-sm my-2 hover:text-blue-600 underline decoration-white hover:decoration-blue-700 text-black">encyclopedia
                                                </li>
                                                <li className=" text-sm my-2 hover:text-blue-600 underline decoration-white hover:decoration-blue-700 text-black">Video and Podcast
                                                </li>
                                                <li className=" text-sm my-2 hover:text-blue-600 underline decoration-white hover:decoration-blue-700 text-black">India D2C report
                                                </li>
                                               
                                        </ul>
                                </div>
                        </div>
                        {/* fourth */}
                        <div className=" flex  ">
                <img src={Customer} alt="" className=" md:w-[8em] max-w-52" />
                <div className="text-black font-medium flex justify-center items-start flex-col  hover:text-blue-400 ml-3 ">Customer Stories
                    <p className=" text-gray-500 text-xs">Discover how Fulfillment enabled sellers to achieve their business goals</p>
                    <p className=" text-blue-500 text-[0.8em]">Know more</p>
                </div>

            </div>
                </div>)

}

// Corrected DropDown component{Maincontent}
const Resources = () => {
        return (
                <div>
                        <Flyout href="#" FlyoutCont={DropDownContent}>Resources</Flyout>
                </div>
        );
};

export default Resources;
