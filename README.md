#Automated UI testing using Playwright

##Setup enviroment
bash
#Install dependencies
npm install
#Playwright browser installation
npx playwright install

##Running test cases
bash
#Run all test cases 
npx playwright test

#Run a specific test file
npx playwright test PositiveSinglish.spec.js

#Run tests with the browser window visible
npx playwright test --headed

#Open the local web server
npx playwright show-report

#Run tests using UI mode
npx playwright test --ui
