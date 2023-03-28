const baseUrl = 'http://localhost:3003/api/'

describe('template spec', () => {
  const user = {
    name: 'Alexander',
    username: 'rootTest',
    password: 'sekretest'
  } 
  const userDos = {
    name: 'Alex',
    username: 'root',
    password: 'sekret'
  }
  const blog =  {
    title: 'React patterns',
    author: user.name,
    url: 'https://reactpatterns.com/',
    likes: 0
  }
  const blogDos =  {
    title: 'React patterns',
    author: userDos.name,
    url: 'https://reactpatterns.com/',
    likes: 0
  }
  beforeEach(function () {
      cy.request('POST', `${baseUrl}testing/reset`)
 
    cy.request('POST', `${baseUrl}users/`, user) 
    cy.request('POST', `${baseUrl}users/`, userDos) 
    cy.visit('http://localhost:3000')
  })
  it('login', function() {
    cy.contains('Login Form')
    cy.get('#username').type(user.username)
    cy.get('#password').type(user.password)
    cy.get('#login-button').click()
    cy.contains(`Inicio de sesion de: ${user.name}`)

  })
  it('login failure', function() {
    cy.contains('Login Form')
    cy.get('#username').type(user.username)
    cy.get('#password').type('farsa')
    cy.get('#login-button').click()
    cy.contains('Fallo: invalid username or password')

  })
  describe('After login', () => { 
   beforeEach(function () {
    cy.request('POST', `${baseUrl}login`, { 
      username: user.username,
      password: user.password
    }).then((respuesta) => {
      if(!respuesta.error){
        window.localStorage.setItem(
          'loggedBlogappUser', JSON.stringify(respuesta.body)
        )
      }
    })
   
    cy.visit('http://localhost:3000')
    
  })
  it('create new blog', function() {
    
    cy.contains('Create Blog').click()
    cy.get('#title').type(blog.title)
    cy.get('#url').type(blog.url)
    cy.get('#createBlog-button').click()
    cy.contains(`se guardo del autor: ${blog.author}`)
 
        
  });
    describe('Probando acciones de blogs', function(){ 
        beforeEach(function () {
        const loggedUserJSON = window.localStorage.getItem('loggedBlogappUser')
         if (loggedUserJSON) {
          let credencialUserDos = 'nada aun'
          const user = JSON.parse(loggedUserJSON)

          // Para tomar las credenciales de otro usuario para comparar
          cy.request('POST', `${baseUrl}login`, { 
            username: userDos.username,
            password: userDos.password
          }).then((respuesta) => {
            if(!respuesta.error){
              cy.request({
                url: `${baseUrl}blogs/`,
                method: 'POST',
                body: blogDos,
                headers: { Authorization: `Bearer ${respuesta.body.token}` },
    
              })
            }
          })
          cy.request({
            url: `${baseUrl}blogs/`,
            method: 'POST',
            body: blog,
            headers: { Authorization: `Bearer ${user.token}` },

          })
          
        }
        
        cy.visit('http://localhost:3000')
        })
      
      it('Accion like blog' , function() {

    
        cy.contains('Blogs').click()
        cy.contains(blog.title)
        cy.contains('show...').click()
        cy.contains('like').click()
        cy.contains('Likes:1')
      })
      it('Accion Delete Blog', () => {
        cy.contains('Blogs').click()
        cy.get('.Blog').first().find('.buttonDelete').should('be.disabled')
      });
      it('Action filter by likes', function(){
        cy.contains('Blogs').click()
        cy.get('.Blog').last().find('.buttonShowToggable').click()
        cy.get('.ButtonMoreLike').last().click()
        cy.contains('Likes:1')
        cy.get('.ButtonMoreLike', ).last().click()
        cy.contains('Likes:2')
        cy.get('.Blog').then((response) => {
          cy.contains('filtrar').click()
          cy.get('.Blog').then((newResponse) => {
            cy.wrap(response).its(0).should('eq',newResponse[1])
            cy.log(response, newResponse)

          })

        })
      });
      
     })
   })
  
  
})