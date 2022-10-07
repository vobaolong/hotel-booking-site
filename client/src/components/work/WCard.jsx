import React from 'react'

const WCard = (props) => {
  return (
    <>
      <div className="box">
        <div className="img">
          <img src={props.image} alt="" />
        </div>
        <div className="details">
          <h2>{props.title}</h2>
          <p>{props.desc}</p>
        </div>
      </div>
    </>
  )
}

export default WCard