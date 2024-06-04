'use client'
import React from 'react'
import'./LoginSignup.css'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope,faUser,faCheck } from '@fortawesome/free-solid-svg-icons'

function LoginSignup() {

    const [action,setAction]=useState("Sign Up");

   let submitTaken=()=>{
    setAction("Sign Up");
   }

   let loginTaken=()=>{
    setAction("Login");
   }


  return (
    <div className="container">
       <div className="header">
        <div className="SignUphead">{action}</div>
        <div className="underline"></div>
       </div>

       <div className='inputs'>
        {action==="Login"?<div></div>: <div className='input'><div className='icon'><FontAwesomeIcon icon={faUser} /></div><input type="text" placeholder='  Username' className='enter'/></div>}
       
        <div className='input'><div className='icon'><FontAwesomeIcon icon={faEnvelope} /></div><input type="email" placeholder="  Email" className='enter'/></div>
        <div className='input'><div className='icon'><FontAwesomeIcon icon={faCheck} /></div><input type="password" placeholder="   Password"className='enter'/></div>
        </div>
    {action==="Sign Up"?<div></div>:<div className='forgetpassword'>Forget Password  <span>Click</span></div>}

        <div className='submitcontainer'>
            <div className={action==="Login"?"submit gray":"submit"} onClick={submitTaken}>Sign Up</div>
            <div className={action==="Sign Up"?"submit gray":"submit"} onClick={loginTaken}>Login</div>
        </div>

    </div>


  )
}

export default LoginSignup
