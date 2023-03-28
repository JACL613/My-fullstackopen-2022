import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent } from '@testing-library/react'
import FormBlogCreate from '../components/FormBlogCreate';

describe('<FormBlogCreate />', () => {
    let componente
    const blog =  {
        title: 'Go To Statement Considered Harmful',
        author: 'Edsger W. Dijkstra',
        url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
        likes: 5,
      }
      const handelCreate = jest.fn()
      beforeEach(( ) => {
        componente = render(<FormBlogCreate create={e => handelCreate(e)}/>)
      })
      test('Try creating a new blog', () => { 
        const form = componente.container.querySelector('form')
       const inputTitle = componente.container.querySelector('#title') 
       const inputUrl = componente.container.querySelector('#url') 

       fireEvent.change(inputTitle , {
        target: {value: blog.title}
       })
       
       fireEvent.change(inputUrl , {
        target: {value: blog.url}
       })
       fireEvent.submit(form)
       expect(handelCreate.mock.calls).toHaveLength(1)
       expect(handelCreate.mock.calls[0][0].title).toBe(blog.title)
       })
});
