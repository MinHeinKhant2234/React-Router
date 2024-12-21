import React from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../hooks/usefetch'

export default function BlogDetail() {
    let params = useParams()
    let url = 'http://localhost:3001/blogs/'+params.id
    let {data:blog,error,loading}= useFetch(url)
  return (
    <div>
        {error && <div>{error}</div>}
        {loading && <div>{loading}</div>}
        {blog && <div>
        <h3>{blog.title}</h3>
        <p>{blog.body}</p>
        <p>Author - {blog.author}</p>
        </div>}
    </div>
  )
}
