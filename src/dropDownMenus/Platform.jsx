import React, { useState } from 'react';
import ReferEarn from "../images/s-refer e-and earn.jpg"


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
        <div className="fixed top-14 left-63 w-full md:w-[48rem] h-[15rem] bg-white drop-shadow-md  z-[101] cursor-pointer rounded-xl shadow-lg">
            <div className=" flex items-start">
                <div >
                    <span className="text-lg text-gray-700 font-light mx-2 "> FEATURES</span>
                    <ul className="mx-3 grid grid-cols-4 grid-rows-2 w-[45rem] gap-1">
                        <li className="flex text-sm my-2 hover:text-blue-600 underline decoration-white hover:decoration-blue-700 text-black">
                            Cash on delivery
                        </li>
                        <li className=" text-sm my-2 hover:text-blue-600 underline decoration-white hover:decoration-blue-700 text-black"> Serviceable pincodes
                        </li>
                        <li className=" text-sm my-2 hover:text-blue-600 underline decoration-white hover:decoration-blue-700 text-black">API integration
                        </li>
                        <li className=" text-sm my-2 hover:text-blue-600 underline decoration-white hover:decoration-blue-700 text-black">Multiple pickup location
                        </li>
                        <li className="flex text-sm my-2 hover:text-blue-600 underline decoration-white hover:decoration-blue-700 text-black">
                            print shipping label

                        </li>
                        <li className=" text-sm my-2 hover:text-blue-600 underline decoration-white hover:decoration-blue-700 text-black"> Email SMS notifications

                        </li>
                        <li className=" text-sm my-2 hover:text-blue-600 underline decoration-white hover:decoration-blue-700 text-black">Amazon self - ship

                        </li>
                        <li className=" text-xs my-2 hover:text-blue-400 underline decoration-white hover:decoration-blue-200 text-blue-600">All Features

                        </li>
                    </ul>
                </div>
            </div>
            {/* fourth */}
            <div className=" flex  ">
                <img src={ReferEarn} alt="" className=" md:w-44 max-w-52" />
                <div className="text-black font-medium flex justify-center items-start flex-col  hover:text-blue-400 ">Refer & Earn
                    <p className=" text-gray-500 text-xs">Refer to friends and unlocked more exciting rewards</p>
                    <p className=" text-blue-500 text-[0.8em]">Refer Now</p>
                </div>

            </div>
        </div>
    )

}
const Platform = () => {
    return (
        <div>
            <Flyout href="#" FlyoutCont={DropDownContent}>Platform</Flyout>
        </div>
    )
}

export default Platform