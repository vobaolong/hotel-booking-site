import React from 'react'
import HeadTitle from '../components/headTitle/HeadTitle'
import Card from '../components/hotel/Card'
import HotelData from '../components/hotel/HotelData'
import '../styles/Hotel.css'

const Hotel = () => {
  return (
    <>
      <HeadTitle />

      <section className="hotel mt-100">
        <div className="container grid">
          {
            HotelData.map((value) => {
              return <Card images={value.img} title={value.title} />
            })
          }
        </div>
      </section>
    </>
  )
}

export default Hotel
