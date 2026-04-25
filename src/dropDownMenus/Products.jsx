import React, { useState } from 'react';
import { Link } from 'react-router-dom';

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
            {ShowFlyout && <FlyoutCont/>}
        </div>
    );
};

const liClass = "text-sm my-2 hover:text-blue-600 underline decoration-white hover:decoration-blue-700 text-black";
const subText = "text-[11px] text-gray-400";

const DropDownContent = () => {
    return(
    <div className="fixed top-14 left-36 w-full md:w-[55rem] h-[21rem] bg-white drop-shadow-md z-[101] cursor-pointer rounded-xl shadow-lg">
    <div className="flex flex-row justify-between items-start p-3">
            <div>
                    <span className="text-lg text-gray-700 font-light mx-2"> SHIPPING</span>
                    <ul className="mx-6">
                            <Link to="/products/ecommerce-shipping"><li className={liClass}>ecommerce Shipping<p className={subText}>Automated shipping - faster, cheaper</p></li></Link>
                            <Link to="/products/b2b-shipping"><li className={liClass}>B2B & Bulk shipping<p className={subText}>Reached 220+ countries and territories</p></li></Link>
                            <Link to="/products/hyperlocal"><li className={liClass}>hyperlocal<p className={subText}>Low cost cargo shipping across india</p></li></Link>
                            <Link to="/products/intercity-delivery"><li className={liClass}>inter-city delivery<p className={subText}>Speedy intercity deliveries within hours</p></li></Link>
                    </ul>
            </div>
            {/* second */}
            <div>
                    <span className="text-lg text-gray-700 font-light mx-2"> FULFILMENT</span>
                    <ul className="mx-6">
                            <Link to="/products/warehouse"><li className={liClass}>Warehouse<p className={subText}>20k+ Warehouse, closest-to-buyer storage</p></li></Link>
                            <Link to="/products/express-delivery"><li className={liClass}>1day/ 2days delivery<p className={subText}>Assured same/next day order delivery</p></li></Link>
                            <Link to="/products/omnichannel"><li className={liClass}>omnichannel<p className={subText}>end-to-end unified retail enablement solution</p></li></Link>
                    </ul>
            </div>
            {/* third */}
            <div>
                    <span className="text-lg text-gray-700 font-light">GROWTH</span>
                    <ul className="mx-6">
                            <Link to="/products/ecommerce-shipping"><li className={liClass}>ecommerce Shipping<p className={subText}>Faster, Reliable Domestic Deliveries</p></li></Link>
                            <Link to="/products/b2b-shipping"><li className={liClass}>B2B & Bulk shipping<p className={subText}>Lowers Your B2B And Cargo Shipping</p></li></Link>
                            <Link to="/products/hyperlocal"><li className={liClass}>hyperlocal<p className={subText}>Fastest shipping in every location</p></li></Link>
                            <Link to="/products/intercity-delivery"><li className={liClass}>inter-city delivery<p className={subText}>Make Inter-City Deliveries In Hours</p></li></Link>
                    </ul>
            </div>
    </div>
    {/* fourth - DELIGHT */}
    <div className="flex flex-col items-start px-3">
            <span className="text-lg text-gray-700 font-light mx-2 mt-1"> DELIGHT</span>
            <div className="mx-6 flex">
                    <Link to="/products/postship"><div className="text-sm my-2 mr-10 hover:text-blue-600 underline decoration-white hover:decoration-blue-700 text-black">Postship<p className={subText}>Branded post-purchase</p></div></Link>
                    <Link to="/products/returns"><div className="text-sm my-2 mr-10 hover:text-blue-600 underline decoration-white hover:decoration-blue-700 text-black">Returns<p className={subText}>painless returns & refunds</p></div></Link>
                    <Link to="/products/tracking"><div className="text-sm my-2 mr-10 hover:text-blue-600 underline decoration-white hover:decoration-blue-700 text-black">Tracking<p className={subText}>Real-time shipment tracking</p></div></Link>
                    <Link to="/products/trends"><div className="text-sm my-2 mr-10 hover:text-blue-600 underline decoration-white hover:decoration-blue-700 text-black">Trends<p className={subText}>Data platform for indian</p></div></Link>
            </div>
    </div>
</div>)
}

const DropDown = () => {
    return (
        <div>
            <Flyout href="#" FlyoutCont={DropDownContent}>Products</Flyout>
        </div>
    );
};

export default DropDown;
