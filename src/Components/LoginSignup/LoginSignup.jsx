import React, { useState }  from 'react';
import './LoginSignup.css';



const LoginSignup = () => {
    const [action,setAction]=useState("Login");
    return (
        <div className='wrapper'>
            <form action=""> 
                <h1>{action}</h1>
                <div className="input-box">
                    {action === "Login"?<div></div>:<input type="text" placeholder='Username' required />}
                    
                
                    <input type="email" placeholder='email' required />
                   
                </div>

                <div className="input-box">
                    <input type="password" placeholder='Password' required />
                    
                </div>
                {action==="Sign Up"?<div></div>: <div className="remember-forgot"> 
                   
                   <a href="#"> Forgot password?</a>
               </div>}
                

               

                <div className='submit-container'>
                <div className={action==="Login"?"submit gray ":"submit"}onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
                <div className={action==="Sign Up"?"submit gray ":"submit"}onClick={()=>{setAction("Login")}}>Login</div>
                </div>

               
            </form>
        </div>
    );
}

export default LoginSignup;