class HomePage {
  // Selectors
  get flightsTab() { return cy.get('[data-cy="menu_Flights"], span:contains("Flights")').first() }
  get hotelsTab() { return cy.get('[data-cy="menu_Hotels"], span:contains("Hotels")').first() }
  get trainsTab() { return cy.get('[data-cy="menu_Trains"], span:contains("Trains")').first() }
  get busTab() { return cy.get('[data-cy="menu_Bus"], span:contains("Bus")').first() }
  get cabsTab() { return cy.get('[data-cy="menu_Cabs"], span:contains("Cabs")').first() }
  
  get fromCityInput() { return cy.get('#fromCity, [data-cy="fromCity"]') }
  get toCityInput() { return cy.get('#toCity, [data-cy="toCity"]') }
  get departureDate() { return cy.get('[data-cy="departure"], span:contains("Departure")').first() }
  get returnDate() { return cy.get('[data-cy="return"], span:contains("Return")').first() }
  get searchButton() { return cy.get('[data-cy="submit"], a:contains("Search")').first() }
  
  get oneWayOption() { return cy.get('[data-cy="oneWayTrip"], li:contains("One Way")').first() }
  get roundTripOption() { return cy.get('[data-cy="roundTrip"], li:contains("Round Trip")').first() }
  get multiCityOption() { return cy.get('[data-cy="mulitiCityTrip"], li:contains("Multi City")').first() }
  
  // Actions
  visit() {
    cy.visit('/')
    cy.waitForPageLoad()
    this.closeLoginPopupIfPresent()
    return this
  }
  
  closeLoginPopupIfPresent() {
    cy.closeLoginPopup()
    return this
  }
  
  clickFlightsTab() {
    this.flightsTab.click()
    return this
  }
  
  clickHotelsTab() {
    this.hotelsTab.click()
    return this
  }
  
  clickTrainsTab() {
    this.trainsTab.click()
    return this
  }
  
  clickBusTab() {
    this.busTab.click()
    return this
  }
  
  clickCabsTab() {
    this.cabsTab.click()
    return this
  }
  
  selectOneWayTrip() {
    this.oneWayOption.click()
    return this
  }
  
  selectRoundTrip() {
    this.roundTripOption.click()
    return this
  }
  
  selectMultiCityTrip() {
    this.multiCityOption.click()
    return this
  }
  
  enterFromCity(city) {
    cy.selectCity('#fromCity, [data-cy="fromCity"]', city)
    return this
  }
  
  enterToCity(city) {
    cy.selectCity('#toCity, [data-cy="toCity"]', city)
    return this
  }
  
  selectDepartureDate(date) {
    cy.selectDate('[data-cy="departure"], span:contains("Departure")', date)
    return this
  }
  
  selectReturnDate(date) {
    cy.selectDate('[data-cy="return"], span:contains("Return")', date)
    return this
  }
  
  clickSearchButton() {
    this.searchButton.click()
    return this
  }
  
  // Assertions
  verifyHomePageLoaded() {
    this.flightsTab.should('be.visible')
    cy.title().should('contain', 'MakeMyTrip')
    return this
  }
  
  verifyPageTitle(expectedTitle) {
    cy.title().should('contain', expectedTitle)
    return this
  }
}

export default HomePage