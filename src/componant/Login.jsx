import React, { useState } from 'react'

const Login = () => {
    let [pass , setpass] = useState(false)
    let hender = () =>{
        setpass(!pass)
    }
  return (
    <section className='bg-[#201f1f]'>
        <div className="container px-[10px] py-[90px] mx-auto">
            <div className="LoGBox mx-auto lg:w-[600px]">
                <h1 className=' flex items-center pl-[20px] text-[#fff] text-[25px] font-font-name w-[100%] h-[60px] bg-[red]'>Login</h1>
                <div className="LogD p-[20px]">
                    <input type="text" className='w-[100%] bg-[#201f1f] pl-[10px] outline-none border-[2px] text-[#fff] border-[#fff] h-[40px]' placeholder='Enter You Number / Email'/>
                    <div className="inputPassBox flex mt-[10px]">
                    <input type={pass == true ? "text" : "password"} className='w-[100%] bg-[#201f1f] pl-[10px] outline-none border-[2px] text-[#fff] border-[#fff] h-[40px]' placeholder='Password'/>
                    <span onClick={hender} className='w-[80px] h-[40px] bg-[red] border-[2px] border-[#fff] text-[#fff] text-[20px] flex justify-center items-center'>Show</span>
                    </div>
                    <h2 className='w-[100%] h-[40px] bg-[red] my-[10px] rounded-[10px] flex justify-center items-center text-[20px] font-font-name text-[#fff]'>Login</h2>
                    <h2 className='w-[100%] h-[40px] bg-[#ffc7c7] my-[10px] rounded-[10px] flex justify-center items-center text-[20px] font-font-name text-[#000]'>Google Login</h2>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Login