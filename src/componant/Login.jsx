import axios from 'axios';
import React, { useState } from 'react'
import { FaEye } from "react-icons/fa";
import { IoMdEyeOff } from "react-icons/io";
import { Link, useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword , signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Login = () => {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    
    let navigate = useNavigate()
    let [pass , setpass] = useState(false)
    let hender = () =>{
        setpass(!pass)
    }
    let [ password , SetPassword ] = useState('')
    let [ email , SetEmail ] = useState('')

    let [ error , seterror ] = useState(false)
    
    let handleEmail = (e) => {
        SetEmail(e.target.value)
    }
    let handlePass = (e) => {
        SetPassword(e.target.value)
    }

    let handlelogin = () =>{
        signInWithEmailAndPassword(auth, email, password)
        .then((user) => {
          console.log(user);
        })
        .then(()=>{
            toast('success')
            setTimeout(()=>{
                navigate('/')
            },1000)
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            seterror(true)
        });
    }
    let LoginGoogle = () => {
        signInWithPopup(auth, provider)
        .then((result) => {
          // This gives you a Google Access Token. You can use it to access the Google API.
          const credential = GoogleAuthProvider.credentialFromResult(result);
          const token = credential.accessToken;
          // The signed-in user info.
          const user = result.user;
          // IdP data available using getAdditionalUserInfo(result)
          // ...
        })
        .then(()=>{
            toast('success')
            setTimeout(()=>{
                navigate('/')
            },1000)
        })
        .catch((error) => {
          // Handle Errors here.
          const errorCode = error.code;
          const errorMessage = error.message;
          // The email of the user's account used.
          const email = error.customData.email;
          // The AuthCredential type that was used.
          const credential = GoogleAuthProvider.credentialFromError(error);
          // ...
        });
    }
  return (
    <section className='bg-[#201f1f]'>
        <div className="container px-[10px] py-[90px] mx-auto">
        <ToastContainer
position="top-center"
autoClose={500}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>
            <div className="LoGBox border-b-[1px] border-[#fff] mx-auto lg:w-[600px]">
                <h1 className=' flex items-center pl-[20px] text-[#fff] text-[25px] font-font-name w-[100%] h-[60px] bg-[red]'>Login</h1>
                <div className="LogD p-[20px]">
                    <form >
                    <input onChange={handleEmail} type="text" className={`w-[100%] bg-[#201f1f] pl-[10px] outline-none border-[2px] text-[#fff] ${error === true ? " border-[red] " : "border-[#fff]" }  rounded-l-[10px] h-[50px]`} placeholder='Enter You Email'/>
                    <div className="inputPassBox flex mt-[10px]">
                    <input onChange={handlePass} type={pass == true ? "text" : "password"} className={`w-[100%] bg-[#201f1f] pl-[10px] outline-none border-[2px] text-[#fff] ${error === true ? " border-[red] " : "border-[#fff]" }  rounded-l-[10px] h-[50px]`} placeholder='Password'/>
                    <span onClick={hender} className='w-[80px] h-[50px] bg-[red] border-[2px] border-[#fff] border-l-[0px] text-[#fff] text-[20px] flex justify-center items-center'>{pass == true ? <IoMdEyeOff/> :<FaEye/>}</span>
                    </div>
                    <h2 onClick={handlelogin} className='w-[100%] h-[50px] bg-[red] my-[10px] rounded-[10px] flex justify-center items-center text-[20px] font-font-name text-[#fff]'>Login</h2>
                    </form>
                    <h2 onClick={LoginGoogle} className='w-[100%] h-[50px] bg-[#ffc7c7] my-[10px] rounded-[10px] flex justify-center items-center text-[20px] font-font-name text-[#000]'>Google Login</h2>
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