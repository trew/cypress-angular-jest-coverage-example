# CypressAngularJestCoverageExample

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.19.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Jest Installation

https://github.com/just-jeb/angular-builders/tree/master/packages/jest

## Cypress Coverage Installation

https://github.com/skylock/cypress-angular-coverage-example

## Merging Coverage

https://github.com/bahmutov/cypress-and-jest

## Running

Run the following:

```
yarn install
yarn test --coverage
yarn cypress run
yarn coverage-report
open ./coverage/combined/lcov-report/src/app/app.component.ts.html
```

You will see `Cannot read property 'start' of undefined`.

The reason is that the coverage produced by jest and cypress is different. Compare the original files and you will see that :

```
open ./coverage/jest/lcov-report/app.component.ts.html
open ./coverage/cypress/lcov-report/src/app/app.component.ts.html
```

File produced by cypress has 2 lines and 3 statements.
File produced by jest has 3 lines and 5 statements.

They cannot be combined.
