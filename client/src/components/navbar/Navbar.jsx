import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.png'
import './Navbar.css'
const Navbar = () => {
  const [mobile, setMobile] = useState(false);
  const closeMobile = () => setMobile(false);
  return (
    <>
      <header>
        <div className="container flex-space">
          <Link to='/' className="logo">
            <img src={logo} alt="logo" />
          </Link>

          <div className="contact flex-space">

            {/*time workings*/}
            <div className="box flex-space">
              <div className="icons">
                <i class="ri-time-line"></i>
              </div>

              <div className="text">
                <h4>Working Hours</h4>
                <Link to='contact'>Monday-Sunday: 9.00AM to 6.00PM</Link>
              </div>
            </div>
            {/*phone number*/}
            <div className="box flex-space">
              <div className="icons">
                <i class="ri-phone-line"></i>
              </div>

              <div className="text">
                <h4>Call Us</h4>
                <Link to='contact'>(+84) 34 8073 013</Link>
              </div>
            </div>
            {/*email*/}
            <div className="box flex-space">
              <div className="icons">
                <i class="ri-mail-line"></i>
              </div>

              <div className="text">
                <h4>Mail Us</h4>
                <Link to='contact'>19110234@student.hcmute.edu.vn</Link>
              </div>
            </div>

          </div>
        </div>
      </header>

      <nav className="navbar">
        <div className="container flex-space">
          <div className="menu__icon" onClick={() => setMobile(!mobile)}>
            <i class={mobile ? "ri-close-fill" : "ri-menu-line"}></i>
          </div>

          <ul className={mobile ? "nav__menu active" : "nav__menu"}
            onClick={() => setMobile(false)}>
            <li> <Link to='/' onClick={closeMobile}>Home</Link> </li>
            <li> <Link to='/hotel' onClick={closeMobile}>Hotel</Link> </li>
            <li> <Link to='/destination' onClick={closeMobile}>Destination</Link> </li>
            <li> <Link to='/blog' onClick={closeMobile}>Blog</Link> </li>
            <li> <Link to='/about' onClick={closeMobile}>About Us</Link> </li>
            <li> <Link to='/contact' onClick={closeMobile}>Contact</Link> </li>
          </ul>

          <div className="login__area flex">
            <li>
              <Link to='signup'>
                <i class="ri-login-box-line"></i>SignUp
              </Link>
            </li>

            <li>
              <Link to='signin'>
                <i class="ri-user-3-line"></i>SignIn
              </Link>
            </li>

            <li>
              <Link to='contact'>
                <button className='primary-btn'>Contact</button>
              </Link>
            </li>


          </div>
        </div>
      </nav>


    </>
  )
}

export default Navbar
