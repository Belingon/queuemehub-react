# Queuemehub
Front end project for the QMeHub app.

## Building on Windows
NPM on Windows may have trouble downloading dependencies. This appears to be due to the length of directory names created in the default NPM Cache location. To fix this problem run:
```
npm config set cache C:\npm --global
```

## Install Dependencies
command: yarn install  


## Create Build
When kicking off a build you will start a series of sequential actions:
1. All tests for this project will run
2. The current build directory will be deleted
3. A new build directory will be created
4. The script build.js will be executed to create the artifact

command:  `yarn build`  

## Running the dev server
The dev server allows for hot reloading of the application as changes are made. Running the application in dev mode will also run the jest test suite. Each change that is made will update on the dev server as well as start the jest test suite. The success or failure of tests will not effect the reloading of the dev server.

When starting the dev server you will kick of a series concurrent actions:
1. The start message will appear
2. Jest test runner in watch mode will begin
3. The dev server will start listening on port 3000

command: `yarn start`  


## Test Commands
- `yarn test` will run all tests in the application
- `yarn test:cover` will run all tests in the application and generate a coverage report both in the console and in the coverage directory
- `yarn test:watch` will run all tests in the application and continue to listen for code changes. The is a non-terminating process which can be kept on to run the test suite as you develop

## Github Link
https://github.com/Belingon/queuemehub-react 

