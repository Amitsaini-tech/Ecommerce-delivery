import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
                                {children}
                                <span
                                        style={{ transform: ShowFlyout ? "scaleX(1)" : "scaleX(0)" }}
                                        className="absolute -bottom-2 -left-2 -right-2 h-1 origin-left rounded-full bg-gray-700 transition-transform duration-300 ease-in-out" />
                        </a>
                        {ShowFlyout && <FlyoutCont />}
                </div>
        );
};

const liClass = "text-sm my-2 hover:text-blue-600 underline decoration-white hover:decoration-blue-700 text-black";

const DropDownContent = () => {
        return (
                <div className="fixed top-14 right-56 w-full md:w-[29rem] h-[24rem] bg-white drop-shadow-md z-[101] cursor-pointer rounded-xl shadow-lg">
                        <div className="flex justify-evenly items-start p-3">
                                {/* Product Help */}
                                <div>
                                        <span className="text-lg text-gray-700 font-light mx-2"> PRODUCT HELP</span>
                                        <ul className="mx-6 grid grid-row-5 grid-cols-1 my-2">
                                                <Link to="/resources/shipping-rate-calculator"><li className={liClass}>Shipping rate calculator</li></Link>
                                                <Link to="/resources/volumetric-weight-calculator"><li className={liClass}>Volumetric weight calculator</li></Link>
                                                <Link to="/resources/knowledge-base"><li className={liClass}>Knowledge base</li></Link>
                                                <Link to="/resources/faqs"><li className={liClass}>FAQ's</li></Link>
                                                <Link to="/resources/developers"><li className={liClass}>Developers</li></Link>
                                        </ul>
                                </div>
                                {/* Learn */}
                                <div>
                                        <span className="text-lg text-gray-700 font-light mx-2">LEARN</span>
                                        <ul className="mx-6 grid grid-row-5 grid-cols-1 my-2">
                                                <Link to="/resources/blog"><li className={liClass}>Blog</li></Link>
                                                <Link to="/resources/ebook"><li className={liClass}>Ebook</li></Link>
                                                <Link to="/resources/encyclopedia"><li className={liClass}>Encyclopedia</li></Link>
                                                <Link to="/resources/video-podcast"><li className={liClass}>Video and Podcast</li></Link>
                                                <Link to="/resources/india-d2c-report"><li className={liClass}>India D2C report</li></Link>
                                        </ul>
                                </div>
                        </div>
                        {/* Customer Stories */}
                        <div className="flex px-3">
                                <img src={Customer} alt="" className="md:w-[8em] max-w-52" />
                                <Link to="/resources/customer-stories">
                                        <div className="text-black font-medium flex justify-center items-start flex-col hover:text-blue-400 ml-3">Customer Stories
                                                <p className="text-gray-500 text-xs">Discover how Fulfillment enabled sellers to achieve their business goals</p>
                                                <p className="text-blue-500 text-[0.8em]">Know more</p>
                                        </div>
                                </Link>
                        </div>
                </div>
        )
}

const Resources = () => {
        return (
                <div>
                        <Flyout href="#" FlyoutCont={DropDownContent}>Resources</Flyout>
                </div>
        );
};

export default Resources;
