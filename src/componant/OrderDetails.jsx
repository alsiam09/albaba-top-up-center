import React from 'react'
import currency from '../assets/albc.png'
import { useState } from 'react'

const OrderDetails = () => {
    let [Order, setOrder] = useState(false)
    function ClickOrder() {
        setOrder(!Order);
    }
  return (
    <section className='pt-[90px] pb-[200px] lg:pb-[40px] bg-[#201f1f]'>
        <div className="container px-[10px] mx-auto" >
            <div className="orderList w-[100%] p-[20px] border-[2px] rounded-[10px] border-[#fff]">
                <h2 className='text-[20px] text-[#fff] font-font-name py-[10px]'>Order List</h2>
                <div className="lg_order  hidden lg:block">
                <div className="flex justify-between orderItem py-[10px] border-t-[1px] border-[#616161]">
                    <span className='w-[10%] text-[15px] text-[#fff]'>Order ID</span>
                    <span className='w-[20%] text-[15px] text-[#fff]'>Date</span>
                    <span className='w-[10%] text-[15px] text-[#fff]'>Package</span>
                    <span className='w-[15%] text-[15px] text-[#fff]'>free fire id</span>
                    <span className='w-[10%] text-[15px] text-[#fff]'>Price</span>
                    <span className='w-[10%] text-[15px] text-[#fff]'>staus</span>
                    <span className='w-[25%] text-[15px] text-[#fff]'>Comment</span>
                </div>
                <div className="flex justify-between orderItem py-[10px] border-t-[1px] border-[#616161]">
                    <span className='w-[10%] text-[15px] text-[#fff]'>158444</span>
                    <span className='w-[20%] text-[15px] text-[#fff]'>May 18th 2024, 10:13 AM</span>
                    <span className='w-[10%] text-[15px] text-[#fff]'>Weekly</span>
                    <span className='w-[15%] text-[15px] text-[#fff]'>2834031346</span>
                    <span className='w-[10%] text-[15px] text-[#fff] flex items-center'>146 <img className='ml-[5px] w-[15px] h-[15px] rounded-[50%]' src={currency} alt="" /></span>
                    <span className='w-[10%] text-[15px] text-[#fff]'>complete</span>
                    <span className='w-[25%] text-[15px] text-[#fff]'>your order is complete</span>
                </div>
                </div>
                <div className="sm_order lg:hidden">
                <div onClick={ClickOrder} className="item_box flex justify-between"> <span className=' flex items-center   text-[15px] text-[#fff]'>Order ID</span> <span className=' text-[15px] text-[#fff]'>158444</span></div>
                {Order == true && 
                                <div className="box">
                                <div className="item_box  py-[13px] border-t-[1px] border-[#616161] flex justify-between"> <span className=' flex items-center   text-[15px] text-[#fff]'>Date</span> <span className='  text-[15px] text-[#fff]'>May 18th 2024, 10:13 AM</span></div>
                                    <div className="item_box  py-[13px] border-t-[1px] border-[#616161] flex justify-between"> <span className=' flex items-center   text-[15px] text-[#fff]'>Package</span> <span className='  text-[15px] text-[#fff]'>Weekly</span></div>
                                    <div className="item_box  py-[13px] border-t-[1px] border-[#616161] flex justify-between"> <span className=' flex items-center text-[15px] text-[#fff]'>free fire id</span> <span className='  text-[15px] text-[#fff]'>	2834031346</span></div>
                                    <div className="item_box  py-[13px] border-t-[1px] border-[#616161] flex justify-between"> <span className=' flex items-center   text-[15px] text-[#fff]'>Price</span> <span className='  text-[15px] text-[#fff] flex items-center'>146 <img className='ml-[5px] w-[15px] h-[15px] rounded-[50%]' src={currency} alt="" /></span></div>
                                    <div className="item_box  py-[13px] border-t-[1px] border-[#616161] flex justify-between"> <span className=' flex items-center  text-[15px] text-[#fff]'>staus</span> <span className=' text-[15px] text-[#fff]'>complete</span></div>
                                    <div className="item_box py-[13px] border-t-[1px] border-[#616161]  flex justify-between"> <span className=' flex items-center text-[15px] text-[#fff]'>Comment</span> <span className='  text-[15px] text-[#fff]'>your order is complete</span></div>
                                </div>
                }
                </div>
            </div>
        </div>
    </section>
  )
}

export default OrderDetails