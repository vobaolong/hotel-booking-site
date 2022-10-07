import React, { useState } from 'react'
import BlogCard from './BlogCard'
import BlogData from './BlogData'
import '../../styles/Blog.css'

const AllBlog = () => {

  const [items, setItems] = useState(BlogData)
  return (
    <>
      <section className="blog mt-100">
        <div className="container">
          <div className="content grid">
            {items.map((item) => {
              return <BlogCard key={item.id} item={item} />
            })}
          </div>
        </div>
      </section>
    </>
  )
}

export default AllBlog
