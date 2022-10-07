import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import HeadTitle from '../components/headTitle/HeadTitle'
import '../styles/Signin-Signup.css'
import logo from '../assets/images/logo.png'


const ResetPassword = () => {
  const [input, setInput] = useState({
    username: '',
    password: '',
    confirmPassword: ''
  });

  const [error, setError] = useState({
    username: '',
    password: '',
    confirmPassword: ''
  })

  const onInputChange = e => {
    const { name, value } = e.target;
    setInput(prev => ({
      ...prev,
      [name]: value
    }));
    validateInput(e);
  }

  const validateInput = e => {
    let { name, value } = e.target;
    setError(prev => {
      const stateObj = { ...prev, [name]: "" };

      switch (name) {
        case "username":
          if (!value) {
            stateObj[name] = "Please enter Username.";
          }
          break;

        case "password":
          if (!value) {
            stateObj[name] = "Please enter Password.";
          } else if (input.confirmPassword && value !== input.confirmPassword) {
            stateObj["confirmPassword"] = "Password and Confirm Password does not match.";
          } else {
            stateObj["confirmPassword"] = input.confirmPassword ? "" : error.confirmPassword;
          }
          break;

        case "confirmPassword":
          if (!value) {
            stateObj[name] = "Please enter Confirm Password.";
          } else if (input.password && value !== input.password) {
            stateObj[name] = "Password and Confirm Password does not match.";
          }
          break;

        default:
          break;
      }

      return stateObj;
    });
  }
  return (
    <>
      <HeadTitle />
      <section className="forms mt-100">
        <div className="container">
          <div className="sign-box">
            <div className="text-align-center">
              <img src={logo} alt="" />
              <h1>Reset Password</h1>
            </div>

            <form>

              {/*Email */}
              <input
                type="email"
                name="username"
                placeholder='Enter Username'
                value={input.username}
                onChange={onInputChange}
                onBlur={validateInput}></input>
              {error.username && <span className='err'>{error.username}</span>}

              <input
                type="password"
                name="password"
                placeholder='Enter Password'
                value={input.password}
                onChange={onInputChange}
                onBlur={validateInput}></input>
              {error.password && <span className='err'>{error.password}</span>}

              <input
                type="password"
                name="confirmPassword"
                placeholder='Enter Confirm Password'
                value={input.confirmPassword}
                onChange={onInputChange}
                onBlur={validateInput}></input>
              {error.confirmPassword && <span className='err'>{error.confirmPassword}</span>}
              <button type='submit' className='primary-btn'>
                <Link to='/signin'>Next</Link>
              </button>
            </form>
          </div>
        </div>
      </section >
    </>
  )
}

export default ResetPassword
