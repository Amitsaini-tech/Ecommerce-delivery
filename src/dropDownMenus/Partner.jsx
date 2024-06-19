import React, { useState } from 'react'
import Partners from "../images/Partners.svg"

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
        <div className="fixed top-14 left-63 w-full md:w-[35rem] h-[13rem] bg-white drop-shadow-md z-[101] cursor-pointer rounded-xl shadow-lg">
            <div className=" flex items-start">
                <div >
                    <span className="text-lg text-gray-700 font-light mx-2 "> OUR PARTNERS</span>
                    <ul className=" mx-4 grid grid-cols-2 w-[33rem]  gap-1">
                        <li className="grid  text-sm my-2 hover:text-blue-600 underline decoration-white hover:decoration-blue-700 text-black">
                            Carrier
                        </li>
                        <li className=" text-sm my-2 hover:text-blue-600 underline decoration-white hover:decoration-blue-700 text-black"> Technology
                        </li>
                    </ul>
                </div>
            </div>
            {/* fourth */}
            <div className=" flex ">
                <img src={Partners} alt="" className=" md:w-[8.5em] max-w-52" />
                <div className="text-black font-medium flex justify-center items-start flex-col  hover:text-blue-400 ">Partner Program
                    <p className=" text-gray-500 text-[0.79em]">Partner with us and unlock exclusive growth opportunities</p>
                    <p className=" text-blue-500 text-[0.8em]">Know more</p>
                </div>
            </div>
        </div>
    )

}
const Partner = () => {
    return (
        <div>
            <Flyout href="#" FlyoutCont={DropDownContent}>Partners</Flyout>
        </div>
    )
}

export default Partner