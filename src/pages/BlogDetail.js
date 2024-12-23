import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import useFetch from '../hooks/usefetch'

export default function BlogDetail() {
    let params = useParams()
    let url = 'http://localhost:3001/blogs/'+params.id
    let {data:blog,error,loading}= useFetch(url)
    let nevigate = useNavigate();

    useEffect(()=>{if(error){setTimeout(()=>{
      nevigate('/home')
    },2000)}},[error,nevigate])
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
