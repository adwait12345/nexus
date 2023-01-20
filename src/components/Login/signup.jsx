import React from 'react'
import axios from "axios";
import { useRef } from "react";
import { useNavigate } from "react-router";

export default function Signup() {
    const username = useRef();
    const email = useRef();
    const password = useRef();
    const passwordAgain = useRef();
   let history = useNavigate();

    const handleClick = async (e) => {
        e.preventDefault();
        if (passwordAgain.current.value !== password.current.value) {
            passwordAgain.current.setCustomValidity("Passwords don't match!");}
            else {
                const user = {
                  username: username.current.value,
                  email: email.current.value,
                  password: password.current.value,
                };

                try {
                    await axios.post("/auth/register", user);
                    history('/home');
                  } catch (err) {
                    console.log(err);
                  }


    }
    }

    return (
        <form action="#" className="signup" onSubmit={handleClick}>
        <div className="field">
           <input type="text"   ref={username}  placeholder="Username" required />
        </div>    
            <div className="field">
           <input type="email"  ref={email} placeholder="Email Address" required />
        </div>
        <div className="field">
           <input type="password" minLength="6"  ref={password} placeholder="Password" required />
        </div>
        <div className="field">
           <input type="password"  ref={passwordAgain} placeholder="Confirm password" required />
        </div>
        <div className="field btn">
           <div className="btn-layer"></div>
         <button type='submit'>
             Sign Up
         </button>
        </div>
     </form>
    )
}
