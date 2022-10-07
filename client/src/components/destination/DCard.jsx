import React from 'react'
import { Link } from 'react-router-dom'

const DCard = ({ item: { id, image, title, desc, sidepara, paraImg } }) => {
  return (
    <>
      <div className="items">
        <div className="img">
          <img src={image} alt="" />

          <Link to={`/singlepage/${id}`} className='blogItem-link'>
            <i class="ri-external-link-line"></i>
          </Link>
        </div>

        <div className="title">
          <h3>{title}</h3>
        </div>
      </div>
    </>
  )
}

export default DCard
