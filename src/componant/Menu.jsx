import React from 'react'
import { FaBars } from "react-icons/fa";
const Menu = () => {
  return (
    <section className='bg-[#131313]'>
        <div className="container px-[10px] lg:px-[0px] justify-between flex h-[80px] mx-auto">
            <div className="sitename flex items-center md:justify-start">
                <h1 className='md:text-[40px] text-[25px] text-[white] font-[700]'>albaba top up center</h1>
            </div>
            <div className="menubtn md:text-[40px] text-[30px] flex items-center text-[#fff]">
                <FaBars/>
            </div>
        </div>
    </section>
  )
}

export default Menu