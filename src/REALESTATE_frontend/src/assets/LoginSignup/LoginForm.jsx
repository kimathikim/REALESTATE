import React from 'react'
import './LoginForm.css'

export const LoginForm = () => {
  return (
    <div className='container2'>
        <form action=''>
            <h3> Log in</h3>
            <div className='inputs2'>
            <div className='input-box'>
            <img src='/src/assets/email icon.jpeg' alt='' />
                <input type='email' placeholder = "email" required/>

            </div>

            <div className='input-box'>
            <img src='/src/assets/password icon.png' alt='' />
                <input type='password' placeholder = "password" required/>
                
            </div>
            </div>
<div className='submit2'>
            <button type='submit2'>Login</button>
</div>
            <div className='register-link'>
                <p>Don't have an account? <span>Register</span></p>
            </div>

        </form>
    </div>
  );
};

export default LoginForm;
