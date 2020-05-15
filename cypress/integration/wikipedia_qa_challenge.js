describe('Wikipedia functionality', () => {

  beforeEach(() => {
    cy.visit('https://en.wikipedia.org')
  })

  after(() => {
    cy.visit('https://en.wikipedia.org/wiki/Special:UserLogout')
  
    cy.get('button.oo-ui-inputWidget-input.oo-ui-buttonElement-button')
      .click()
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

  // CHALLENGE 4: ensure unsuccessful login attempt scenarios are handled correctly
  it('Handle unsuccessful login attempts', () => {
  // TODO: solution to go here
  })

  // CHALLENGE 5: ensure you can log in with provided credientials successfully
  it('Log successfully', () => {
  // TODO: solution to go here
  })

  // CHALLENGE 6: ensure you can successfully search for 'Bill Murray' in the search bar and the correct information is returned
  it('Successful Bill Murray search', () => {
  // TODO: solution to go here
  })
  
  // CHALLENGE 7: make the login steps required for challenge 4 reusable by writing them as a Cypress command (support/commands.js)
  //              use this new command in your solution for CHALLENGE 5
  
  // CHALLENGE 8: improve the after hook so that the 'logout' button is only clicked if it actually exists 
  //              (so we only try to click the button if Cyress is logged in)
})