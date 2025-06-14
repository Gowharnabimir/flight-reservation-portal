import HomePage from '../support/page-objects/HomePage'
import HotelsPage from '../support/page-objects/HotelsPage'
import HotelSearchResultsPage from '../support/page-objects/HotelSearchResultsPage'

describe('Hotel Search Tests', () => {
  let homePage
  let hotelsPage
  let hotelResultsPage

  beforeEach(() => {
    homePage = new HomePage()
    hotelsPage = new HotelsPage()
    hotelResultsPage = new HotelSearchResultsPage()
    homePage.visit()
  })

  it('should navigate to Hotels section', { tags: '@smoke' }, () => {
    homePage.clickHotelsTab()
    hotelsPage.verifyHotelsPageLoaded()
  })

  it('should search for hotels in a city', { tags: '@regression' }, () => {
    cy.fixture('testData').then((data) => {
      homePage.clickHotelsTab()

      hotelsPage
        .enterCity(data.cities.hotels[0])
        .selectCheckInDate(data.dates.checkin[0])
        .selectCheckOutDate(data.dates.checkout[0])
        .selectRoomsAndGuests(
          data.guests.couple.adults,
          data.guests.couple.children,
          data.guests.couple.rooms
        )
        .clickSearchButton()

      hotelResultsPage
        .waitForResults()
        .verifyHotelResultsDisplayed()

      hotelResultsPage.getNumberOfResults().should('be.greaterThan', 0)
    })
  })

  it('should search for hotels with multiple guests', { tags: '@regression' }, () => {
    cy.fixture('testData').then((data) => {
      homePage.clickHotelsTab()

      hotelsPage
        .enterCity(data.cities.hotels[1])
        .selectCheckInDate(data.dates.checkin[1])
        .selectCheckOutDate(data.dates.checkout[1])
        .selectRoomsAndGuests(
          data.guests.group.adults,
          data.guests.group.children,
          data.guests.group.rooms
        )
        .clickSearchButton()

      hotelResultsPage
        .waitForResults()
        .verifyHotelResultsDisplayed()
    })
  })

  it('should sort hotel search results', { tags: '@regression' }, () => {
    cy.fixture('testData').then((data) => {
      homePage.clickHotelsTab()

      hotelsPage
        .enterCity(data.cities.hotels[2])
        .selectCheckInDate(data.dates.checkin[0])
        .selectCheckOutDate(data.dates.checkout[0])
        .selectRoomsAndGuests(
          data.guests.single.adults,
          data.guests.single.children,
          data.guests.single.rooms
        )
        .clickSearchButton()

      hotelResultsPage
        .waitForResults()
        .verifyHotelResultsDisplayed()

      // Test sorting by price
      hotelResultsPage.sortByPrice()

      // Test sorting by rating
      hotelResultsPage.sortByRating()
    })
  })

  it('should view hotel details', { tags: '@regression' }, () => {
    cy.fixture('testData').then((data) => {
      homePage.clickHotelsTab()

      hotelsPage
        .enterCity(data.cities.hotels[3])
        .selectCheckInDate(data.dates.checkin[2])
        .selectCheckOutDate(data.dates.checkout[2])
        .selectRoomsAndGuests(
          data.guests.family.adults,
          data.guests.family.children,
          data.guests.family.rooms
        )
        .clickSearchButton()

      hotelResultsPage
        .waitForResults()
        .verifyHotelResultsDisplayed()
        .clickFirstHotelViewDetails()
    })
  })

  it('should handle family hotel search', { tags: '@regression' }, () => {
    cy.fixture('testData').then((data) => {
      homePage.clickHotelsTab()

      hotelsPage
        .enterCity(data.cities.hotels[4])
        .selectCheckInDate(data.dates.checkin[1])
        .selectCheckOutDate(data.dates.checkout[1])
        .selectRoomsAndGuests(
          data.guests.family.adults,
          data.guests.family.children,
          data.guests.family.rooms
        )
        .clickSearchButton()

      hotelResultsPage
        .waitForResults()
        .verifyHotelResultsDisplayed()

      // Verify hotel names and prices are displayed
      hotelResultsPage.getAllHotelNames().should('have.length.greaterThan', 0)
      hotelResultsPage.getAllHotelPrices().should('have.length.greaterThan', 0)
    })
  })
})