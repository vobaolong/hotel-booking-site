import Cards from './Cards'
import './Popular.css'
const Popular = () => {
  return (
    <>
      <section className="popular mt-100">
        <div className="full_container">
          <div className="heading">
            <h1>Most Popular Hotel</h1>
            <div className="line"></div>
          </div>
          <div className="content">
            <Cards />
          </div>
        </div>
      </section>
    </>
  )
}

export default Popular
