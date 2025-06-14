class HotelSearchResultsPage {
  // Selectors
  get hotelResults() { return cy.get('[data-cy="hotel-card"], .hotel-card') }
  get hotelNames() { return cy.get('.hotelName, h3') }
  get hotelPrices() { return cy.get('.price, .hotel-price') }
  get hotelRatings() { return cy.get('.rating, .hotel-rating') }
  get sortByPrice() { return cy.get('span:contains("Price - Low to High")').first() }
  get sortByRating() { return cy.get('span:contains("User Rating")').first() }
  get viewDetailsButtons() { return cy.get('button:contains("View Details")') }
  
  // Actions
  waitForResults() {
    cy.waitForSearchResults()
    return this
  }
  
  sortByPrice() {
    this.sortByPrice.click()
    cy.wait(2000)
    return this
  }
  
  sortByRating() {
    this.sortByRating.click()
    cy.wait(2000)
    return this
  }
  
  clickFirstHotelViewDetails() {
    this.viewDetailsButtons.first().click()
    return this
  }
  
  // Assertions
  verifyHotelResultsDisplayed() {
    this.hotelResults.should('be.visible')
    this.hotelResults.should('have.length.greaterThan', 0)
    return this
  }
  
  getNumberOfResults() {
    return this.hotelResults.its('length')
  }
  
  getAllHotelNames() {
    return this.hotelNames.then($names => {
      return Array.from($names, el => el.innerText)
    })
  }
  
  getAllHotelPrices() {
    return this.hotelPrices.then($prices => {
      return Array.from($prices, el => el.innerText)
    })
  }
}

export default HotelSearchResultsPage