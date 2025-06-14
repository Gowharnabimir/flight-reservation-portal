import HomePage from '../support/page-objects/HomePage'

describe('Smoke Tests', () => {
  let homePage

  beforeEach(() => {
    homePage = new HomePage()
  })

  it('should load MakeMyTrip homepage', { tags: '@smoke' }, () => {
    homePage.visit()
    homePage.verifyHomePageLoaded()
    homePage.verifyPageTitle('MakeMyTrip')
  })

  it('should display all main navigation tabs', { tags: '@smoke' }, () => {
    homePage.visit()
    
    // Verify all tabs are visible
    homePage.flightsTab.should('be.visible')
    homePage.hotelsTab.should('be.visible')
    homePage.trainsTab.should('be.visible')
    homePage.busTab.should('be.visible')
    homePage.cabsTab.should('be.visible')
  })

  it('should handle login popup gracefully', { tags: '@smoke' }, () => {
    homePage.visit()
    // Login popup handling is done in the visit method
    homePage.verifyHomePageLoaded()
  })

  it('should have responsive design', { tags: '@smoke' }, () => {
    // Test different viewport sizes
    const viewports = [
      { width: 1920, height: 1080 }, // Desktop
      { width: 1366, height: 768 },  // Laptop
      { width: 768, height: 1024 },  // Tablet
      { width: 375, height: 667 }    // Mobile
    ]

    viewports.forEach(viewport => {
      cy.viewport(viewport.width, viewport.height)
      homePage.visit()
      homePage.verifyHomePageLoaded()
    })
  })
})