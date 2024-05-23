import axios from 'axios';
import React, { useState } from 'react'
import { FaEye } from "react-icons/fa";
import { IoMdEyeOff } from "react-icons/io";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const Login = () => {
    let [pass , setpass] = useState(false)
    let hender = () =>{
        setpass(!pass)
    }
    let navigate = useNavigate()
    let [email , setNumber] = useState()
    let [password , setpassword] = useState()
    const Submit =(e)=>{
        e.preventDefault()
        axios.post('http://localhost:3000/createAccount',{email , password}).then(result => {
        if (result.data === "success") {
            navigate("/")
        } 
    }).catch(err => console.log(err))
    }
  return (
    <section className='bg-[#201f1f]'>
        <div className="container px-[10px] py-[90px] mx-auto">
            <div className="LoGBox border-b-[1px] border-[#fff] mx-auto lg:w-[600px]">
                <h1 className=' flex items-center pl-[20px] text-[#fff] text-[25px] font-font-name w-[100%] h-[60px] bg-[red]'>Login</h1>
                <div className="LogD p-[20px]">
                    <form onSubmit={Submit}>
                    <input onChange={(e)=> setNumber(e.target.value)} type="text" className='w-[100%] bg-[#201f1f] pl-[10px] outline-none border-[2px] text-[#fff] border-[#fff] rounded-l-[10px] h-[50px]' placeholder='Enter You Number / Email'/>
                    <div className="inputPassBox flex mt-[10px]">
                    <input onChange={(e)=> setpassword(e.target.value)} type={pass == true ? "text" : "password"} className='w-[100%] bg-[#201f1f] pl-[10px] outline-none border-[2px] text-[#fff] border-[#fff] rounded-l-[10px] h-[50px]' placeholder='Password'/>
                    <span onClick={hender} className='w-[80px] h-[50px] bg-[red] border-[2px] border-[#fff] border-l-[0px] text-[#fff] text-[20px] flex justify-center items-center'>{pass == true ? <IoMdEyeOff/> :<FaEye/>}</span>
                    </div>
                    <h2 onClick={Submit} className='w-[100%] h-[50px] bg-[red] my-[10px] rounded-[10px] flex justify-center items-center text-[20px] font-font-name text-[#fff]'>Login</h2>
                    </form>
                    <h2 className='w-[100%] h-[50px] bg-[#ffc7c7] my-[10px] rounded-[10px] flex justify-center items-center text-[20px] font-font-name text-[#000]'>Google Login</h2>
                    <span className= ' pt-[20px] flex justify-center text-[18px] text-[#fff]'>Forget Password</span>
                </div>
            </div>
            <div className="Create lg:w-[60%] mx-auto py-[30px] flex justify-center acoount">
            <Link to={'/createAccount'} className='w-[60%] h-[60px] bg-[#328621] my-[10px] rounded-[10px] flex justify-center items-center text-[20px] font-font-name text-[#fff]'>Create New Account</Link>
            </div>
        </div>
    </section>
  )
}

export default Login