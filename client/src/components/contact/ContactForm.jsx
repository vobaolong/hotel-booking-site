import React from 'react'
import { useState } from 'react'
import './Contact.css'
const ContactForm = () => {
  const [fname, setFname] = useState('')
  const [lname, setLname] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [allValue, setAllValue] = useState([])
  const formSubmit = (e) => {
    e.preventDefault()
    const newValue = { fname, lname, phone, email, message }
    setAllValue([...allValue, newValue])
    setFname('')
    setLname('')
    setPhone('')
    setEmail('')
    setMessage('')
  }
  return (
    <>
      <section className="contact mt-100">
        <div className="container flex">
          <div className="main-content">
            <h2>Contact From</h2>
            <p>Fill out the form below, we will get back you soon.</p>
            <form onSubmit={formSubmit}>
              <div className="grid1">
                {/*First name */}
                <div className="input">
                  <span>
                    First Name <label>*</label>
                  </span>
                  <input
                    type="text"
                    name='fname'
                    value={fname}
                    onChange={(e) => setFname(e.target.value)} />
                </div>

                {/*Last name */}
                <div className="input">
                  <span>
                    Last Name <label>*</label>
                  </span>
                  <input
                    type="text"
                    name='lname'
                    value={lname}
                    onChange={(e) => setLname(e.target.value)} />
                </div>

                {/*Phone */}
                <div className="input">
                  <span>
                    Phone Number <label>*</label>
                  </span>
                  <input
                    type="number"
                    name='phone'
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)} />
                </div>

                {/*Email */}
                <div className="input">
                  <span>
                    Email <label>*</label>
                  </span>
                  <input
                    type="email"
                    name='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} />
                </div>


              </div>
              {/*Message */}
              <div className="input inputlast">
                <span>
                  Write Your Message <label>*</label>
                </span>
                <textarea
                  type="message"
                  name='message'
                  value={message}
                  cols='30'
                  rows='10'
                  onChange={(e) => setMessage(e.target.value)} />
              </div>
              <button className="primary-btn">Submit Now</button>
            </form>
          </div>

          <div className="side-content">
            <h3>Visit our location</h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam, quae.</p>
            <br />
            <h3>Message Us</h3>
            <span>19110234@gmail.com</span>
            <br />
            <span>(+84) 34 8073 013</span>
            <br />
            <div className="icon">
              <h3>Follow Us</h3>
              <div className="flex">
                <i class="ri-facebook-box-fill"></i>
                <i class="ri-youtube-line"></i>
                <i class="ri-github-fill"></i>
              </div>
            </div>
          </div>

        </div>
      </section>

      <section className="show-data">
        {allValue.map((currentValue) => {
          const { fname, lname, phone, email, message } = currentValue
          return (
            <div className="sign-box">
              <h1>Send Successfully</h1>
              <h4>First Name: <p>{fname}</p></h4>
              <h4>Last Name: <p>{lname}</p></h4>
              <h4>Phone number: <p>{phone}</p></h4>
              <h4>Email: <p>{email}</p></h4>
              <h4>Message: <p>{message}</p></h4>

            </div>

          )
        })}


      </section>
    </>
  )
}

export default ContactForm