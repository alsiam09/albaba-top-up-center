import React, { useRef, useState } from 'react'
import { FaBars } from "react-icons/fa";
import { Link } from 'react-router-dom';
import AlbabaProfile from './AlbabaProfile';
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
                  <Link to={'/'}><li className='text-[white] mb-[10px] text-[25px] lg:text-[30px] w-[100%] py-[5px] hover:bg-[#dbdbdb] hover:text-[#000] flex justify-start px-[20px] rounded-[20px] font-font-name'>Home</li></Link>  
                  <Link to={'/order'}> <li className='text-[white] mb-[10px] text-[25px] lg:text-[30px] w-[100%] py-[5px] hover:bg-[#dbdbdb] hover:text-[#000] flex justify-start px-[20px] rounded-[20px] font-font-name'>Order</li></Link>
                  <li className='text-[white] mb-[10px] text-[25px] lg:text-[30px] w-[100%] py-[5px] hover:bg-[#dbdbdb] hover:text-[#000] flex justify-start px-[20px] rounded-[20px] font-font-name'>About Us</li>
                  </ul>
                  <Link to={'/Login'}> <li className='text-[25px] text-[#fff] font-font-name list-none absolute bottom-[60px] left-[50%] translate-x-[-50%] py-[8px] px-[26px] bg-[red] rounded-[20px]'>Login</li></Link>
                </div> :
                <div className=' fixed w-[200px] lg:w-[300px] bg-[#000] h-[100%] duration-300 ease-in top-[0px] right-[-200px] lg:right-[-300px]'>
                   <ul className='px-[10px] mt-[100px]'>
                  <Link to={'/'}><li className='text-[white] mb-[10px] text-[25px] lg:text-[30px] w-[100%] py-[5px] hover:bg-[#dbdbdb] hover:text-[#000] flex justify-start px-[20px] rounded-[20px] font-font-name'>Home</li></Link>  
                  <Link to={'/order'}> <li className='text-[white] mb-[10px] text-[25px] lg:text-[30px] w-[100%] py-[5px] hover:bg-[#dbdbdb] hover:text-[#000] flex justify-start px-[20px] rounded-[20px] font-font-name'>Order</li></Link>
                  <li className='text-[white] mb-[10px] text-[25px] lg:text-[30px] w-[100%] py-[5px] hover:bg-[#dbdbdb] hover:text-[#000] flex justify-start px-[20px] rounded-[20px] font-font-name'>About Us</li>
                  <Link to={'/Login'}> <li className='text-[25px] text-[#fff] font-font-name list-none absolute bottom-[60px] left-[50%] translate-x-[-50%] py-[8px] px-[26px] bg-[red] rounded-[20px]'>Login</li></Link>
                  </ul>
                </div>}
        </div>
    </section>
  )
}

export default Menu