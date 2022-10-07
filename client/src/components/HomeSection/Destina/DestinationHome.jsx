import React from 'react'
import AllItem from '../../destination/AllItem'

const DestinationHome = () => {
  return (
    <>
      <section className="popular top-100">
        <div className="full__container">
          <div className="heading">
            <h1>Most Popular Destination</h1>
            <div className="line">

            </div>
            <div className="content">
              <AllItem />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default DestinationHome