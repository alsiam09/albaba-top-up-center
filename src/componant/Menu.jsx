import React, { useRef, useState } from 'react'
import { FaBars } from "react-icons/fa";
const Menu = () => {
  let [Menu , setMenu ] = useState(false)
  let MenuRef = useRef()
  useState(()=>{
    document.addEventListener("click" , (e)=>{
      if (MenuRef.current.contains(e.target) == true) {
        setMenu(!Menu)        
      } else {
        setMenu(false)
      }
    })
  },[Menu])
  return (
    <section className=' fixed z-[998] top-[0px] left-0 w-[100%] bg-[#131313]'>
        <div className="container px-[10px] lg:px-[0px] justify-between flex h-[80px] mx-auto">
            <div className="sitename flex items-center md:justify-start">
                <h1 className='md:text-[40px] text-[25px] text-[white] font-[700] '>albaba top up center</h1>
            </div>
            <div ref={MenuRef} className="menubtn md:text-[40px] text-[30px] flex items-center text-[#fff]">
                <FaBars />
            </div>
            {Menu ? 
                <div className=' fixed w-[200px] lg:w-[300px]  duration-300 ease-in bg-[#000] h-[100%] top-[0px] right-0'>
                  <ul className='px-[10px] mt-[100px]'>
                  <li className='text-[white] mb-[10px] text-[25px] lg:text-[30px] w-[100%] py-[5px] hover:bg-[#dbdbdb] hover:text-[#000] flex justify-start px-[20px] rounded-[20px] font-font-name'>Home</li>
                  <li className='text-[white] mb-[10px] text-[25px] lg:text-[30px] w-[100%] py-[5px] hover:bg-[#dbdbdb] hover:text-[#000] flex justify-start px-[20px] rounded-[20px] font-font-name'>Account</li>
                  <li className='text-[white] mb-[10px] text-[25px] lg:text-[30px] w-[100%] py-[5px] hover:bg-[#dbdbdb] hover:text-[#000] flex justify-start px-[20px] rounded-[20px] font-font-name'>Order</li>
                  </ul>
                </div> :
                <div className=' fixed w-[200px] lg:w-[300px] bg-[#000] h-[100%] duration-300 ease-in top-[0px] right-[-200px] lg:right-[-300px]'>
                   <ul className='px-[10px] mt-[100px]'>
                  <li className='text-[white] mb-[10px] text-[25px] lg:text-[30px] w-[100%] py-[5px] hover:bg-[#dbdbdb] hover:text-[#000] flex justify-start px-[20px] rounded-[20px] font-font-name'>Home</li>
                  <li className='text-[white] mb-[10px] text-[25px] lg:text-[30px] w-[100%] py-[5px] hover:bg-[#dbdbdb] hover:text-[#000] flex justify-start px-[20px] rounded-[20px] font-font-name'>Account</li>
                  <li className='text-[white] mb-[10px] text-[25px] lg:text-[30px] w-[100%] py-[5px] hover:bg-[#dbdbdb] hover:text-[#000] flex justify-start px-[20px] rounded-[20px] font-font-name'>Order</li>
                  </ul>
                </div>}
        </div>
    </section>
  )
}

export default Menu