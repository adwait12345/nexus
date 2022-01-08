import React, { useContext } from 'react'
import './login.css';
import { useRef } from 'react';
import { loginCall } from '../../apiCalls';
import { AuthContext } from '../../context/AuthContext';
import Signup from './signup';



export default function Login() {
  
   const email = useRef();
 const password = useRef();
const {user ,isFetching, error, dispatch} = useContext(AuthContext)


 const handleClick = (e)=>{
    e.preventDefault()
   loginCall({email:email.current.value,password:password.current.value}, dispatch)
 };
 console.log(user)
    return (
       <div className="ultimate">
        <div className="wrapper-100">
        <div className="title-text1">
           <div className="title01 ">Nexus</div>
        </div>
        <div className="form-container">
           <div className="slide-controls">
              <input type="radio" name="slide" id="login" checked/>
              <input type="radio" name="slide" id="signup"/>
              <label for="login" className="slide login">Login</label>
              <label for="signup" className="slide signup">Signup</label>
              <div className="slider-tab"></div>
           </div>
           <div className="form-inner">
              <form  className="login" onSubmit={handleClick}>
                 <div className="field">
                    <input type="text" placeholder="Email Address" minLength="6" required ref={email}/>
                 </div>
                 <div className="field">
                    <input type="password" placeholder="Password" required ref={password}/>
                 </div>
                 <div className="pass-link">
                    <a href="#">Forgot password?</a>
                 </div>
                 <div className="field btn">
                    <div className="btn-layer"></div>
                    <button type='submit' disabled={isFetching}>
                       {isFetching ? "•••":"Log In"}
                       </button>
                 </div>
                 <div className="signup-link">
                    Not a member? <a href="">Signup now</a>
                 </div>
              </form>
             <Signup/>
           </div>
        </div>
     </div></div>
    )
}

document.addEventListener("DOMContentLoaded", (event) => {
    const loginText = document.querySelector(".title-text .login");
    const loginForm = document.querySelector("form.login");
    const loginBtn = document.querySelector("label.login");
    const signupBtn = document.querySelector("label.signup");
    const signupLink = document.querySelector("form .signup-link a");
    signupBtn.onclick = (()=>{
      loginForm.style.marginLeft = "-50%";
      loginText.style.marginLeft = "-50%";
    });
    loginBtn.onclick = (()=>{
      loginForm.style.marginLeft = "0%";
      loginText.style.marginLeft = "0%";
    });
    signupLink.onclick = (()=>{
      signupBtn.click();
      return false;
    });



})