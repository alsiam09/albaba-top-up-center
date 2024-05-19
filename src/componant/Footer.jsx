import React from 'react'
import { MdCall } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa6";
const Footer = () => {
  return (
    <section className='bg-[#000] py-[50px]'>
        <div className="container mx-auto px-[10px] lg:px-[0px]">
            <div className="suppot">
                <h2 className='font-[bold] text-[#fff] text-[35px] mb-[20px] font-mono'>Suppot</h2>
                <a href="tel:01813904257" >
                <div className="phonNumber border-[2px] py-[5px] md:py-[10px] rounded-[20px] w-[300px] border-[#fff] items-center flex ">
                    <div className="icon text-[#fff]  text-[30px] mx-[20px]"><MdCall /></div>
                    <div className="TimeNum">
                        <span className='text-[12px] text-[#fff] font-[700]'>10:00AM-10.00PM</span>
                        <h2 className='text-[20px] md:text-[25px] text-[#fff] font-[400]'>01813904257</h2>
                    </div>
                </div>
                </a>
                <a href="https://wa.me/message/3RGTSTCX3MO2G1" >
                <div className="phonNumber mt-[10px] border-[2px] py-[5px] md:py-[10px] rounded-[20px] w-[300px] border-[#fff] items-center flex ">
                    <div className="icon text-[#fff]  text-[30px] mx-[20px]"><FaWhatsapp /></div>
                    <div className="TimeNum">
                        <span className='text-[12px] text-[#fff] font-[700]'>10:00AM-10.00PM</span>
                        <h2 className='text-[20px] md:text-[25px] text-[#fff] font-[400]'>01813904257</h2>
                    </div>
                </div>
                </a>
            </div>
        </div>
    </section>
  )
}

export default Footer