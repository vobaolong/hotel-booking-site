import React from 'react'
import aboutImg from '../assets/images/about.png'
import HeadTitle from '../components/headTitle/HeadTitle'
import '../styles/About.css'
import AboutCard from './AboutCard'

const AboutUs = () => {
  return (
    <>
      <HeadTitle />
      <section className="about mt-100">
        <div className="container">
          <AboutCard />
        </div>
      </section>

      <section className="features mt-100">
        <div className=" container aboutCard flex-space">
          {/*content*/}
          <div className="row row1">
            <h1>
              Our <span>Features</span>
            </h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt, exercitationem.</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt, exercitationem.</p>
            <button className="secondary-btn">
              Explore More <i class="ri-arrow-right-line"></i>
            </button>
          </div>
          {/*img*/}
          <div className="row image">
            <img src={aboutImg} alt="About Img" />
          </div>
        </div>
      </section>

    </>
  )
}

export default AboutUs
