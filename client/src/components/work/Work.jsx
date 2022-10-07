import React from 'react'
import WCard from './WCard'
import WData from './WData'
import './Work.css'
const Work = () => {
  return (
    <>
      <section className="popular works">
        <div className="container">
          <div className="heading">
            <h1>How is work?</h1>
            <div className="line"></div>
          </div>
          <div className="content grid">
            {WData.map((value, index) => {
              return <WCard
                key={index}
                image={value.image}
                title={value.title}
                desc={value.desc} />
            })}
          </div>
        </div>
      </section>
    </>
  )
}

export default Work