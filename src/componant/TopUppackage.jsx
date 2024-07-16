import React, { useState } from 'react'
import banner from '../assets/cover2.png'
import currency from '../assets/albc.png'
import { FaHandsHelping } from 'react-icons/fa';
const TopUppackage = ({}) => {

let DataPacking = [
    {
        tital: "25 Dimond",
        price: "19",
    },
    {
        tital: "50 Dimond",
        price: "35",
    },
    {
        tital: "115 Dimond",
        price: "75",
    },
    {
        tital: "240 Dimond",
        price: "160",
    },
    {
        tital: "610 Dimond",
        price: "370",
    },
    {
        tital: "1240 Dimond",
        price: "750",
    },
    {
        tital: "2530 Dimond",
        price: "1500",
    },
    {
        tital: "Weekly",
        price: "155",
    },
    {
        tital: "Mountly",
        price: "750",
    },
    {
        tital: "Level up pass",
        price: "155",
    },
]    

let HandlePrice = (item) => {
    setPrice(item.price);
}
const [ Price , setPrice ] = useState('')
  


  return (
    <section className='pt-[80px] pb-[30px py-[20px]] bg-[#201f1f]'>
        <div className="container mx-auto">
            <div className="banner m-[10px]">
                <img className='rounded-[10px] lg:h-[300px] md:h-[200px] h-[150px] w-[100%]' src={banner} alt="" />
            </div>
            <div className="ByeItem flex justify-center">
                <div className="package lg:w-[60%] p-[10px]">
                <ul className=" flex flex-wrap gap-x-2 items-center">
                {DataPacking.map((item)=>(
                      <li onClick={()=>HandlePrice(item)} className='hover:bg-[#fff] my-[5px] py-[20px] cursor-pointer  hover:text-[#000] relative w-[47%] rounded-[5px] lg:w-[32%] h-[30px] border-[white] border-[1px] text-[#fff] flex items-center justify-center text-[18px] font-[600]'><span>{item.tital}</span><span className='text-[red] text-[12px] bg-[#f5f5f5] px-[5px] rounded-[5px] absolute top-[-5px] right-[-5px] '>{item.price}৳</span></li>
                ))}
                </ul>

                <div className="price mt-[20px]">
                    <h2 className=' flex items-center text-[#fff] text-[25px] font-[700]'>Price :<span className=' flex items-center font-[400] text-[#d1d1d1] ml-[10px]'>{Price}<div className="icon ml-[5px]">৳</div></span></h2>
                </div>
                <div className="PlayerID mt-[40px]">
                    <h2 className='text-[#fff] text-[25px] font-font-name'>Your account detail</h2>
                    <div className="input">
                    <input id='Uid' className=' outline-none pl-[10px] py-[7px] rounded-[5px] text-[16px] w-[200px] border-[1px] border-[#fff] text-[#fff] bg-[#201f1f] mb-[10px] block' type="text" placeholder='Enter Your UID'/>
                    <input id='Uid' className=' outline-none pl-[10px] py-[7px] rounded-[5px] text-[16px] w-[200px] border-[1px] border-[#fff] text-[#fff] bg-[#201f1f] block' type="text" placeholder='Account Name'/>
                    </div>
                </div>
                <div className="payItems flex justify-between mt-[30px]">
                    <h2 className='w-[48%] h-[40px] flex justify-center text-[#fff] text-[20px] items-center border-[2px] rounded-[10px] border-[#fff]'>Mobile Bank</h2>
                    <h2 className='w-[48%] h-[40px] flex justify-center text-[#fff] text-[20px] items-center border-[2px] rounded-[10px] border-[#fff]'>Blance <img className='h-[30px] w=[30px]' src={currency} alt="" /></h2>
                </div>
               <a href="https://www.facebook.com/profile.php?id=61558573224947&mibextid=ZbWKwL"> <span className=' rounded-[10px] my-[30px] w-[100%] h-[30px] py-[20px] bg-[red] text-[#fff] text-[20px] font-[500] flex justify-center items-center '>Pay Now</span></a>
                </div>
            </div>
        </div>
    </section>
  )
}

export default TopUppackage