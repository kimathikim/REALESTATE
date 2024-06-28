import React from 'react'
import './LoginSignup.css'

const LoginSignup = () => {
  return (
    <div>
    <img src="/logo2.svg" alt="DFINITY logo" />
    <br />
    <br />
    <form action="#" onSubmit={handleSubmit}>

      <div className='container'>
        <div className='header'>
            <div className='text'> Sign Up</div>
            <div className='underline'></div>
        </div>
<div className='inputs'>
    <div className='input'>
        <img src='/src/assets/user icon.jpeg' alt='' />
        <input type='text' placeholder='Username'></input>
    </div>

    <div className='input'>
        <img src='/src/assets/email icon.jpeg' alt='' />
        <input type='email' placeholder='Email'></input>
    </div>

    <div className='input'>
        <img src='/src/assets/password icon.png' alt='' />
        <input type='password' placeholder='Password'></input>
    </div>
</div>
    
    <div className='forgot-password'>Forgot password? <span>click here</span>
    <div className='submit-container'>
      <div className='submit'>Sign up</div>
      <div className='submit'>Login</div>
      </div></div>
      </div>
      </form>
      <section id="greeting">{greeting}</section>

    </div>
  );
};


 export default LoginSignup;