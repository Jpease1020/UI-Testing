
##Compozed Global Lunch and Learn
### CI/CD Acceptance Tests

---
### Acceptance Tests
  * Definition
    * Automated tests ensuring the environment/application is successfully built to allow for manual User Acceptance testing
    * Front end: UI Tests
    * Back end: Smoke/End-to-End Tests

---
### Acceptance Tests
  * CI Pipeline
    * Acceptance tests come before deploying to UAT/TEST environment
      * Assuming DEV --> UAT --> PRE-PROD environments
    * Acceptance tests can be run in DEV environment
    * Ensures environment/application is up and running for manual user acceptance testing to be performed
    * Automated tests that ensure newly deployed code works in environment

---
### Back End
  * Smoke Tests
    * Run after deploying new apps/infrastructure
    * Ensures all back end services wire together successfully
      * Oracle, Cassandra, RabbitMQ, Kafka, etc.

---
### Back End
  * End-to-End Tests
    * Run after new code is deployed
    * Ensures data flows with the right values from beginning to end

---
### Back End
  * Smoke Test Example
    * Trigger: Deployed application with new database connection URL
    * Test: Test application runs and attempts to query database with JDBC template call
    * Results:
      * Success: Retrieves data from JDBC query - Environment is UP!
      * Failure: Connection refused - Environment is DOWN!

---
### Back End
  * End-to-End Example
    * Trigger: Deployed application with code changes for calculations
    * Test: Test application initiates data flow with known data and expects correct values to appear at the end of the flow
    * Results:
      * Success: Data retrieved from end of flow has correct value
      * Failure: Data retrieved from end of flow has incorrect value or data does not appear at the end of the flow

---

### Back End
  * Health Check Endpoint Tests
    * An alternative to Smoke testing
    * Works well on web applications
      * Create a health route which calls each service and posts the status codes to the route.
      * Goes beyond acceptance test functionailty and lends itself well to application support
---
### Back End
  * Health Check Example
    * Trigger: Deployed application
    * Test: Call the Endpoint and check the response is a 200
    * Results:
      * Success: All service calls return 200 - Results in App is HEALTHY!
      * Failure: If one service returns a 500 - App is SICK!

---
### Front End
  * Acceptance Testing of the UI in Compozed is:
    * A subset of true GUI Testing.

    *It should aim to:*

    * Execute the intended functionality of the application using the GUI
      * Screen Navigation
      * Field Validation
      * Screen to screen workflow
    * Check Error Messages are displayed correctly
+++
  *It should not aim to:*

  * Check font sizes, colors, alignment, positioning ....

    These latter aims should be reserved for manual testing. Focusing on the above can lead to brittle tests subject to minor changes in screen design.

    Automated tests are code and should be subject to refactoring as a consequence. Design, review and refactor of DSL code (Domain Specific Language) can reduce the brittleness of test cases.

    _**Am I testing the intent..**_

---
### Acceptance Criteria
  * Every acceptance criteria noted in user story should be covered an acceptance test
  * Adding a map between user story ID and acceptance test cases could offer traceability matrix
---
### Headless vs Std. Browser Tests
##### Std Browser
  * Closer to real life use of the application
  * Chrome & Firefox available
  * Can be tested in the pipeline
  * Can view success & failures as they happen
  * _Slower_
  * _Varying/Maintaining Browser Types & Versions_
  * _IE not available on our platforms_

+++
### Headless vs Std Browser Tests
##### Headless Browser
  * Faster
  * _Further from real life use of the application_
  * _Will not highlight browser differences_

  _Despite the obvious cons, headless currently more widely used because:_
  * Performance
  * Testing focused on the 'intended functionality of the application'

---
### Tools
Tool | Description
------------ | -------------
**Selenium Webdriver** | Accepts commands via a Client API and sends them to a browser. Listens on port 4444
**PhantomJS** | An alternative to the above, not as widely used. Also provides a headless browser which can be used independently
+++
Tool | Description
------------ | -------------
**Protractor** | An end-to-end testing framework, support for Angular
**CodeceptJS** | A promise based UI testing framework providing easy to read testing code
+++
Tool | Description
------------ | -------------
**chai** | Supporting component providing '_expect_' assertion code
**PhantomJS** | A headless browser providing screen capture capability
+++
Tool | Description
------------ | -------------
**Nightmare** | An alternative to PhantomJS
---
### UI Testing Architecture
<img src="./assets/selenium.png" height=500>
---
### Possible Future UI Testing Architecture
<img src="./assets/saucelabs.jpg" height=500>
---
### Live Example Using CodeceptJS
_Recording of sample unit test coding_
[link to "Live" Coding Demo!](file://172.30.23.255/users/localadmin/Public/Acceptance-testing.mov)
---
### CI/CD Acceptance Tests
  * Questions?
