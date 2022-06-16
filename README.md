This is a Playwright project by Alexander Kulagin

## Setup

1. Clone the repo and run `npm install`
2. Take a look to `package.json` and make sure all dependencies are installed correctly.

### Run all tests 

Example of script:
`npx playwright test`
This script will run all available test cases

All available scripts are in `package.json`.
Example:
To run all test cases - `npm test`

### Run the specific 'spec'

Example of script:
`npx playwright test mainFlow`
This script will run all available test cases in mainFlow.spec file

### Run the tests in debug mode

Example of script:
`npx playwright test --debug`
This script will run all available test sequentially despite the fact that the configuration has multiple threads
