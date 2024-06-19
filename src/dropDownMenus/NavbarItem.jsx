import React from 'react'
import DropDown from './Products'
import Platform from './Platform'
import Partner from './Partner'
import Resources from './Resources'
import { Link } from 'react-router-dom'

const NavbarItem = () => {
        return (
                <div className="flex items-center mx-3 lg:mx-5 gap-2 lg:gap-4 text-[13px] md:text-[16px] lg:text-md  text-white ">
                        <DropDown />
                        <Platform />
                        <Partner />
                        <Link to={"/Pricing"}><div>Pricing</div></Link>
                        <div className="">Track Orders</div>
                        <Resources />

                </div>
        )
}

export default NavbarItem