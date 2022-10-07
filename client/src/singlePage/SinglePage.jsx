import React, { useState } from 'react'
import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import SData from '../components/destination/SData'
import HeadTitle from '../components/headTitle/HeadTitle'
import './SinglePage.css'
import EmptyFile from './EmptyFile.jsx'
const SinglePage = () => {
  const { id } = useParams()
  const [item, setItem] = useState(null)
  useEffect(() => {
    let item = SData.find((item) => item.id === parseInt(id))

    if (item) {
      setItem(item)
    }
  }, [id])

  return (
    <>
      <HeadTitle />
      {item ? (
        <section className="single-page mt-100">
          <div className="container">
            <Link to='/destination' className='primary-btn back'>
              <i class="ri-arrow-left-line"></i> Go Back
            </Link>

            <article className="content flex">
              <div className="main-content">
                <img src={item.image} alt="" />
                <p>{item.desc}</p>
                <p>{item.desc}</p>

                <div className="para flex-space">
                  <p>{item.sidepara}</p>
                  <p>{item.sidepara}</p>
                </div>
                <h1>What is the {item.title} City?</h1>
                <p>{item.desc}</p>

                <div className="image grid1">
                  <img src={item.paraImg} alt="" />
                </div>
                <p>{item.desc}</p>
              </div>

              <div className="side-content">
                <div className="box">
                  <h2>Can we help you ?</h2>
                  <p> {item.sidepara}</p>
                  <button className='outline-btn'>
                    <i class="ri-phone-line"></i>
                    Contact Us
                  </button>
                </div>
                <div className="box2">
                  <p> {item.sidepara}</p>

                </div>
              </div>
            </article>
          </div>
        </section>
      ) : (
        <EmptyFile />
      )}
    </>
  )
}

export default SinglePage
