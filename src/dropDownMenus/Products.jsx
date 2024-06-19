import React, { useState } from 'react';


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
            {ShowFlyout && <FlyoutCont/>}
        </div>
    );
};
const DropDownContent = () => {
    return(
    <div className="fixed top-14 left-36 w-full md:w-[55rem] h-[21rem] bg-white drop-shadow-md  z-[101] cursor-pointer rounded-xl shadow-lg">
    <div className=" flex flex-row justify-between items-start">

            <div>
                    <span className="text-lg text-gray-700 font-light mx-2"> SHIPPING</span>
                    <ul className="mx-6">
                            <li className=" text-sm my-2 hover:text-blue-600 underline decoration-white hover:decoration-blue-700 text-black">
                                    ecommerce Shipping
                                    <p className="text-[11px] text-gray-400">Automated shipping - faster, cheaper
                                    </p>
                            </li>
                            <li className=" text-sm my-2 hover:text-blue-600 underline decoration-white hover:decoration-blue-700 text-black">B2B & Bulk shipping
                                    <p className="text-[11px] text-gray-400">Reached 220+ countries and territeries
                                    </p>
                            </li>
                            <li className=" text-sm my-2 hover:text-blue-600 underline decoration-white hover:decoration-blue-700 text-black">hyperlocal
                                    <p className="text-[11px] text-gray-400">Low cost cargo shipping across inida
                                    </p>
                            </li>
                            <li className=" text-sm my-2 hover:text-blue-600 underline decoration-white hover:decoration-blue-700 text-black">inter-city delivery
                                    <p className="text-[11px] text-gray-400">speedy intercity deliveries within hours
                                    </p>
                            </li>
                    </ul>
            </div>
            {/* second */}
            <div>
                    <span className="text-lg text-gray-700 font-light mx-2"> FULFILMENT
                    </span>
                    <ul className="mx-6">
                            <li className=" text-sm my-2 hover:text-blue-600 underline decoration-white hover:decoration-blue-700 text-black">Warehouse
                                    <p className="text-[11px] text-gray-400">20k+ Warehouse, closest-to-buyer storage
                                    </p>
                            </li>
                            <li className=" text-sm my-2 hover:text-blue-600 underline decoration-white hover:decoration-blue-700 text-black">1day/ 2days delivery<p className="text-[11px] text-gray-400">Assured same/next dayo order delivery
                            </p>
                            </li>
                            <li className=" text-sm my-2 hover:text-blue-600 underline decoration-white hover:decoration-blue-700 text-black">omnichannel <p className="text-[11px] text-gray-400">end-to-end unified retail enablement solution
                            </p>
                            </li>

                    </ul>
            </div>
            {/* third */}
            <div>
                    <span className="text-lg text-gray-700 font-light">GROWTH</span>
                    <ul className="mx-6">
                            <li className=" text-sm my-2 hover:text-blue-600 underline decoration-white hover:decoration-blue-700 text-black">ecommerce Shipping <p className="text-[11px] text-gray-400">Faster, Reliable Domestic Deliveries
                            </p></li>
                            <li className=" text-sm my-2 hover:text-blue-600 underline decoration-white hover:decoration-blue-700 text-black">B2B & Bulk shipping <p className="text-[11px] text-gray-400">Lowers Your B2b And Cargo Shipping
                            </p></li>
                            <li className=" text-sm my-2 hover:text-blue-600 underline decoration-white hover:decoration-blue-700 text-black">hyperlocal <p className="text-[11px] text-gray-400">Fastest shipping in every location
                            </p></li>
                            <li className=" text-sm my-2 hover:text-blue-600 underline decoration-white hover:decoration-blue-700 text-black">inter-city delivery <p className="text-[11px] text-gray-400">Make Inter-City Deliveries In Hours
                            </p></li>
                    </ul>
            </div>
    </div>
    {/* fourth */}
    <div className="flex flex-col  items-start">
            <span className="text-lg text-gray-700 font-light mx-2 mt-3"> DELIGHT
            </span>
            <div className="mx-6 flex">
                    <div className=" text-sm my-2 mr-10 hover:text-blue-600  underline decoration-white hover:decoration-blue-700  text-black">Postship
                            <p className="text-[11px] text-gray-400">Branded post-purchase
                            </p>
                    </div>
                    <div className=" text-sm my-2 mr-10 hover:text-blue-600 underline decoration-white hover:decoration-blue-700 text-black">Returns
                            <p className="text-[11px] text-gray-400">painless returns & refunds
                            </p>
                    </div>
                    <div className=" text-sm my-2 mr-10 hover:text-blue-600 underline decoration-white hover:decoration-blue-700 text-black">Tracking
                            <p className="text-[11px] text-gray-400">Real-time shipment tracking
                            </p>
                    </div>
                    <div className=" text-sm my-2 mr-10 hover:text-blue-600 underline decoration-white hover:decoration-blue-700 text-black">Trends
                            <p className="text-[11px] text-gray-400">Data platform for indian
                            </p>
                    </div>

            </div>
    </div>
</div>)
    
}

// Corrected DropDown component{Maincontent}
const DropDown = () => {
    return (
        <div>
            <Flyout href="#" FlyoutCont = {DropDownContent}>Products</Flyout> 
        </div>
    );
};

export default DropDown;
