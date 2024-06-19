import React from 'react'
import Footer from '../components/Footer'
import { motion } from "framer-motion"

const Pricing = () => {
  return (
    <div className="w-screen h-full md:w-full md:h-auto ">
      <div className="flex justify-center">
        <div className=" text-center text-[4em] font-medium bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-violet-600">
          Choose a plan
          <br />
          <span className="text-black text-[1.2em] font-semibold">that works best for you </span></div>

      </div>
      <div className="flex flex-row justify-around items-center relative ">
        {/* first */}
        <div className=" p-4 w-[25rem] h-[35rem] rounded-[1.2rem] shadow-lg drop-shadow-lg ">
          <span className=" text-3xl font-medium ">Lite</span>
          <p className="w-[23rem] h-[0.10rem] bg-gray-300 my-2"></p>
          <span className="text-lg my-2">Rate start at</span><br />
          <span className="text-md">Rs. 24/500gms</span>
          <p className=" text-gray-500 my-2"> A free and simplified plan best for social, small and medium e-commerce sellers</p>
          <motion.button whileTap={{ scale: 0.75 }} type="button" className=" relative mt-4 mb-5 drop-shadow-xl hover:shadow-lg  border border-black text-white text-lg font-medium w-[23rem] h-12 bg-indigo-600 rounded-lg hover:bg-white hover:text-indigo-600">
            Create an account
          </motion.button>
          <p className=" text-gray-900 my-2 capitalize">✔  1 Ecommerce channel integration </p>
          <p className=" text-gray-900 my-2 capitalize">✔  Chat, call & email support</p>
          <p className=" text-gray-900 my-2 capitalize">✔  Automated channel order sync </p>
          <p className=" text-gray-900 my-2 capitalize">✔  domestic and international shipping </p>
        </div>
        {/* second */}
        <div className="p-4 w-[25rem] h-[35rem] rounded-[1.2rem] shadow-lg drop-shadow-lg ">
          <span className=" text-3xl font-medium ">Professional</span>
          <p className="w-[23rem] h-[0.10rem] bg-gray-300 my-2"></p>
          <span className="text-lg my-2">Rate start at</span><br />
          <span className="text-md">Rs. 20/500gms</span>
          <p className=" text-gray-500 my-2"> Dynamic plan for sellers who sell on multiple marketplaces and websites</p>
          <motion.button whileTap={{ scale: 0.75 }} type="button" className=" relative mt-4 mb-5 drop-shadow-xl hover:shadow-lg  border border-black text-white text-lg font-medium w-[23rem] h-12 bg-indigo-600 rounded-lg hover:bg-white hover:text-indigo-600">
            Know more
          </motion.button>
          <p className=" text-gray-900 my-2 capitalize">✔  1 Ecommerce channel integration </p>
          <p className=" text-gray-900 my-2 capitalize">✔  priority support</p>
          <p className=" text-gray-900 my-2 capitalize">✔  Automated channel order sync </p>
          <p className=" text-gray-900 my-2 capitalize">✔  domestic and international shipping </p>
          <p className=" text-gray-900 my-2 capitalize">✔  multi channel price & inventory sync </p>
          <p className=" text-gray-900 my-2 capitalize">✔  free NDR call center setup</p>

        </div>
        {/* third */}
        <div className="p-4 w-[25rem] h-[35rem] rounded-[1.2rem] shadow-lg drop-shadow-lg "><span className=" text-3xl font-medium ">Enterprises</span>
          <p className="w-[23rem] h-[0.10rem] bg-gray-300 my-2"></p>
          <span className="text-lg my-2">Customized</span><br />
          <span className="text-md">Shipping solution</span>
          <p className=" text-gray-500 my-2"> Get an exclusive plan tailored to meet your business needs</p>
          <motion.button whileTap={{ scale: 0.75 }} type="button" className=" relative mt-4 mb-5 drop-shadow-xl hover:shadow-lg  border border-black text-white text-lg font-medium w-[23rem] h-12 bg-indigo-600 rounded-lg hover:bg-white hover:text-indigo-600">
            Contact sales 
          </motion.button>
          <p className=" text-gray-900 my-2 capitalize">✔  customized integration </p>
          <p className=" text-gray-900 my-2 capitalize">✔  dedicated account manager</p>
          <p className=" text-gray-900 my-2 capitalize">✔  Automated channel order sync </p>
          <p className=" text-gray-900 my-2 capitalize">✔  domestic and international shipping </p>
          <p className=" text-gray-900 my-2 capitalize">✔  multi channel price & inventory sync </p>
          <p className=" text-gray-900 my-2 capitalize">✔  free NDR call center setup</p>
        </div>
      </div>
      <div className="mt-6"><Footer /></div>

    </div>
  )
}

export default Pricing;