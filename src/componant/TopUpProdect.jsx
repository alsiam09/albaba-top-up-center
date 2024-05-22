import React from 'react'
import ProdectImg from '../assets/ProdectImg.png'
import ProdectImg2 from '../assets/images.png'
import ProdectImg3 from '../assets/Pubg.webp'
import ProdectImg4 from '../assets/coc.jpg'
import { Link } from 'react-router-dom'
const TopUpProdect = () => {
  return (
    <div className="ProdectBox flex md:mt-[0px] mt-[20px] flex-wrap justify-between">
        <Link to={'/TopUpItem'} className="ProdectItemBox mb-[20px] rounded-[10px] p-[10px] bg-[#000000] w-[48%] md:w-[32%]">
            <div >
            <img className='rounded-t-[10px] w-[100%]' src={ProdectImg} alt="" />
            <h2 className="ProdectName h-[50px] flex items-center justify-center text-[20px] lg:text-[26px] text-[#fff] font-font-name ">Free Fire</h2>
            </div>
        </Link>
    </div>
  )
}

export default TopUpProdect