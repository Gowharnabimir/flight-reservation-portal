class HotelsPage {
  // Selectors
  get cityInput() { return cy.get('#city, [data-cy="city"]') }
  get checkInDate() { return cy.get('[data-cy="checkin"], span:contains("Check-in")').first() }
  get checkOutDate() { return cy.get('[data-cy="checkout"], span:contains("Check-out")').first() }
  get roomsAndGuestsSelector() { return cy.get('span:contains("Rooms & Guests")').first() }
  get searchButton() { return cy.get('#hsw_search_button, [data-cy="submit"]') }
  get adultsIncrement() { return cy.get('[data-cy="adults-increment"]') }
  get childrenIncrement() { return cy.get('[data-cy="children-increment"]') }
  get roomsIncrement() { return cy.get('[data-cy="rooms-increment"]') }
  get applyButton() { return cy.get('button:contains("APPLY")') }
  
  // Actions
  enterCity(city) {
    cy.selectCity('#city, [data-cy="city"]', city)
    return this
  }
  
  selectCheckInDate(date) {
    cy.selectDate('[data-cy="checkin"], span:contains("Check-in")', date)
    return this
  }
  
  selectCheckOutDate(date) {
    cy.selectDate('[data-cy="checkout"], span:contains("Check-out")', date)
    return this
  }
  
  selectRoomsAndGuests(adults, children, rooms) {
    this.roomsAndGuestsSelector.click()
    
    // Add adults (default is 1, so add adults-1 times)
    for (let i = 1; i < adults; i++) {
      this.adultsIncrement.click()
    }
    
    // Add children
    for (let i = 0; i < children; i++) {
      this.childrenIncrement.click()
    }
    
    // Add rooms (default is 1, so add rooms-1 times)
    for (let i = 1; i < rooms; i++) {
      this.roomsIncrement.click()
    }
    
    this.applyButton.click()
    return this
  }
  
  clickSearchButton() {
    this.searchButton.click()
    return this
  }
  
  // Assertions
  verifyHotelsPageLoaded() {
    this.cityInput.should('be.visible')
    return this
  }
}

export default HotelsPage