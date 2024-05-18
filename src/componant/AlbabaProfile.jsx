import React from 'react'
import cover from '../assets/cover.jpg'
import logo from '../assets/albabaLogo.png'
const AlbabaProfile = () => {
  return (
    <div className="main">
        <div className="imgBox relative h-[280px]">
            <div className="coverImg overflow-hidden h-[200px]">
                <img className='rounded-[10px]' src={cover} alt="" />
            </div>
            <div className="logo w-[180px] bg-[#272727] p-[10px] rounded-[50%] absolute top-[100px] left-[20px]">
                <img className='rounded-[50%]' src={logo} alt="" />
            </div>
        </div>
    </div>
  )
}

export default AlbabaProfile