import React, { useState } from 'react'
import ProdectImg from '../assets/ProdectImg.png'

const Admin = () => {
    let [close , setClose] = useState(true)
    let [Notclose , setNotClose] = useState(true)
    let [ off , setOff ] = useState(true)
    let [ KeyButtonEnter , setKeyButtonEnter ] = useState('')
    let [a , seta ] = useState('')
    let Time = 3
    let Enter = (event) => {
        setKeyButtonEnter(event.key);
    }
   
    let HandelEnter = () =>{
         if (PassINput === 'AAaa_123') {
            setClose(!true)
            console.log("pash");
        }
        else{
            
            setNotClose(!true)
            seta(Time -= 1)
        }
    }
    let HandelInput = (e) => {
        setPassINput(e.target.value);
    }
    console.log(a);
    let [ PassINput , setPassINput ] = useState('')
  return (
    <section className='my-[100px]'>
        {close === false ?"":
        <div className={` fixed w-[100%] h-[100%] items-center flex justify-center top-0 left-0 bg-[black] `}>
           {a === 1 ?
           ""
           :
           <>
            <input onKeyUp={Enter} onChange={HandelInput} type="password" className=' outline-none px-[20px] py-[6px] bg-[black] text-[#fff]' placeholder='Enter Admin Password'/>
            <h2  onClick={HandelEnter} className={`w-[100px] h-[40px] flex items-center justify-center text-[#fff] font-[700] ${Notclose === false ? 'bg-[red]' :"bg-[#21d621]"}`}>Enter</h2>
           </>
           }
        </div>
}
        <div className="container mx-auto justify-between flex flex-wrap">
            <div className="creat w-[48%] h-[600px]">
                <div className="allsellProdect w-[100%] h-[300px] bg-[#ffd698]"></div>
            </div>
            <div className="sarvis w-[48%] h-[600px]">
            <div className="ProdectBox flex md:mt-[0px] mt-[20px] flex-wrap justify-between">
        <div  className="ProdectItemBox mb-[20px] rounded-[10px] p-[10px] bg-[#000000] w-[48%] md:w-[32%]">
            <div >
            <img className='rounded-t-[10px] w-[100%]' src={ProdectImg} alt="" />
            <h2 className="ProdectName h-[50px] flex items-center justify-center text-[20px] lg:text-[26px] text-[#fff] font-font-name ">Free Fire</h2>
            </div>
        </div>
    </div>
            </div>
        </div>
    </section>
  )
}

export default Admin