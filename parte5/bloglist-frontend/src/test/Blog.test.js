import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent , screen} from '@testing-library/react'
import Blog from '../components/Blog'

describe('<Blog />', ()  => { 
    let component
    const blog =  {
        title: 'Go To Statement Considered Harmful',
        author: 'Edsger W. Dijkstra',
        url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
        likes: 5,
      }
      const handelLikes = jest.fn()
      const handelDelete = jest.fn()
      beforeEach(() =>{
        component = render(<Blog  blog={blog} deleteBlog={e => handelDelete(e)} updateLikes={e => handelLikes(e)}/>)
    })
    test('Verify that it shows title and author', () => { 
        const div = component.container.querySelector('.principalInfo')
        const divInfo = component.container.querySelector('.togglableContent')
        expect(div).toHaveTextContent(blog.title)
        expect(divInfo).toHaveStyle('display: none')
     })
    test('Verify that it shows url and likes', () => { 
      const button = component.getByText('show...')
    const div = component.container.querySelector('.togglableContent')
      
    expect(div).toHaveStyle('display: none')
    
    fireEvent.click(button)
    expect(div).not.toHaveStyle('display: none')
      expect(component.container.querySelector('.contentMoreInfo')).toBeDefined()
     })
     test('Most liked action test ', () => {
        const button = component.getByText('show...')
        fireEvent.click(button)
        const buttonLike = component.container.querySelector('.ButtonMoreLike')
        fireEvent.click(buttonLike)
        fireEvent.click(buttonLike)
        expect(handelLikes.mock.calls).toHaveLength(2)
      })
      test('Action Test Delete Blog', () => { 
        window.confirm = jest.fn(() => true)
        const buttonDelete = component.getByText('Delete')
        window.confirm()
        fireEvent.click(buttonDelete)
        expect(handelDelete.mock.calls).toHaveLength(1)
       })
 })