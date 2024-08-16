import React, { useEffect, useState } from 'react'
import cover from '../assets/cover.jpg'
import Logo from '../assets/albabaLogo.png'
import currency from '../assets/albc.png'
import { IoIosArrowDown ,IoIosArrowUp , IoIosCamera  } from "react-icons/io";
import { getAuth, onAuthStateChanged , signOut } from "firebase/auth";
import { useDispatch, useSelector } from 'react-redux';
import { signin } from './docmentslice';

const AlbabaProfile = () => {
  const auth = getAuth();
  let dispatch = useDispatch()
  let [SD , setSD] = useState(false)
  let ClickSD =()=>{
    setSD(!SD)
  }
  
  let [Img , SetImg] = useState()
  let ImgChang = (event) =>{
    const file = event.target.files[0]
    console.log(file);
    SetImg(file)
  }
  let [Blance , setBlance] = useState(false)
  let ClickBlance =()=>{
    setBlance(!Blance)
  }
  
  let [ name , SetName ] = useState('')
  let [ number , SetNumber ] = useState('')
  let [ proimg , setproimg ] = useState('')
  let [ emailVerifiedp , SetemailVerified ] = useState('')

  let Data = useSelector((state)=> state.docmentslice.userid)

  console.log(Data);
  
  

  
  useEffect(()=>{
    
    onAuthStateChanged(auth, (user) => {
      console.log(emailVerifiedp);
      dispatch(signin(emailVerifiedp))
      if (user) {
        
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        
          SetName(user.displayName);
          SetNumber(user.uid);
          setproimg(user.photoURL)          
          SetemailVerified(user.emailVerified)          
     

        // ...
      } else {
        SetName("");
          SetNumber("");
          setproimg("")          
          SetemailVerified("")  
      }
    });

      
  })

  
  console.log(proimg);
  
  return (
    <div className="main lg:border-r-[3px] lg:pr-[20px] px-[10px] lg:pl-[0px] border-r-[#fff]">
        <div className="imgBox  relative  h-[280px]">
            <div className="coverImg overflow-hidden h-[200px]">
                <img className='rounded-[10px]' src={cover} alt="" />
            </div>
            <div  className="logo w-[180px] h-[180px] bg-[#272727] p-[10px] rounded-[50%] absolute top-[100px] left-[20px]">
                 {proimg === null ? '' :<img className=' h-[160px] w-[160px] lg:w-[160px] lg:h-[160px] rounded-[50%]' src={proimg} alt="" />}
                <div className="Active absolute left-[18px] bottom-[18px] w-[22px] h-[22px] rounded-[50%] bg-[green]"></div>
                <label for="imgUp" className="Active absolute right-[1px] bottom-[20px] p-[10px] rounded-[50%] bg-[#272727] text-[#fff] text-[25px]"><IoIosCamera /></label>
            </div>
            <input onChange={ImgChang} className=' hidden ' type="file" id="imgUp" />
        </div>
        <div className="MainBox">
        <div onClick={ClickSD} className=" userDetil my-[10px] rounded-[20px] border-[2px] items-center border-[#fff] w-[100%] h-[50px] flex justify-between px-[30px] bg-[#292929]">
          <h2 className='userName text-[25px] text-[white] font-bold'>{name}</h2>
          {SD == true ?  <div className="icon text-[25px] text-white"><IoIosArrowUp /></div> :  <div className="icon text-[25px] text-white"><IoIosArrowDown/></div>}
        </div>
        {SD == true && 
           <ul className=" duration-300 ease-in DitelBox w-[100%] py-[30px] px-[30px] bg-[#292929]">
            <li className='lg:text-[25px] text-[22px] font-font-name text-[white]'>Uid :<span className='pl-[10px] font-mono'>{number}</span></li>
            <li className='flex items-center lg:text-[25px] text-[22px] font-font-name text-[white]'><span className='mr-[10px]'>Blance :</span>{Blance == true ?   <div onClick={ClickBlance} className=" flex items-center justify-center duration-300 ease-in rounded-[20px] BlanceBox w-[100px] h-[30px] bg-[#000] text-[#fff] relative"><img className='h-[100%] rounded-[50%] duration-300 ease-in-out ml-[70px] absolute' src={currency} alt="" /><span className='text-[#fff] duration-300 ease-in ml-[-20px] text-[15px] flex items-center justify-center'>1000</span></div>:  <div onClick={ClickBlance} className=" duration-300 ease-in rounded-[20px] BlanceBox w-[100px] h-[30px] bg-[#000] text-[#fff] relative"><img className='h-[100%] duration-300 ease-in rounded-[50%] ml-0' src={currency} alt="" /></div>}</li>
           </ul>
        }
        </div>
    </div>
  )
}

export default AlbabaProfile 