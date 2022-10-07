import React from 'react'
import DCard from './DCard'
import { useState } from 'react'
import SData from './SData'
const AllItem = () => {
  const [items, setItems] = useState(SData)

  return (
    <>
      <section className='hotel desi top-100'>
        <div className="container">
          <div className="content grid">
            {
              items.map((item) => {
                return <DCard key={item.id} item={item} />
              })}
          </div>
        </div>
      </section>
    </>
  )
}

export default AllItem
