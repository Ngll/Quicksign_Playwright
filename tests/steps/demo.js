const { Given, When, Then } = require ("@cucumber/cucumber");

Given('Checking demo', () => {
  // Write code here that turns the phrase above into concrete actions
  console.log("Given")
});

When('Print some message', () => {
  // Write code here that turns the phrase above into concrete actions
  console.log("When")
});

Then('result values', function () {
    console.log("Then")
  });



