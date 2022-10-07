import React from 'react'
import { useState } from 'react'
import '../../styles/Hotel.css'

const Card = (props) => {
  const [popup, setPopup] = useState(false)
  const toggleModal = () => {
    setPopup(!popup)
  }
  return (
    <>
      <div className="items">
        <div className="img">
          <img src={props.images} alt="" />
          <i class="ri-image-line" onClick={toggleModal}></i>
        </div>
        <div className="title">
          <h3>{props.title}</h3>
        </div>
      </div>
      {popup &&
        (
          <div className="popup">
            <div className="hide"> </div>
            <div className="popup-content">
              <button onClick={toggleModal}>Close</button>
              <img src={props.images} alt="" />
            </div>
          </div>
        )
      }
    </>
  )
}

export default Card
