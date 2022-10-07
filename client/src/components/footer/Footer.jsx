import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'
import logo from '../../assets/images/logo.png'
import ScrollToTop from "react-scroll-to-top";
const Footer = () => {
  return (
    <>
      <footer class="section-p1">
        <div class="col">
          <img class="logo" src={logo} alt="" />
          <h4>Contact</h4>
          <p><strong>Address: </strong> 1st Vo Van Ngan, Ho Chi Minh City</ p>
          <p><strong>Phone: </strong>(+84) 31 8073 013</p>
          <p><strong>Hours: </strong> 9:00AM - 6:00PM, Mon - Sun</p>
        </div>
        <div class="col">
          <h4>About</h4>
          <Link to='/about'>About Us</Link>
          <Link to='/contact'>Contact Us</Link>
        </div>
        <div class="col">
          <h4>My Account</h4>
          <Link to='/signin'>Sign In</Link>
        </div>
        <div className="col">
          <div class="follow">
            <h4>Follow us</h4>
            <div class="icon">
              <i class="ri-facebook-box-fill"></i>
              <i class="ri-github-fill"></i>
              <i class="ri-youtube-fill"></i>
            </div>
          </div>
        </div>
        <div class="copyright">
          <p>Copyright &copy; 2022 Booking Hotel</p>
        </div>
        <ScrollToTop
          smooths
          color="#116149"
          className='ScrollToTop'
        />
      </footer>
    </>
  )
}

export default Footer
