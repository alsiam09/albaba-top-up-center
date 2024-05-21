import React from 'react'
import banner from '../assets/cover2.png'
import currency from '../assets/albc.png'
const TopUppackage = () => {
  return (
    <section className='pt-[80px] pb-[30px py-[20px]] bg-[#201f1f]'>
        <div className="container mx-auto">
            <div className="banner m-[10px]">
                <img className='rounded-[10px] lg:h-[300px] md:h-[200px] h-[150px] w-[100%]' src={banner} alt="" />
            </div>
            <div className="ByeItem flex justify-center">
                <div className="package lg:w-[60%] p-[10px]">
                <ul className="  flex-wrap flex justify-between  ">
                <li className='hover:bg-[#fff] my-[5px] py-[20px] cursor-pointer  hover:text-[#000] relative w-[47%] rounded-[5px] lg:w-[32%] h-[30px] border-[white] border-[1px] text-[#fff] flex items-center justify-center text-[18px] font-[600]'><span>25 Dimond</span><span className='text-[red] text-[12px] bg-[#f5f5f5] px-[5px] rounded-[5px] absolute top-[-5px] right-[-5px] '>19৳</span></li>
                <li className='hover:bg-[#fff] my-[5px] py-[20px] cursor-pointer  hover:text-[#000] relative w-[47%] rounded-[5px] lg:w-[32%] h-[30px] border-[white] border-[1px] text-[#fff] flex items-center justify-center text-[18px] font-[600]'><span>50 Dimond</span><span className='text-[red] text-[12px] bg-[#f5f5f5] px-[5px] rounded-[5px] absolute top-[-5px] right-[-5px] '>35৳</span></li>
                <li className='hover:bg-[#fff] my-[5px] py-[20px] cursor-pointer  hover:text-[#000] relative w-[47%] rounded-[5px] lg:w-[32%] h-[30px] border-[white] border-[1px] text-[#fff] flex items-center justify-center text-[18px] font-[600]'><span>115 Dimond</span><span className='text-[red] text-[12px] bg-[#f5f5f5] px-[5px] rounded-[5px] absolute top-[-5px] right-[-5px] '>75৳</span></li>
                <li className='hover:bg-[#fff] my-[5px] py-[20px] cursor-pointer  hover:text-[#000] relative w-[47%] rounded-[5px] lg:w-[32%] h-[30px] border-[white] border-[1px] text-[#fff] flex items-center justify-center text-[18px] font-[600]'><span>240 Dimond</span><span className='text-[red] text-[12px] bg-[#f5f5f5] px-[5px] rounded-[5px] absolute top-[-5px] right-[-5px] '>155৳</span></li>
                <li className='hover:bg-[#fff] my-[5px] py-[20px] cursor-pointer  hover:text-[#000] relative w-[47%] rounded-[5px] lg:w-[32%] h-[30px] border-[white] border-[1px] text-[#fff] flex items-center justify-center text-[18px] font-[600]'><span>610  Dimond</span><span className='text-[red] text-[12px] bg-[#f5f5f5] px-[5px] rounded-[5px] absolute top-[-5px] right-[-5px] '>370৳</span></li>
                <li className='hover:bg-[#fff] my-[5px] py-[20px] cursor-pointer hover:text-[#000] relative w-[47%] rounded-[5px] lg:w-[32%] h-[30px] border-[white] border-[1px] text-[#fff] flex items-center justify-center text-[18px] font-[600]'><span>1240 Dimond</span><span className='text-[red] text-[12px] bg-[#f5f5f5] px-[5px] rounded-[5px] absolute top-[-5px] right-[-5px] '>750৳</span></li>
                <li className='hover:bg-[#fff] my-[5px] py-[20px] cursor-pointer  hover:text-[#000] relative w-[47%] rounded-[5px] lg:w-[32%] h-[30px] border-[white] border-[1px] text-[#fff] flex items-center justify-center text-[18px] font-[600]'><span>2530 Dimond</span><span className='text-[red] text-[12px] bg-[#f5f5f5] px-[5px] rounded-[5px] absolute top-[-5px] right-[-5px] '>1480৳</span></li>
                <li className='hover:bg-[#fff] my-[5px] py-[20px] cursor-pointer  hover:text-[#000] relative w-[47%] rounded-[5px] lg:w-[32%] h-[30px] border-[white] border-[1px] text-[#fff] flex items-center justify-center text-[18px] font-[600]'><span>Weekly</span><span className='text-[red] text-[12px] bg-[#f5f5f5] px-[5px] rounded-[5px] absolute top-[-5px] right-[-5px] '>155৳</span></li>
                <li className='hover:bg-[#fff] my-[5px] py-[20px] cursor-pointer  hover:text-[#000] relative w-[47%] rounded-[5px] lg:w-[32%] h-[30px] border-[white] border-[1px] text-[#fff] flex items-center justify-center text-[18px] font-[600]'><span>Mountly</span><span className='text-[red] text-[12px] bg-[#f5f5f5] px-[5px] rounded-[5px] absolute top-[-5px] right-[-5px] '>750৳</span></li>
                <li className='hover:bg-[#fff] my-[5px] py-[20px] cursor-pointer  hover:text-[#000] relative w-[47%] rounded-[5px] lg:w-[32%] h-[30px] border-[white] border-[1px] text-[#fff] flex items-center justify-center text-[18px] font-[600]'><span>Level up pass</span><span className='text-[red] text-[12px] bg-[#f5f5f5] px-[5px] rounded-[5px] absolute top-[-5px] right-[-5px] '>155৳</span></li>
                </ul>
                <div className="price mt-[20px]">
                    <h2 className=' flex items-center text-[#fff] text-[25px] font-[700]'>Price :<span className=' flex items-center font-[400] text-[#d1d1d1] ml-[10px]'>1480 <div className="icon ml-[5px]"><img className='w-[30px] h-[30px] rounded-[50%]' src={currency} alt="" /></div></span></h2>
                </div>
                <div className="PlayerID mt-[40px]">
                    <h2 className='text-[#fff] text-[25px] font-font-name'>Your account detail</h2>
                    <div className="input">
                    <input id='Uid' className=' outline-none pl-[10px] py-[3px] rounded-[5px] text-[16px] w-[200px] border-[1px] border-[#fff] text-[#fff] bg-[#201f1f] mb-[10px] block' type="text" placeholder='Enter Your UID'/>
                    <input id='Uid' className=' outline-none pl-[10px] py-[3px] rounded-[5px] text-[16px] w-[200px] border-[1px] border-[#fff] text-[#fff] bg-[#201f1f] block' type="text" placeholder='Account Name'/>
                    </div>
                </div>
               <a href="https://www.facebook.com/profile.php?id=61558573224947&mibextid=ZbWKwL"> <span className=' rounded-[10px] my-[30px] w-[100%] h-[30px] py-[20px] bg-[red] text-[#fff] text-[20px] font-[500] flex justify-center items-center '>Pay Now</span></a>
                </div>
            </div>
        </div>
    </section>
  )
}

export default TopUppackage