import React, { useState } from 'react'
import useFetch from '../hooks/usefetch'
import './Home.css'
import { NavLink } from 'react-router-dom'

export default function Home() {
    let url = 'http://localhost:3001/blogs'
    let {data:blogs,loading,error}=useFetch(url)   

  return (
    <div className='Home'>
       {error && <div>{error}</div>}
       {loading && <div>Loading....</div>}
       {blogs && blogs.map(blog=>(
        <div key={blog.id} className='card'>
            <h3>{blog.title}</h3>
            <p>posted by- {blog.author}</p>
            <NavLink to={`/blogs/${blog.id}`}>Read More</NavLink>
        </div>
       ))}
    </div>
  )
}