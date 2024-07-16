import React, { useState } from 'react'
import { FaEye } from "react-icons/fa";
import { IoMdEyeOff } from "react-icons/io";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { FaBackspace } from "react-icons/fa";
import axios from 'axios'


const CreateAccFrom = () => {


    let [pass , setpass] = useState(false)
    let hender = () =>{
        setpass(!pass)
    }

  return (
    <section className='bg-[#201f1f]'>
    <div className="container px-[10px] py-[90px] mx-auto">
        <div className="LoGBox mx-auto lg:w-[600px]">
            <h1 className=' flex items-center justify-between px-[20px] text-[#fff] text-[25px] font-font-name w-[100%] h-[60px] bg-[#2e5712]'><span> Creat a Account </span><Link to={'/Login'}><FaBackspace/></Link></h1>
            <div className="LogD p-[20px]">
                <from  >
                <input type="text" className='w-[100%] bg-[#201f1f] pl-[10px] outline-none border-[2px] text-[#fff] border-[#fff] rounded-l-[10px] h-[50px] ' placeholder='Name'/>
                <input    type="text" className='w-[100%] bg-[#201f1f] pl-[10px] outline-none border-[2px] text-[#fff] border-[#fff] rounded-l-[10px] h-[50px] mt-[10px]' placeholder='Phone Number'/>
                <input    type="text" className='w-[100%] bg-[#201f1f] pl-[10px] outline-none border-[2px] text-[#fff] border-[#fff] rounded-l-[10px] h-[50px] mt-[10px]' placeholder='Email'/>
                <div className="inputPassBox flex mt-[10px]">
                <input    type={pass == true ? "text" : "password"} className='w-[100%] bg-[#201f1f] pl-[10px] outline-none border-[2px] text-[#fff] border-[#fff] rounded-l-[10px] h-[50px]' placeholder='Password'/>
                <span onClick={hender} className='w-[80px] h-[50px] bg-[#2e5712] border-[2px] border-[#fff] border-l-[0px] text-[#fff] text-[20px] flex justify-center items-center'>{pass == true ? <IoMdEyeOff/> :<FaEye/>}</span>
                </div>
                <div className="inputPassBox flex mt-[10px]">
                <input type={pass == true ? "text" : "password"} className='w-[100%] bg-[#201f1f] pl-[10px] outline-none border-[2px] text-[#fff] border-[#fff] rounded-l-[10px] h-[50px]' placeholder='Password'/>
                <span className='w-[80px] h-[50px] bg-[#2e5712] border-[2px] border-[#fff] border-l-[0px] text-[#fff] text-[20px] flex justify-center items-center'>{pass == true ? <IoMdEyeOff/> :<FaEye/>}</span>
                </div>
                <button  type='submit' className='w-[100%] h-[50px] bg-[#2e5712] my-[10px] rounded-[10px] flex justify-center items-center text-[20px] font-font-name text-[#fff]'>Login</button>
                </from>
                <h2 className='w-[100%] h-[50px] bg-[#d0f8b5] my-[10px] rounded-[10px] flex justify-center items-center text-[20px] font-font-name text-[#000]'>Google Login</h2>
            </div>
        </div>    
    </div>
</section>
  )
}

export default CreateAccFrom