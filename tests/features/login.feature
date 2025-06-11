Feature: Login for mercury newtours

Scenario: login with valid username and password
Given provide valid url
When providing valid username and password
Then clicking login button


Scenario: login with valid username and password pass value in step
Given provide valid url
When providing valid username as "mercury" and password as "mercury"
Then clicking login button