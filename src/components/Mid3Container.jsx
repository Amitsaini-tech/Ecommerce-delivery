import React from 'react'
import { motion } from "framer-motion"
import { Link } from 'react-router-dom';
import { TlinkSr } from '../utils/data'

const Mid3Container = () => {
    const rows1 = [
        // "https://www.shahi.co.in/wp-content/uploads/2022/04/shahi-logo.png",
        // "https://www.jaquar.com/Themes/Jaquar2022/Content/images/logo.svg",
        // "https://www.roca.in/documents/20126/100677/logo-roca-cabecera.png/bee21b45-75ab-d941-9eb6-28dc00ec9ca3?t=1557847646888",
        // "https://static.wixstatic.com/media/74f8f3_8e8dda4cfc90407c8838177ee08a356e~mv2.jpeg/v1/fill/w_96,h_99,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/74f8f3_8e8dda4cfc90407c8838177ee08a356e~mv2.jpeg",
        "https://www.safariltd.com/cdn/shop/files/Safari_ltd_Logo_300x100_1_300x100.png?v=1613688328",
        "https://www.nike.sa/on/demandware.static/-/Library-Sites-NikeSharedLibrary/default/dw9c9fd678/images/global/logo.svg",
        "https://images.mamaearth.in/wysiwyg/mamaearth-logo.png?format=webp&fit=scale",
        "https://beardo.in/cdn/shop/files/beardo_logo_white_png_1.png?v=1679998281&width=500",
        "https://www.layers.shop/cdn/shop/files/logo.jpg?v=1673710599",
        "https://www.themancompany.com/cdn/shop/files/logo_08a2688e-7c47-4081-a0e8-942d40f74a6d_250x.png?v=1663137227",

        "https://media6.ppl-media.com/static/purplle/img/purplle-logo-1.svg",
    ]
    return (

        <div className="w-screen md:w-full h-[125rem] md:h-full my-7 ">
            {/* marquee use there */}
            <div className=" h-[20rem] md:h-64 w-full flex justify-center md:justify-between items-center bg-blue-700 rounded-tr-[7rem]">
                <div className="flex flex-col mx-5 md:mx-7 lg:mx-10 px-7 md:px-7 lg:px-10">
                    <p className=" font-medium md:font-semibold text-white ">
                        <span className="text-2xl md:text-3xl lg:text-5xl">From anywhere</span>
                        <p className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-purple-900 text-3xl md:text-2xl lg:text-4xl">to everywhere
                        </p>
                    </p>
                    <div className="text-md md:text-sm lg:text-lg text-white my-1 md:my-2 lg:my-3"><p>Our multi-courier network spread across 24000+ pin codes</p>
                        lets you say yes to every order, even from remote areas.</div>
                    <div className="text-md md:text-md lg:text-lg text-white my-1 md:my-1 lg:my-3">Explore integrations⬈</div>
                </div>
                <div className=" hidden md:flex flex-col justify-end items-end ">
                    <div className="flex relative ">
                        <div className=" Marquee flex flex-col justify-center items-end mx-10 px-10 whitespace-nowrap">
                            <p className="text-center">{
                                rows1.map(el => (
                                    <div className='imageGroup'>
                                        <img src={el} title='Merchants' className="img" /></div>

                                ))
                            }
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className=" mx-3 sm:mx-5 md:mx-10 lg:mx-10 ">
                <p className="my-2 sm:my-3 md:my-5 lg:my-5"> <span className="text-2xl sm:text-3xl md:text-5xl text-gray-700">What makes it all </span>
                    <span className="text-3xl sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-indigo-800">work together</span></p>
                <p><span className="text-2xl sm:text-3xl md:text-4xl text-gray-700">Seamlessly connected components </span></p>
                <p><span className="text-sm sm:text-md md:text-lg text-gray-500">Use one platform to manage everything, including your sales channels, inventory, catalogues, carriers and customer data </span></p>
                <motion.button whileTap={{ scale: 0.75 }} type="button" className=" relative my-2 sm:my-3 md:my-5 drop-shadow-2xl hover:shadow-lg  border border-black text-white text-sm sm:text-md md:text-lg font-medium w-36 sm:w-48 md:w-52 h-10 sm:h-12 md:h-14 bg-indigo-600 rounded-lg hover:bg-white hover:text-indigo-600">
                    Sign up for free
                </motion.button>
            </div><br />
            <div className="flex flex-col md:flex-row justify-evenly items-center capitalize scroll-smooth  ">
                {TlinkSr && TlinkSr.map((n) => (
                    <div key={n.id}
                        className="flex flex-col w-[300px] md:w-[250px] lg:w-[450px] h-[450px] md:h-[410px] lg:h-[480px]  justify-start drop-shadow-sm border p-2 md:p-4 lg:p-6 bg-gradient-to-t from-slate-100 to-blue-50 rounded-md ">
                        <img src={n.imgSrc} alt="" className=" w-[19rem] md:w-[18rem] lg:w-96 h-56" />
                        <p className=" text-xl md:text-lg lg:text-2xl font-semibold bg-clip-text text-transparent bg-indigo-900 mt-5 md:mt-7 ">{n.name}</p>
                        <p className="text-md md:text-md lg:text-xl text-gray-800 mt-3">{n.Decp}</p>
                        <Link to={n.path}><div className="text-blue-600 text-lg my-3 mx-3 mt-5 md:mt-7"> explore⬈</div></Link>
                    </div >
                ))}
            </div>

        </div>
    )
}

export default Mid3Container