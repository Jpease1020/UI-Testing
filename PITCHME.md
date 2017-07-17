
##Compozed Global Lunch and Learn
### CI/CD - Acceptance Testing
---
* Listeners - I encourage you not only to learn what you can from new information and perspectives but also challenge the ideas presented today. XP was derived from people seeing problems in a system and challenging them to make things better.
* Find the balance between trying new things you might disagree with, but also challenge ideas and practices to expose inefficiencies and improve upon them.
---
### CI/DC
  * Continuous Integration and Continuous Delivery/Deployment are two agile practices that merges development with testing and deployment. This allows developers to build code collaboratively, checked for new issues at the time the code is written and test their code in any environment type as often as possible to catch bugs early in the applications development lifecycle.
+++
  * It provides an immediate feedback loop allowing developers to develop, test and incorporate small changes one at a time as soon as the code is written for an individual feature, chore, bug fix or refactor.
---
### Continuous Integration
  * Code is integrated and tested many times a day, one set of changes at a time.  "The main aim of CI is to prevent integration problems, referred to as "integration hell" in early descriptions of XP." - Wikipedia
---
### Continuous Delivery/Deployment
  * Continuous delivery (CD) is a software engineering approach in which teams produce software in short cycles, ensuring that the software can be reliably released at any time. It aims at building, testing, and releasing software faster and more frequently. The approach helps reduce the cost, time, and risk of delivering changes by allowing for more incremental updates to applications in production. A straightforward and repeatable deployment process is important for continuous delivery.
---
### Acceptance Tests
  * Part of the CI/CD pipeline process and the process of TDD (test driven development)
  * Automated tests ensure the application works in all environments allowing for manual User Acceptance testing after each new code addition.
  * The system always improves and never backslides. Each new change should be built upon an already tested and working system.
+++
  * Acceptance testing tests that all units, when used together, work as per the feature's specification in as close to an environment as possible to the production environment.
  * Should be validated on as close to a production environment as practical
+++
  * Along with unit tests, they ensure that new code and changes made by a pair works.
  * Running the full set of unit and integration tests before each integration of new code will show if any test fails, it is that pair’s code that is failing the system and should reduce if not eliminate broken code being pushed through the pipeline.
  * Front end: UI Tests
  * Back end: Smoke Tests & End-to-End Tests
---
#### CI Pipeline
  * Acceptance tests come before deploying to UAT environment
    * Assuming DEV --> UAT --> Prod environments
  * Acceptance tests can be run in local and DEV environment
  * Ensures environment/application is up and running for manual user acceptance testing to be performed
---
### Acceptance Tests and User Stories
  * Tightly coupled to a user story, acceptance tests must be one or more tests to verify that a story has been properly implemented.
  * One benefit of Agile story writing is that the story itself provides the text of the acceptance tests. This outline is in the form of acceptance criteria. Consider the following example of a story sourced from a fictional, crowdsourced weather application:
  * A user story card contains a short description of the behavior of the system from the point of view of the customer.
+++
### User Story Acceptance Criteria
  * Every acceptance criteria statement noted in a user story should be covered in an acceptance test. They can also be used for test descriptions.
  * Adding a map between user story ID in tracker and acceptance test cases in commits can offer a traceability matrix
---
###  Example
  * As a guest user, I would like to post a weather observation, so that other people enquiring about the weather have accurate, real-time information.
+++
  * Acceptance Criteria:
    > As A User
    > Given that I am on the weather observation submission page,
    > When I submit a weather observation using the form,
    > Then I should be redirected to the weather observations index page and see the weather observation I posted.

  * The concept hiding in the acceptance criteria is Behavior Driven Development (BDD). This is an oversimplification, but BDD can be thought of as an evolution of TDD which focuses on using sentences to describe behaviors of the system and implementing tests to match the sentences.
  * *I have an example later on*
---
### Back End
  * Smoke Tests
    * Determine if the app will run.  Ignoring unit and acceptance tests, smoke tests are written to run the basic application with its dependencies and services (like databases) connected to see if the application will deploy or catch on fire (hence the smoke).
    * Run after deploying new apps/infrastructure and may not need run these for every code change but I recommend before deployments or intermittently.
+++
### Health Check Endpoint Tests
    * Create a health route which calls each service and posts the status codes to the route.
    * Goes beyond acceptance test functionality and lends itself well to application support
