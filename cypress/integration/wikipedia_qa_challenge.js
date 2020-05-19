describe('Wikipedia functionality', () => {

  beforeEach(() => {
    cy.visit('https://en.wikipedia.org')
  })

  after(() => {

    if (cy.get('li#pt-logout').should('have.text', 'Log out')) {

    cy.visit('https://en.wikipedia.org/wiki/Special:UserLogout')
  
    cy.get('button.oo-ui-inputWidget-input.oo-ui-buttonElement-button')
      .click()
}
  })

	

  // CHALLENGE 1: ensure the correct homepage welcome message is displayed
  it('Hompage welcome message', () => {
    cy.get('div').contains('Welcome to Wikipedia')
  })

  // CHALLENGE 2: ensure the "Today's featured picture" section actually contains a picture
  it('Today\'s featured picture contains a picture', () => {
    cy.get('div#mp-bottom').find('img')
  }) 
  
  // CHALLENGE 3: ensure the main navigation links display correctly
  it('Main navigation links', () => {
    cy.get('div#p-navigation').find('li').then((links) => {
      cy.wrap(links[0]).should('contain', 'Main page')
      cy.wrap(links[1]).should('contain', 'Contents')
      cy.wrap(links[2]).should('contain', 'Featured content')
      cy.wrap(links[3]).should('contain', 'Current events')
      cy.wrap(links[4]).should('contain', 'Random article')
      cy.wrap(links[5]).should('contain', 'Donate to Wikipedia')
      cy.wrap(links[6]).should('contain', 'Wikipedia store')
    })
  })

Cypress.Commands.add('typeLogin', (user) => {
  cy.get('li#pt-login').click()

  cy.get('input#wpName1')
    .type(user.name)

  cy.get('input#wpPassword1')
    .type(user.password)

  cy.get('button#wpLoginAttempt').click()
})

  // CHALLENGE 4: ensure unsuccessful login attempt scenarios are handled correctly
  it('Handle unsuccessful login attempts', () => {
   
                cy.typeLogin({ name: 'WRONG!', password: 'ALSO_WRONG!' })

		cy.get('.errorbox').contains('Incorrect username or password entered. Please try again.')
		

  })

  // CHALLENGE 5: ensure you can log in with provided credientials successfully
  it('Log successfully', () => {
                cy.typeLogin({ name: 'tristanfrompop', password: 'hello.potential.teammate!' })
		
		cy.get('li#pt-logout').should('have.text', 'Log out')
		cy.get('li#pt-userpage').should('have.text', 'Tristanfrompop')

  })

  // CHALLENGE 6: ensure you can successfully search for 'Bill Murray' in the search bar and the correct information is returned
  it('Successful Bill Murray search', () => {

		cy.get('input#searchInput').type('Bill Murray', { delay: 100 })
		cy.get('input#searchButton').click()
		cy.url().should('include', '/Bill_Murray')
 
  })
  
  // CHALLENGE 7: make the login steps required for challenge 4 reusable by writing them as a Cypress command (support/commands.js)
  //              use this new command in your solution for CHALLENGE 5

  
  // CHALLENGE 8: improve the after hook so that the 'logout' button is only clicked if it actually exists 
  //              (so we only try to click the button if Cyress is logged in)
})