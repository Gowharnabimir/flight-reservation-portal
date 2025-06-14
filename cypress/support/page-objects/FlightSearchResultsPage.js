class FlightSearchResultsPage {
  // Selectors
  get flightResults() { return cy.get('.listingCard, [data-cy="flight-card"]') }
  get flightPrices() { return cy.get('.blackText.fontSize18.blackFont, .price') }
  get sortByPrice() { return cy.get('span:contains("Price")').first() }
  get sortByDuration() { return cy.get('span:contains("Duration")').first() }
  get sortByDeparture() { return cy.get('span:contains("Departure")').first() }
  get bookNowButtons() { return cy.get('button:contains("Book Now")') }
  get viewPricesButtons() { return cy.get('button:contains("View Prices")') }
  get flightDetails() { return cy.get('.makeFlex.hrtlCenter, .flight-details') }
  
  // Actions
  waitForResults() {
    cy.waitForSearchResults()
    return this
  }
  
  sortByPrice() {
    this.sortByPrice.click()
    cy.wait(2000) // Wait for sorting to complete
    return this
  }
  
  sortByDuration() {
    this.sortByDuration.click()
    cy.wait(2000)
    return this
  }
  
  sortByDeparture() {
    this.sortByDeparture.click()
    cy.wait(2000)
    return this
  }
  
  clickFirstFlightBookNow() {
    this.bookNowButtons.first().click()
    return this
  }
  
  clickFirstFlightViewPrices() {
    this.viewPricesButtons.first().click()
    return this
  }
  
  // Assertions
  verifyFlightResultsDisplayed() {
    this.flightResults.should('be.visible')
    this.flightResults.should('have.length.greaterThan', 0)
    return this
  }
  
  verifyFlightPricesDisplayed() {
    this.flightPrices.should('be.visible')
    this.flightPrices.should('have.length.greaterThan', 0)
    return this
  }
  
  getNumberOfResults() {
    return this.flightResults.its('length')
  }
  
  getFirstFlightPrice() {
    return this.flightPrices.first().invoke('text')
  }
  
  getAllFlightPrices() {
    return this.flightPrices.then($prices => {
      return Array.from($prices, el => el.innerText)
    })
  }
}

export default FlightSearchResultsPage