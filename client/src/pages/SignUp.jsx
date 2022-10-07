import React, { useState } from 'react'
import HeadTitle from '../components/headTitle/HeadTitle'
import { Link } from 'react-router-dom'
import '../styles/Signin-Signup.css'
import logo from '../assets/images/logo.png'

const SignUp = () => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [allValue, setAllValue] = useState([])
  const formSubmit = (e) => {
    e.preventDefault()
    const newValue = { username, email, password }
    setAllValue([...allValue, newValue])
    setUsername('')
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
              <h1>Sign Up</h1>
            </div>
            <p>Enter username, your e-mail and password below to register your account and use the benefits of our website </p>
            <form onSubmit={formSubmit}>
              {/*Username */}
              <input
                type="text"
                name='username'
                value={username}
                placeholder="User name"
                onChange={(e) => setUsername(e.target.value)} />

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
                // name='password'
                value={password}
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)} />

              <button type='submit' className='primary-btn'>Sign Up</button>
              <p>Already have account? <Link to='/signin'>SignIn</Link></p>

            </form>
          </div>
        </div>
      </section >
      <section className="show-data">
        {allValue.map((currentValue) => {
          const { username, email, password } = currentValue
          return (
            <div className="sign-box">
              <h1>Send Successfully</h1>
              <h4>UserName:<p> {username}</p></h4>
              <h4>Email: <p>{email}</p></h4>
              <h4>Password:<p>{password}</p></h4>
            </div>
          )
        })}
      </section>
    </>
  )
}

export default SignUp
