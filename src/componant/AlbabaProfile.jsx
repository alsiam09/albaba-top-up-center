import React, { useState } from 'react'
import cover from '../assets/cover.jpg'
import logo from '../assets/albabaLogo.png'
import { IoIosArrowDown ,IoIosArrowUp  } from "react-icons/io";
const AlbabaProfile = () => {
  let [SD , setSD] = useState(false)
  let ClickSD =()=>{
    setSD(!SD)
  }
  return (
    <div className="main lg:border-r-[3px] lg:pr-[20px] px-[10px] lg:pl-[0px] border-r-[#fff]">
        <div className="imgBox  relative  h-[280px]">
            <div className="coverImg overflow-hidden h-[200px]">
                <img className='rounded-[10px]' src={cover} alt="" />
            </div>
            <div className="logo w-[180px] bg-[#272727] p-[10px] rounded-[50%] absolute top-[100px] left-[20px]">
                <img className='rounded-[50%]' src={logo} alt="" />
            </div>
        </div>
        <div className="MainBox">
        <div onClick={ClickSD} className=" userDetil my-[10px] rounded-[20px] border-[2px] items-center border-[#fff] w-[100%] h-[50px] flex justify-between px-[30px] bg-[#292929]">
          <h2 className='userName text-[25px] text-[white] font-bold'>alsiam</h2>
          {SD == true ?  <div className="icon text-[25px] text-white"><IoIosArrowUp /></div> :  <div className="icon text-[25px] text-white"><IoIosArrowDown/></div>}
        </div>
        {SD == true && 
           <ul className=" duration-300 ease-in DitelBox w-[100%] py-[30px] px-[30px] bg-[#292929]">
            <li className='lg:text-[25px] text-[22px] font-font-name text-[white]'>User ID :<span className='pl-[10px] font-mono'>000001</span></li>
            <li className='lg:text-[25px] text-[22px] font-font-name text-[white]'>Blance:<span className='pl-[10px] font-mono'>000001</span>৳</li>
           </ul>
        }
        </div>
    </div>
  )
}

export default AlbabaProfile