const { Given, When, Then, setDefaultTimeout, Before, BeforeStep, BeforeAll,After, AfterStep, AfterAll } = require ("@cucumber/cucumber");
const {chromium} = require('@playwright/test')

let browser;
let page;

Before(async()=>{
    console.log("before Hooks")
})

BeforeStep(async()=>{
    console.log("BeforeStep Hooks")
})

BeforeAll(async()=>{
    console.log("BeforeAll Hooks")
})

After(async()=>{
console.log("After Hooks")
})

AfterStep(async()=>{
console.log("AfterStep Hooks")
})

AfterAll(async()=>{
console.log("AfterAll Hooks")
})

Given ('provide valid url', async function(){

    browser= await chromium.launch({headless:false})
    page = await browser.newPage()
    setDefaultTimeout(10000)
    await page.goto("https://demo.guru99.com/test/newtours/")
})



When ('providing valid username and password',async function(){
    await page.locator("//input[@name='userName']").fill("mercury")
    await page.locator("//input[@name='password']").fill("mercury")

})
Then ('clicking login button',async function(){
    await page.locator("//input[@name='submit']").click()
    await page.close()
    await browser.close()

})

When ('providing valid username as {string} and password as {string}',async function(username, password){
    await page.locator("//input[@name='userName']").fill(username)
    await page.locator("//input[@name='password']").fill(password)

})