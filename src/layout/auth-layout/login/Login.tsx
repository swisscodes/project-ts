import './login.css'
import React from 'react'
import { Link } from 'react-router-dom';
import userImg from './images/user.png'
import {FaUserAlt, FaKey} from "react-icons/fa";

function Login({log}:any) {
  return (
    <div className='login-contaner'>
      <div className="login-main">

        <div className='info_area'>hello</div>

        <div className='form-contain'>
          <div className="login-form-wrap">
            <div className="login-form-infos">
              <div className="image-wrap">
                <img src={userImg} alt="" className="login-user-img" />
              </div>
              <div className='login-input-wrap'>
                <div className='login-form-header'>Login Form</div>
                <form action="" className='form-wrapper'>
                  <div className="input-row">
                    <div className='icons-div'><FaUserAlt /></div>
                    <input type="email" placeholder='Enter your email' required/>
                  </div>
                  <div className="input-row">
                    <div className='icons-div'><FaKey /></div>
                    <input type="password" placeholder='Enter your password' required />
                  </div>
                  <div className="button-row">
                    <button className="form-submit" type='submit'>Login</button>
                  </div>
                  <div className="link-row">
                    <Link to='#'>Forgot Password?</Link>
                    <span>Not a member?<Link to='#'> Signup now</Link></span>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login