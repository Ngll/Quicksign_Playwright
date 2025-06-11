Feature: Login for mercury newtours


Scenario Outline: login with valid username and password pass value in step value in examples
Given provide valid url
When providing valid username as "<username>" and password as "<password>"
Then clicking login button

Examples:
| username  | password |
| mercury | mercury|