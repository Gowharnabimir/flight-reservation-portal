<<<<<<< HEAD
# flight-reservation-portal
=======
>>>>>>> 8b0b22e (added cypress project)
# MakeMyTrip Cypress Automation Framework

A comprehensive Cypress automation framework for testing MakeMyTrip website functionality using modern JavaScript/TypeScript and the Page Object Model design pattern.

## 🚀 Features

- **Modern Cypress Framework** with latest best practices
- **Page Object Model (POM)** design pattern for better maintainability
- **Custom Commands** for reusable test actions
- **Cross-browser testing** support (Chrome, Firefox, Edge)
- **Parallel test execution** capability
- **Comprehensive reporting** with Mochawesome
- **Test data management** through fixtures
- **Responsive design testing** across multiple viewports
- **CI/CD ready** configuration

## 📁 Project Structure

```
cypress/
├── e2e/
│   ├── navigation.cy.js           # Navigation test cases
│   ├── flight-search.cy.js        # Flight search test cases
│   ├── hotel-search.cy.js         # Hotel search test cases
│   └── smoke-tests.cy.js          # Smoke test suite
├── support/
│   ├── page-objects/
│   │   ├── HomePage.js             # Home page object model
│   │   ├── FlightSearchResultsPage.js
│   │   ├── HotelsPage.js
│   │   └── HotelSearchResultsPage.js
│   ├── commands.js                 # Custom Cypress commands
│   └── e2e.js                      # Support file with global config
├── fixtures/
│   └── testData.json               # Test data and configurations
├── screenshots/                    # Test failure screenshots
├── videos/                         # Test execution videos
└── reports/                        # Test execution reports
```

## 🛠️ Prerequisites

- Node.js 16 or higher
- npm or yarn package manager
- Modern web browser (Chrome, Firefox, or Edge)

## ⚙️ Setup Instructions

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Verify Cypress installation**
   ```bash
   npx cypress verify
   ```

## 🏃‍♂️ Running Tests

### Interactive Mode (Cypress Test Runner)
```bash
npm run cy:open
```

### Headless Mode
```bash
npm run cy:run
```

### Browser-specific execution
```bash
npm run cy:run:chrome
npm run cy:run:firefox
npm run cy:run:edge
```

### Run with headed browser
```bash
npm run cy:run:headed
```

### Run specific test files
```bash
npx cypress run --spec "cypress/e2e/smoke-tests.cy.js"
```

### Run tests with tags
```bash
npx cypress run --env grepTags="@smoke"
npx cypress run --env grepTags="@regression"
```

## 📊 Test Reports

### Generate Mochawesome Reports
```bash
npm run report
npm run report:merge
npm run report:generate
```

Reports are generated in:
- **Mochawesome HTML Report**: `cypress/reports/index.html`
- **Screenshots**: `cypress/screenshots/`
- **Videos**: `cypress/videos/`

## 🧪 Test Cases Covered

### Smoke Tests ✅
- Home page load verification
- Navigation tabs visibility
- Login popup handling
- Responsive design testing

### Flight Search Tests ✅
- One-way flight search
- Round-trip flight search
- Flight results sorting (price, duration, departure)
- Flight booking flow initiation
- Multiple search scenarios

### Hotel Search Tests ✅
- Navigation to Hotels section
- Hotel search with single guest
- Hotel search with multiple guests and rooms
- Hotel results sorting (price, rating)
- Hotel details view

### Navigation Tests ✅
- Tab navigation (Flights, Hotels, Trains, Bus, Cabs)
- Flight trip type selection (One-way, Round-trip, Multi-city)
- Page title and basic elements verification

## 🔧 Configuration

### Cypress Configuration (`cypress.config.js`)
```javascript
{
  baseUrl: 'https://www.makemytrip.com',
  viewportWidth: 1280,
  viewportHeight: 720,
  defaultCommandTimeout: 10000,
  pageLoadTimeout: 30000,
  video: true,
  screenshotOnRunFailure: true
}
```

### Test Data Configuration (`cypress/fixtures/testData.json`)
- Cities for flight and hotel searches
- Date ranges for bookings
- Guest configurations (single, couple, family, group)

## 🏗️ Framework Architecture

### Page Object Model
- Each page is represented by a separate class
- Page elements are defined using getters
- Page actions are implemented as methods
- Promotes code reusability and maintainability

### Custom Commands (`cypress/support/commands.js`)
- `cy.closeLoginPopup()` - Handle login popup
- `cy.selectCity()` - Select city with autocomplete
- `cy.selectDate()` - Select date from calendar
- `cy.waitForSearchResults()` - Wait for search results
- `cy.takeScreenshot()` - Take timestamped screenshots

### Test Organization
- **Smoke Tests**: Critical functionality verification
- **Regression Tests**: Comprehensive feature testing
- **Tag-based execution**: Run specific test categories

## 🔍 Best Practices Implemented

1. **Page Object Model** for better code organization
2. **Custom Commands** for reusable actions
3. **Explicit waits** for reliable element interactions
4. **Test data externalization** through fixtures
5. **Comprehensive error handling** and retries
6. **Cross-browser compatibility** testing
7. **Responsive design** verification
8. **Detailed reporting** with screenshots and videos

## 🚨 Troubleshooting

### Common Issues

1. **Element not found**
   - Check if selectors are correct
   - Verify page has loaded completely
   - Increase timeout values if necessary

2. **Tests failing intermittently**
   - Add appropriate waits using custom commands
   - Check for dynamic content loading
   - Verify test data validity

3. **Login popup interference**
   - Use `cy.closeLoginPopup()` command
   - Handle popups in beforeEach hooks

### Debug Mode
```bash
npx cypress run --headed --no-exit
```

## 📈 CI/CD Integration

### GitHub Actions Example
```yaml
name: Cypress Tests
on: [push, pull_request]
jobs:
  cypress-run:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: cypress-io/github-action@v5
        with:
          build: npm install
          start: npm start
          wait-on: 'http://localhost:3000'
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Add tests for new functionality
4. Ensure all tests pass
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🔗 Useful Links

- [Cypress Documentation](https://docs.cypress.io/)
- [Page Object Model Best Practices](https://docs.cypress.io/guides/references/best-practices)
<<<<<<< HEAD
- [Mochawesome Reporter](https://github.com/adamgruber/mochawesome)
=======
- [Mochawesome Reporter](https://github.com/adamgruber/mochawesome)
>>>>>>> 8b0b22e (added cypress project)
