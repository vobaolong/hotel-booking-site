import React from 'react'
import '../styles/About.css'
import aboutImg from '../assets/images/about.png'

const ABoutCard = () => {
  return (
    <div>
      <section className="about mt-100">
        <div className=" aboutCard flex-space">
          {/*content*/}
          <div className="row row1">
            <h3>About</h3>
            <h1>
              We <span>provide Solution</span> to grow your business
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
    </div>
  )
}

export default ABoutCard
