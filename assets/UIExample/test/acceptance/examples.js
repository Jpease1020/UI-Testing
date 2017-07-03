"use strict";

var expect = require('chai').expect;
var moment = require('moment');
var app = require('../../app');
var http = require('http');

var server;

Feature('What are we testing? - Feature also scopes Before/After etc.');

Before((I) => {
	console.log("Actions before EACH test");
});

After((I) => {
	console.log("Actions after EACH test");
});

BeforeSuite((I) => {
  console.log("Actions before ALL tests");
  //Start a web server
  server = http.createServer(app);
	server.listen(3000);
	server.on('error', (err) => {
    console.error("Error:", err);
    process.exit(1);

  });
	server.on('listening', () => {
    var addr = server.address();
    var bind = typeof addr === 'string' ?
      'pipe ' + addr :
      'port ' + addr.port;
    console.log('Listening on ' + bind);
  });
});

AfterSuite((I) => {
  console.log("Actions after ALL tests");
  //Close web server
	server.close()
})


Scenario('SUPERSET:SUBSET:Test1: Describe what this test does.', (I) => {
	I.amOnPage('/');
	I.see("UI Tests Example");
  I.see("All fields are required", ".allFieldsRequiredWarning");
  I.wait(2);
});

Scenario('SUPERSET:SUBSET:Test2: Check that error messages appear at certain times', (I) => {
	I.amOnPage('/');
	I.see("UI Tests Example");
  I.dontSee("Invalid From Date")

  I.click("Submit")
  I.waitForText("Invalid From Date")
  I.wait(2);
});

Scenario('SUPERSET:SUBSET:Test3: Happy Path test', (I) => {
	I.amOnPage('/');
	I.see("UI Tests Example");

  I.click("#lblradio--criticalId")

	I.fillField("#priorityImpactFieldId", "This is the priority impact data")
	I.fillField("#businessNeedFieldId", "This is the business need data")
	I.fillField("#descriptionFieldId", "This is the description data")

	I.fillField("#customFileStartDateId", moment().utc().format("MM-DD-YYYY"))
	I.fillField("#customFileEndDateId", moment().utc().format("MM-DD-YYYY"))

  I.click("Submit")
  I.waitForText("Submitted successfully")
  I.wait(2);
});


Scenario('SUPERSET:SUBSET:Test4: Additional Tests', (I) => {
	I.amOnPage('/');
	I.see("UI Tests Example");

  I.dontSee("Priority impact")
  I.wait(1);
  I.click("#lblradio--criticalId")
  I.see("Priority Impact")
  I.wait(1);
  I.click("#lblradio--needId")
  I.dontSee("Priority Impact")
  I.wait(2);
});


Scenario('SUPERSET:SUBSET:Test5: Pull data from the screen', function *(I) {
	I.amOnPage('/');
	I.see("UI Tests Example");

  I.fillField("#customFileStartDateId", moment().utc().format("MM-DD-YYYY"))
  let startDate = yield I.grabValueFrom('#customFileStartDateId');
  expect(startDate).to.equal(moment().utc().format("MM-DD-YYYY"))
});
