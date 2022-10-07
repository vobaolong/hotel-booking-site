import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import HeadTitle from '../components/headTitle/HeadTitle'
import '../styles/Signin-Signup.css'
import logo from '../assets/images/logo.png'
const SignIn = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [allValue, setAllValue] = useState([])
  const formSubmit = (e) => {
    e.preventDefault()
    const newValue = { email, password }
    setAllValue([...allValue, newValue])
    setEmail('')
    setPassword('')
  }
  return (
    <>
      <HeadTitle />
      <section className="forms mt-100">
        <div className="container">
          <div className="sign-box">
            <div className="text-align-center">
              <img src={logo} alt="" />
              <h1>Sign In</h1>
            </div>
            <p>Enter your e-mail and password below to log in to your account and use the benefits of our website </p>
            <form onSubmit={formSubmit}>

              {/*Email */}
              <input
                type="email"
                name='email'
                value={email}
                placeholder="Email Address"
                onChange={(e) => setEmail(e.target.value)} />

              {/*password */}
              <input
                type="password"
                name='password'
                value={password}
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)} />

              <div className="flex-space">
                <div className="flex">
                  <input type="checkbox" />
                  <label >Remember Me</label>
                </div>
                <div className="flex">
                  <Link to='/resetpw'>Forgot password</Link>
                </div>
              </div>
              <button type='submit' className='primary-btn'>
                Sign In
              </button>
              <p>Don't have account? <Link to='/signup'>SignUp</Link></p>

            </form>
          </div>
        </div>
      </section >
      <section className="show-data">
        {allValue.map((currentValue) => {
          const { email, password } = currentValue
          return (
            <div className="sign-box">
              <h1>Send Successfully</h1>
              <h4>Email: <p>{email}</p></h4>
              <h4>Password: <p>{password}</p></h4>
            </div>
          )
        })}
      </section>
    </>
  )
}

export default SignIn
