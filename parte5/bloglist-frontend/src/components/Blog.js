import React from 'react'
import Toggable from './Toggable'

const Blog = ({ blog, updateLikes ,deleteBlog}) => {
  const handelLike = () => {
    updateLikes(blog)
      
  }

  const handelDelete = () => {
    const confirm = window.confirm(`Desea eliminar esta publicacion: ${blog.title}`)
    if (confirm === true) {
      deleteBlog({ id: blog.id })
       
    }
  }
  return (
    <div className='Blog'>
      <div className='principalInfo'>
      {blog.title} {blog.author}
      </div>
      <Toggable className="moreInfo" buttonLabel='show...'>
        <ul className='contentMoreInfo'>
          <li>url:{blog.url}</li>
          <li>Likes:{blog.likes} <button className='ButtonMoreLike' onClick={handelLike}>like</button></li>
        </ul>
      </Toggable>
      <button onClick={handelDelete}>Delete</button>
    </div>
  )
}
export default Blog
