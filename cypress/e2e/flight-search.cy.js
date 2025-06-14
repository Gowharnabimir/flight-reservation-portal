import HomePage from '../support/page-objects/HomePage'
import FlightSearchResultsPage from '../support/page-objects/FlightSearchResultsPage'

describe('Flight Search Tests', () => {
  let homePage
  let flightResultsPage

  beforeEach(() => {
    homePage = new HomePage()
    flightResultsPage = new FlightSearchResultsPage()
    homePage.visit()
  })

  it('should search for one-way flights', { tags: '@smoke' }, () => {
    cy.fixture('testData').then((data) => {
      homePage
        .clickFlightsTab()
        .selectOneWayTrip()
        .enterFromCity(data.cities.from[0])
        .enterToCity(data.cities.to[0])
        .selectDepartureDate(data.dates.departure[0])
        .clickSearchButton()

      flightResultsPage
        .waitForResults()
        .verifyFlightResultsDisplayed()
        .verifyFlightPricesDisplayed()

      flightResultsPage.getNumberOfResults().should('be.greaterThan', 0)
    })
  })

  it('should search for round-trip flights', { tags: '@regression' }, () => {
    cy.fixture('testData').then((data) => {
      homePage
        .clickFlightsTab()
        .selectRoundTrip()
        .enterFromCity(data.cities.from[2])
        .enterToCity(data.cities.to[2])
        .selectDepartureDate(data.dates.departure[1])
        .selectReturnDate(data.dates.return[1])
        .clickSearchButton()

      flightResultsPage
        .waitForResults()
        .verifyFlightResultsDisplayed()
        .verifyFlightPricesDisplayed()

      flightResultsPage.getNumberOfResults().should('be.greaterThan', 0)
    })
  })

  it('should sort flight search results', { tags: '@regression' }, () => {
    cy.fixture('testData').then((data) => {
      homePage
        .clickFlightsTab()
        .selectOneWayTrip()
        .enterFromCity(data.cities.from[1])
        .enterToCity(data.cities.to[3])
        .selectDepartureDate(data.dates.departure[2])
        .clickSearchButton()

      flightResultsPage
        .waitForResults()
        .verifyFlightResultsDisplayed()

      // Test sorting by price
      flightResultsPage.sortByPrice()
      flightResultsPage.getFirstFlightPrice().should('not.be.empty')

      // Test sorting by duration
      flightResultsPage.sortByDuration()
    })
  })

  it('should initiate flight booking flow', { tags: '@regression' }, () => {
    cy.fixture('testData').then((data) => {
      homePage
        .clickFlightsTab()
        .selectOneWayTrip()
        .enterFromCity(data.cities.from[3])
        .enterToCity(data.cities.to[1])
        .selectDepartureDate(data.dates.departure[3])
        .clickSearchButton()

      flightResultsPage
        .waitForResults()
        .verifyFlightResultsDisplayed()
        .clickFirstFlightViewPrices()
    })
  })

  it('should handle multiple flight searches', { tags: '@regression' }, () => {
    cy.fixture('testData').then((data) => {
      // First search
      homePage
        .clickFlightsTab()
        .selectOneWayTrip()
        .enterFromCity(data.cities.from[0])
        .enterToCity(data.cities.to[0])
        .selectDepartureDate(data.dates.departure[0])
        .clickSearchButton()

      flightResultsPage
        .waitForResults()
        .verifyFlightResultsDisplayed()

      // Navigate back and perform second search
      cy.go('back')
      cy.waitForPageLoad()

      homePage
        .enterFromCity(data.cities.from[1])
        .enterToCity(data.cities.to[1])
        .selectDepartureDate(data.dates.departure[1])
        .clickSearchButton()

      flightResultsPage
        .waitForResults()
        .verifyFlightResultsDisplayed()
    })
  })
})