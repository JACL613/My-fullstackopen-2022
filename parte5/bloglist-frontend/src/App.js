import { useState, useEffect } from 'react' 
import React from 'react';  
import Blog from './components/Blog'
import User from './components/User';
import FormLogin from './components/FormLogin';
import blogService from './services/blogs'
import userService from './services/users'
import FormBlogCreate from './components/FormBlogCreate';
import './style.css'
import Toggable from './components/Toggable';
import Notification from './components/Notification'

const App = () => {
  const [blogs, setBlogs] = useState([])
  const [token, setToken] = useState('');
  const [id, setId] = useState('')

  
  const [ErrorMessage, setErrorMessage] = useState(null)
  const [StatusMessage, setStatusMessage] = useState()

  useEffect(() => {
    blogService.getAll().then(blogs =>
      setBlogs( blogs )
      ) 
   

      
  }, [])
  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedBlogappUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setToken (user)
      blogService.setToken(user.token)
      blogService.confirmBlog({id: null})
      .then(res => setId(res)).catch(err => err.response.data)  
    }
  }, [])
    const userLogin = (userObject) => {
      userService.login(userObject)
      .then(respuesta => {
        if(!respuesta.error){
          window.localStorage.setItem(
            'loggedBlogappUser', JSON.stringify(respuesta)
          )
          blogService.setToken(respuesta.token)
          setToken(respuesta)
          
          blogService.confirmBlog({id: null})
          .then(res => setId(res)).catch(err => err.response.data)  
        }else {
        setErrorMessage(`Fallo: ${respuesta.error}`)
        setStatusMessage('error')
        setTimeout(() => {
          setErrorMessage(null)
        }, 5000)
      }
      }).catch(respuesta => {
        setErrorMessage(`Fallo: ${respuesta.error}`)
        setStatusMessage('error')
        setTimeout(() => {
          setErrorMessage(null)
        }, 5000)
      })
    }
    const addNewBlog = (blogObject) => {
      blogService.create(blogObject)
      .then(respuesta => {
        setErrorMessage(`se guardo del autor: ${respuesta.author}`)
        setStatusMessage('success')
        setTimeout(() => {
          setErrorMessage(null)
        }, 5000)

      
        setBlogs([...blogs, respuesta])
      }).catch(respuesta => {
        setErrorMessage(`Fallo: ${respuesta.error}`)
        setStatusMessage('error')
        setTimeout(() => {
          setErrorMessage(null)
        }, 5000)
      })
     
    }
    const upLike = (blogObject) => {
      blogService.updateLikes(blogObject)
      .then((result) => {
        setBlogs(blogs.map((b) => {
          if (b.id === result.id) {
            return result
          }
          return b
        }))
      }).catch((err) => {
        console.log(err)
      })
    }
    const delBlog = (blogObject) => {
      blogService.deleteBlog(blogObject)
      .then(respuesta => {
        setBlogs(
          blogs.filter(b => b.id !== respuesta.id)
        )
      })
      .catch(err => console.log(err))
    }
    const handelFilter = () => {
     const filterBlog = blogs.sort(function (a, b) {
        if (a.likes > b.likes) {
          return -1;
        }
        if (a.likes < b.likes) {
          return 1;
        }
        return 0;
      })
      setBlogs([...filterBlog])
    }
    // const handelConfirm = (blogObject) =>{
    //   const request = blogService.confirmBlog(blogObject)
    //   return request.then(res => setId(res)).catch(err => err.response.data)

    // }
  if (token) {
    return (
      <div>
        <User 
        name={token.name}
        deleteToken={e => setToken(e)}
        />
      <Notification style={StatusMessage} message={ErrorMessage} />

        <Toggable
        buttonLabel='Create Blog'
        >
        <FormBlogCreate 
        create={addNewBlog}
        authorName={token.name}
        />
        </Toggable>
        <Toggable 
        buttonLabel='Blogs'>
          <button onClick={handelFilter}>filtrar</button>
        <h2>blogs</h2>
        {
          
          blogs && blogs.length > 0
          ?blogs.map(blog =>
          {
          return<Blog 
          key={blog.id} 
          blog={blog} 
          updateLikes={upLike}  
          deleteBlog={delBlog}
          user={id}
          >

          </Blog>
          }
        )
        :<h3>No hay blogs</h3>
        }
        </Toggable>
      </div>
    )
  }else{
    return (
      <div>
      <Notification style={StatusMessage} message={ErrorMessage} />
        <FormLogin 
      login={userLogin}
      newToken={e => setToken(e)}/>
      </div>
   )
  }
}

export default App