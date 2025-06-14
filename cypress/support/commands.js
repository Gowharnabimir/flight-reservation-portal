// Custom commands for MakeMyTrip automation

// Command to handle login popup
Cypress.Commands.add('closeLoginPopup', () => {
  cy.get('body').then(($body) => {
    if ($body.find('[data-cy="closeModal"]').length > 0) {
      cy.get('[data-cy="closeModal"]').click()
    } else if ($body.find('.commonModal__close').length > 0) {
      cy.get('.commonModal__close').click()
    }
  })
})

// Command to select city with autocomplete
Cypress.Commands.add('selectCity', (inputSelector, city) => {
  cy.get(inputSelector).click()
  cy.get('input[placeholder*="From"], input[placeholder*="To"], input[placeholder*="Enter city"]')
    .type(city, { delay: 100 })
  cy.contains(city).first().click({ force: true })
})

// Command to select date
Cypress.Commands.add('selectDate', (dateSelector, date) => {
  cy.get(dateSelector).click()
  cy.get(`[aria-label*="${date}"]`).first().click()
})

// Command to wait for search results
Cypress.Commands.add('waitForSearchResults', () => {
  cy.get('[data-cy="loader"]', { timeout: 30000 }).should('not.exist')
  cy.get('.listingCard, [data-cy="hotel-card"]', { timeout: 20000 }).should('be.visible')
})

// Command to handle dynamic content loading
Cypress.Commands.add('waitForPageLoad', () => {
  cy.get('body').should('be.visible')
  cy.wait(2000) // Wait for dynamic content
})

// Command to take screenshot with timestamp
Cypress.Commands.add('takeScreenshot', (name) => {
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-')
  cy.screenshot(`${name}-${timestamp}`)
})

// Command to retry action
Cypress.Commands.add('retryAction', (action, maxRetries = 3) => {
  let attempts = 0
  
  const performAction = () => {
    attempts++
    try {
      action()
    } catch (error) {
      if (attempts < maxRetries) {
        cy.wait(1000)
        performAction()
      } else {
        throw error
      }
    }
  }
  
  performAction()
})

// Command to handle network requests
Cypress.Commands.add('interceptSearchRequests', () => {
  cy.intercept('GET', '**/search/**').as('searchRequest')
  cy.intercept('POST', '**/search/**').as('searchPostRequest')
})