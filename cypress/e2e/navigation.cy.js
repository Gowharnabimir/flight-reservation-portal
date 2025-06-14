import HomePage from '../support/page-objects/HomePage'

describe('Navigation Tests', () => {
  let homePage

  beforeEach(() => {
    homePage = new HomePage()
    homePage.visit()
  })

  it('should load home page successfully', { tags: '@smoke' }, () => {
    homePage.verifyHomePageLoaded()
    homePage.verifyPageTitle('MakeMyTrip')
  })

  it('should navigate between different travel options', { tags: '@regression' }, () => {
    // Test Flights tab
    homePage.clickFlightsTab()
    homePage.verifyHomePageLoaded()

    // Test Hotels tab
    homePage.clickHotelsTab()
    homePage.verifyHomePageLoaded()

    // Test Trains tab
    homePage.clickTrainsTab()
    homePage.verifyHomePageLoaded()

    // Test Bus tab
    homePage.clickBusTab()
    homePage.verifyHomePageLoaded()

    // Test Cabs tab
    homePage.clickCabsTab()
    homePage.verifyHomePageLoaded()
  })

  it('should allow flight trip type selection', { tags: '@regression' }, () => {
    homePage.clickFlightsTab()

    // Test One Way selection
    homePage.selectOneWayTrip()

    // Test Round Trip selection
    homePage.selectRoundTrip()

    // Test Multi City selection
    homePage.selectMultiCityTrip()
  })

  it('should verify page title and basic elements', { tags: '@smoke' }, () => {
    cy.title().should('contain', 'MakeMyTrip')
    homePage.verifyHomePageLoaded()
  })
})