import React, { useState } from 'react'


export default function FormBlogCreate ({create, authorName}) {
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState(authorName)
  const [url, setUrl] = useState('')


  const handelCreate = (e) => {
    e.preventDefault()
    create({ title, author, url, likes: 0 })
     
    setAuthor(authorName)
    setTitle('')
    setUrl('')
  }
  return (
    <form onSubmit={handelCreate}>
      <div>
        title:
        <input
          type='text'
          id='title'
          value={title}
          name='title'
          onChange={({ target }) => setTitle(target.value)}
        />
      </div>
      <div>
        author:
        <input
          type='text'
          value={author}
          id='author'
          name='author'
          onChange={({ target }) => setAuthor(target.value)}
        />
      </div>
      <div>
        url:
        <input
          type='text'
          value={url}
          id='url'
          name='url'
          onChange={({ target }) => setUrl(target.value)}
        />
      </div>
      <button id='createBlog-button' type='submit'>enviar</button>
    </form>
  )
}