+++
    * Trigger: Deployed application
    * Test: Call the Endpoint and check the response is a 200
    * Results:
      * Success: All service calls return 200 - Results in App is HEALTHY!
      * Failure: If one service returns a 500 - App is SICK!
---
### Back End
  * End-to-End Tests
    * Ensures data flows with the right values from beginning to end.
    * One scenario may be a test that hits a route in your app and expects back certain data. This does not test the controller individually or the methods/functions written to get the data and transform it before handing it over to the controller but the full process.
+++
    * Is there a need for backend acceptance tests if you already have quality unit and integration tests? If the back end is collecting, modifying and serving data, will unit tests and integration tests will cover the scenario? Or is it better to have the extra test coverage? I lean towards the later but you and your team need to decide what makes sense for you.
---
### Front End
  * Should aim to execute the intended functionality of the application using the GUI
  * Screen Navigation
  * Field Validation
  * Screen to screen workflow
  * Check Error Messages are displayed correctly
+++
  * Should not aim to: Check font sizes, colors, alignment, positioning etc.
  * These latter aims should be reserved for manual testing. Focusing on the above can lead to brittle tests subject to minor changes in screen design.
  * Automated tests are code and should be subject to refactoring as a consequence.

---
### Connecting external services or not in testing
  * Mocking/stubbing the app's dependencies and services?
  * In our app, we make many get/post/update calls to service now.  They have a few test apis that are cloned from their real one. This allows our tests to mimic almost exactly what’s happening in our testing suite but the feedback loop is slow.
+++
  * Unit tests can be written to test your code independently of external services which verify that the functions you have written behave as expected with out the bulk and lag time of connecting them to other external apis.
---
### Headless vs Browser Tests
##### Browser
  * Closer to real life use of the application
  * Chrome & Firefox available
  * Can be tested in the pipeline
  * Can view success & failures as they happen
  * _Slower_
  * _Varying/Maintaining Browser Types & Versions can be a pain._
  * _IE not available on our platforms_

---
### Headless vs Std Browser Tests
##### Headless Browser
  * Faster
  * *Can't see whats happening when running tests on local machine.*

---
### Tools
Tool | Description
------------ | -------------
**Selenium Webdriver** | Accepts commands via a Client API and sends them to a browser. Listens on port 4444
**PhantomJS** | An alternative to the above, not as widely used. Also provides a headless browser which can be used independently.  *The sole current maintainer is stepping down with chrome headless coming out.*
+++
Tool | Description
------------ | -------------
**Chrome Headless** | (Chrome 59)
**Protractor** | An end-to-end testing framework, support for Angular
**CodeceptJS** | A promise based UI testing framework providing easy to read testing code. Also has support for Angular
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
### Sample Process for Writing Acceptance Tests
  * Read the acceptance criteria for a story
  * Write your test name to match that as best as possible
  * Write expectations to assert the completion of said criteria
  * Access elements on page to click, type into, submit, etc to mimic the user experience leading up to the expected result.
+++
  * Write code and unit test new functions until acceptance test passes spiking where needed.
  * Look for sad paths and write another test to cover it.
  * Refactor tests and code where needed.
---
### CI/CD - Acceptance Tests
  *Audience Participation*
  * Anyone have any new insights about CI/CD and Acceptance Testing after listening to this presentation?
  * Anyone disagree with anything or want to challenge any of the ideas presented?
  * Any Questions?
---
### Sources:
  - Clyde Hunt, Even Gryska, Adam Hale, Ryan Lennon, Roy Harris
  - https://www.tutorialspoint.com/extreme_programming/extreme_programming_quick_guide.htm
  - Galvanize curriculum for Charlotte Accelerator
---
![Logo](https://media1.giphy.com/media/l0IyhdVAFdKe5WuQM/giphy.gif)
+++
At some point in this presentation, there is a good chance Tyler, Charles, and maybe Phil will try and ask a silly question or remark on a grammar mistake to trip me up during this presentation. At this moment I would ask that everyone turn to the person who caused me to bring up this slide and shake your head and or finger in a shamming manner and shame them for their unprofessional behavior.
+++
![Logo](https://media.giphy.com/media/r0g5Yfk3eRgqs/giphy.gif)
+++
![Logo](https://media.giphy.com/media/l2SpUoAPo0CBOkyxq/giphy.gif)
+++
![Logo](https://media.giphy.com/media/3o6ZtbT1Uu5NGTUqCQ/giphy.gif)
