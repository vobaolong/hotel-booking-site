import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import BlogData from './BlogData'
import HeadTitle from '../headTitle/HeadTitle'
import EmptyFile from '../../singlePage/EmptyFile'
import '../../singlePage/SinglePage.css'

const BlogSingle = () => {
  const { id } = useParams()
  const [item, setItem] = useState(null)
  useEffect(() => {
    let item = BlogData.find((item) => item.id === parseInt(id))

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
            <Link to='/blog' className='primary-btn back'>
              <i class="ri-arrow-left-line"></i> Go Back
            </Link>

            <article className="content flex">
              <div className="main-content">
                <img src={item.image} alt="" />

                <div className="category flex-space">
                  <span>{item.date}</span>
                  <label>{item.category}</label>
                </div>

                <h1>{item.title}</h1>
                <p>{item.desc}</p>
                <p>{item.desc}</p>

                <h2>Two Column Text Sample</h2>
                <div className="para flex-space">
                  <p>{item.para}</p>
                  <p>{item.para}</p>
                </div>
              </div>

              <div className="side-content">
                <div className="category-list">
                  <h2>Category</h2>
                  <hr />
                  <ul>
                    {
                      BlogData.map((item) => {
                        return (
                          <li>
                            <i class="ri-play-circle-line"></i>
                            {item.category}
                          </li>
                        )
                      })
                    }
                  </ul>
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

export default BlogSingle
