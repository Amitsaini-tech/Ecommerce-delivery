import React from 'react'
import { motion } from "framer-motion"
import { Link } from 'react-router-dom';
import "./MarqueeCss.css";
import TrustBuilding from "../images/trust building.webp";
import customerEngage from "../images/customer engagement.webp"
import Checkout from "../images/Checkout.webp"
import CustomerRetention from "../images/Customer retention.webp"


import { linkSr } from '../utils/data'


const Mid2Container = () => {



    return (
        <div className="w-full h-full  ">
            <div className="mx-4 md:mx-10 my-7 capitalize font-sans">
                <p className="text-2xl md:text-4xl text-gray-700">shipping</p>
                <p className="text-2xl md:text-4xl bg-clip-text text-transparent bg-gradient-to-b from-lime-500 to-indigo-700">keep things simple</p>
            </div><br />
            <div className="flex flex-col md:flex-row justify-evenly items-center capitalize scroll-smooth ">
                {linkSr && linkSr.map((n) => (
                    <motion.div key={n.id}
                        whileHover={{ scale: 1.1 }} className="flex flex-col w-72 md:w-[20rem] lg:w-96 h-76 md:h-96 justify-start drop-shadow-sm border hover:shadow-2xl p-3 md:p-4 bg-gradient-to-t from-slate-100 to-blue-50 rounded-md  my-2 md:mx-2">
                        <img src={n.imgSrc} alt="" className=" w-[15rem] md:w-96 h-[12rem] md:h-56" />
                        <p className="text-md md:text-lg font-semibold ">{n.name}</p>
                        <p className="text-base  text-gray-800">{n.Decp}</p>
                        <Link to={n.path}>
                            <div className="text-blue-600 text-md my-3 mx-2">
                                <span>explore⬈</span>

                            </div>
                        </Link>
                    </motion.div >
                ))}
                
            </div>
            <br />
            <div className=" w-screen md:w-full h-[20rem] md:h-20   flex  justify-center items-center">
                <div className=" h-64 md:h-16 border border-cyan-400 bg-gradient-to-r from-slate-100 to-cyan-300 flex items-center rounded-lg flex-col md:flex-row justify-center">
                    <svg className=" w-12 md:w-14 lg:w-8 h-12 md:h-12 lg:h-12 my-2 flex justify-center items-center md:ml-24 lg:ml-24 ml-2" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 50 50" viewBox="0 0 50 50" id="loudspeaker"><g><polygon fill="#FFF" points="14.079 19.204 14.044 39.889 9.573 42.487 9.609 21.802"></polygon><polygon fill="#D4DBE9" points="9.609 21.802 9.573 42.487 4.391 39.495 4.427 18.811"></polygon><polygon fill="#C4C7CE" points="13.371 18.602 9.609 20.788 4.427 17.796 8.189 15.61"></polygon></g><g><path fill="#E44555" d="M10.98588,27.87754c0.2769,2.8357,0.6232,3.5422,1.90141,5.3257l-1.91331-1.1046L10.98588,27.87754z"></path><path fill="#ED5E72" d="M13.10368,26.65684l-2.1178,1.2209c0.2769,2.8355,0.6232,3.5419,1.90141,5.3256l2.11769-1.2204
						C12.80858,29.98084,13.12548,26.84444,13.10368,26.65684z"></path></g><g><path fill="#384052" d="M3.89608,18.60464l0.0334,1.1533c0,0.3815,0.1335,0.6438,0.3482,0.7728l9.2138,5.3506
					c-0.2195-0.1239-0.34819-0.391-0.353-0.7725l-0.0334-1.1533L3.89608,18.60464z"></path><polygon fill="#4D5772" points="24.451 17.404 15.241 12.052 3.894 18.604 13.104 23.956"></polygon><path fill="#282E3A" d="M13.10368,23.95574l0.0363,1.1548c0.0022,0.7629,0.5399,1.0693,1.2038,0.686l8.9446-5.1641
					c0.66391-0.3833,1.2012-1.3104,1.199-2.0733l-0.0363-1.1548L13.10368,23.95574z"></path></g><g><g><path fill="#384052" d="M12.95028,8.88254c-0.71071-0.4143-1.69451-0.3554-2.77951,0.2707
						c-2.1583,1.245-3.8999,4.2645-3.8928,6.7429c0.00231,1.2333,0.4377,2.0994,1.1391,2.5065l-5.2282-2.9939
						c-0.7014-0.4072-1.1344-1.2732-1.1391-2.5042c-0.0071-2.4783,1.7369-5.4979,3.8951-6.743
						c1.085-0.6284,2.3025-0.5514,3.0133-0.1371L12.95028,8.88254z"></path><path fill="#ED5E72" d="M18.34208,9.98834c-0.9535-0.5558-2.2732-0.4769-3.7287,0.363
						c-2.8953,1.6702-5.2317,5.7209-5.2222,9.0456c0.0032,1.6545,0.5872,2.8163,1.52811,3.3625l-7.01351-4.0163
						c-0.9409-0.5462-1.5218-1.708-1.5282-3.3594c-0.0094-3.3246,2.3301-7.3754,5.2254-9.0457
						c1.4555-0.8429,3.0887-0.7397,4.0422-0.1839L18.34208,9.98834z"></path><path fill="#E44555" d="M14.61318,10.35194c-2.894,1.6709-5.2328,5.7211-5.2234,9.0465
						c0.00951,3.3255,2.36351,4.6663,5.25751,2.9954c2.894-1.6708,5.23219-5.7207,5.22279-9.0461
						C19.86068,10.02224,17.50718,8.68114,14.61318,10.35194z"></path></g><path fill="#E3E6F0" d="M24.67048,39.97634l-11.863-16.3869c-0.4805-0.6698-1.0484-1.2716-1.5921-1.888
				c-0.4999-0.5631-0.7912-1.4173-0.7912-2.5192c-0.0097-2.9512,2.0678-6.548,4.6355-8.0284
				c0.9708-0.5631,2.029-0.6505,2.8541-0.4515c0.7621,0.1844,1.5242,0.3641,2.3008,0.4418l21.9203,2.1163
				C40.97958,13.31874,24.31129,38.85984,24.67048,39.97634z"></path><path fill="#D4DBE9" d="M42.13478,13.26024l-21.9202-2.1163c-0.7766-0.0777-1.5387-0.2572-2.3008-0.4415
				c-0.8251-0.199-1.8833-0.1118-2.8541,0.4515l25.7229,3.3328C41.72348,13.23794,41.93748,13.27024,42.13478,13.26024z"></path><g><path fill="#ED5E72" d="M45.29218,12.89624c-2.2765-1.3251-5.4364-1.1407-8.9167,0.8736
						c-6.9265,3.9948-12.5231,13.6881-12.4988,21.6438c0.0097,3.9509,1.40761,6.7322,3.655,8.0381l-1.796-1.0438
						c-2.2473-1.3057-3.6452-4.087-3.655-8.0379c-0.0242-7.9556,5.5723-17.649,12.4989-21.6437
						c3.4802-2.0144,6.6401-2.1987,8.9166-0.8736L45.29218,12.89624z"></path><path fill="#E44555" d="M36.37318,13.76824c-6.92389,3.9975-12.5194,13.6877-12.4968,21.6437
						c0.0225,7.9561,5.6546,11.164,12.5784,7.1665c6.9239-3.9975,12.518-13.6868,12.4954-21.6429
						C48.92768,12.97944,43.29698,9.77084,36.37318,13.76824z"></path><path fill="#B4BED7" d="M30.82878,43.32754c-3.6758-0.0001-5.9679-3.0342-5.9816-7.9184
						c-0.0216-7.6329,5.3665-16.9638,12.0113-20.8002c1.8012-1.0399,3.5786-1.5896,5.14-1.5896
						c3.6752,0,5.9671,3.0343,5.9809,7.9189c0.0218,7.6328-5.3659,16.9634-12.0099,20.7994
						C34.16798,42.77774,32.39038,43.32754,30.82878,43.32754L30.82878,43.32754z"></path><path fill="#E3E6F0" d="M43.14767,13.13284c1.1804,1.3725,1.8485,3.4532,1.8558,6.0731
							c0.02181,7.6333-5.3659,16.9636-12.0098,20.7996c-1.8016,1.0404-3.5791,1.59-5.1408,1.59
							c-0.4012,0-0.7828-0.0427-1.1499-0.1133c1.0202,1.1863,2.4217,1.8453,4.1258,1.8453c1.5616,0,3.3392-0.55,5.1407-1.5899
							c6.644-3.8361,12.0316-13.1668,12.00981-20.7996C47.96708,16.58654,46.14347,13.70984,43.14767,13.13284z"></path></g><g><path fill="#ED5E72" d="M37.07677,24.46944c-2.0282,1.1847-3.6577,4.0398-3.6392,6.3771
						c0.0184,2.3374,1.6778,3.2715,3.706,2.0868c2.0282-1.1847,3.6573-4.0396,3.6389-6.377
						C40.76398,24.21904,39.10498,23.28474,37.07677,24.46944z"></path><path fill="#E44555" d="M37.09048,26.21194c-1.193,0.6969-2.1516,2.3764-2.1407,3.7513
						c0.0108,1.3749,0.9869,1.9244,2.18,1.2275s2.1513-2.3762,2.14051-3.7511
						C39.25938,26.06474,38.28358,25.51514,37.09048,26.21194z"></path><path fill="#E3E6F0" d="M34.09268,32.85494c-0.4066-0.4437-0.6481-1.1258-0.6551-2.0084
						c-0.0184-2.3374,1.611-5.1924,3.6393-6.3769c0.7801-0.456,1.5042-0.5954,2.1027-0.4646
						c0.2081,0.0062,0.3853,0.0725,0.5263,0.1972l-6.9567-6.3887c-3.3613,3.3506-6.021,7.9755-7.2155,12.5481l8.9899,2.8417
						C34.34748,33.14504,34.20238,33.02744,34.09268,32.85494z"></path></g></g></svg>
                        <span className=" my-2  ml-2 md:ml-2 mr-1 md:mr-8 lg:mr-10  py-1 md:px-2 text-[0.89rem]">
                        Experience Shiprocket in real-time with our live demo. Sign-up not required for demo</span>
                    <motion.button whileTap={{ scale: 0.75 }} type="button" className=" relative  md:my-5 md:mr-24  md:ml-5 drop-shadow-2xl hover:shadow-lg  border border-black text-white text-lg md:text-base font-medium w-52 h-10 md:w-64 bg-indigo-600 rounded-lg hover:bg-white hover:text-indigo-600">Sign up for free
                    </motion.button>
                </div>
            </div>
            <br /><br />
            <div className="flex flex-col md:flex-row justify-evenly items-center">
                <div className="flex flex-col items-start w-[20rem] md:w-[20rem] lg:w-[35rem] h-[30rem] md:h-[32rem] lg:h-[42rem] rounded-[10px] md:rounded-[20px] ">
                    <img src={TrustBuilding} alt="" />
                    <p className="text-2xl font-semibold bg-clip-text text-transparent bg-indigo-900 mt-3 md:mt-5 mx-1 md:mx-3">
                        Trust building
                    </p>
                    <p className="text-lg text-gray-800 mt-1 md:mt-3 mx-1 md:mx-3">
                        Show Shiprocket’s badge of trust throughout your website to boost credibility</p>
                    <div className="text-blue-600 text-lg my-1 md:my-3 mx-1 md:mx-3 "> explore ⬈</div>
                </div>
                <div className="flex flex-col items-start w-[20rem] md:w-[20rem] lg:w-[35rem] h-[30rem] md:h-[32rem] lg:h-[42rem] rounded-[10px] md:rounded-[20px]">
                    <img src={customerEngage} alt="" className=" mt-2 md:mt-10" />
                    <p className="text-2xl font-semibold bg-clip-text text-transparent bg-indigo-900 mt-3 md:mt-5 mx-1 md:mx-3">
                        Customer engagement
                    </p>
                    <p className="text-lg text-gray-800 mt-1 md:mt-3 mx-1 md:mx-3">Automate your marketing campaigns and increase conversions by 40%</p>
                    <div className="text-blue-600 text-lg my-1 md:my-3 mx-1 md:mx-3 "> explore ⬈</div>
                </div>

            </div>
            <div className="flex flex-col md:flex-row justify-evenly items-center">
                <div className="flex flex-col items-start w-[20rem] md:w-[20rem] lg:w-[35rem]  h-[30rem] md:h-[32rem] lg:h-[42rem] rounded-[10px] md:rounded-[20px] ">
                    <img src={Checkout} alt="" />
                    <p className="text-2xl font-semibold bg-clip-text text-transparent bg-indigo-900 mt-3 md:mt-5 mx-1 md:mx-3">
                        Checkout optimisation
                    </p>
                    <p className="text-lg text-gray-800 mt-1 md:mt-3 mx-1 md:mx-3">Speed up checkout by 70% with pre-filled details and intelligent fraud detection</p>
                    <div className="text-blue-600 text-lg my-1 md:my-3 mx-1 md:mx-3 "> explore ⬈</div>
                </div>
                <div className="flex flex-col items-start w-[20rem] md:w-[20rem] lg:w-[35rem] h-[30rem] md:h-[32rem] lg:h-[42rem] rounded-[10px] md:rounded-[20px]">
                    <img src={CustomerRetention} alt="" className=" mt-2 md:mt-10" />
                    <p className="text-2xl font-semibold bg-clip-text text-transparent bg-indigo-900 mt-3 md:mt-5 mx-1 md:mx-3">
                        Customer retention
                    </p>
                    <p className="text-lg text-gray-800 mt-1 md:mt-3 mx-1 md:mx-3">Re-engage with high-potential prospects and increase customer retention by 25%</p>
                    <div className="text-blue-600 text-lg my-1 md:my-3 mx-1 md:mx-3 "> explore ⬈</div>
                </div>

            </div>





        </div>
    )
}

export default Mid2Container