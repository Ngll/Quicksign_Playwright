    import { test, expect } from '@playwright/test';

    test('test', async ({ page }) => {
    await page.goto('https://www.quicksign.com/en/');
    await page.getByRole('button', { name: 'Accepter' }).click();
    
    //Click on Platform and then Click on SmartData Service
    await page.getByRole('link', { name: 'Platform ' }).click();
    await page.getByRole('link', { name: 'SmartData Service', exact: true }).click();
  
    //Click on Platform 
    await page.getByRole('link', { name: 'Platform ' }).click();
    await page.locator('text=One platform. One API.').isVisible();

    //Clikc on KYC Service
    await page.locator('text=Platform ').isVisible();
    await page.getByRole('link', { name: 'KYC Service', exact: true }).click();
    await expect(page.locator('body')).toContainText('KYC for financial services made simple');

    await expect(page.locator('body')).toContainText('Discover our Platform');
    await page.getByRole('link', { name: 'Discover our Platform' }).click();

    //Request Demo - It includes input and submit. 
    await page.getByRole('link', { name: 'Request a demo', exact: true }).click();
    await expect(page.locator('h1')).toMatchAriaSnapshot(`- heading "Request a demo." [level=1]`);
    await page.getByRole('textbox', { name: 'Last name*' }).click();
    await page.getByRole('textbox', { name: 'Last name*' }).fill('Test');
    await page.getByRole('textbox', { name: 'Last name*' }).press('Tab');
    await page.getByRole('textbox', { name: 'First name*' }).fill('Best');
    await page.getByRole('textbox', { name: 'First name*' }).press('Tab');
    await page.getByRole('textbox', { name: 'Company name*' }).fill('Test Pvt Ltd');
    await page.getByRole('textbox', { name: 'Company name*' }).press('Tab');
    await page.getByRole('textbox', { name: 'Email*' }).fill('test@best.com');
    await page.getByRole('textbox', { name: 'Email*' }).press('Tab');
    await page.getByRole('textbox', { name: 'Message*' }).fill('This is sample test automation. Please ignore');
    await page.getByRole('textbox', { name: 'Message*' }).press('Tab');

    // Submit form
    await page.getByRole('button', { name: 'Submit' }).click();
    //await expect(page.getByRole('button', { name: 'Submit' })).toBeVisible();
    await page.locator('text=Submit').isVisible();
    await page.getByRole('button', { name: 'Submit' }).click();

    // Confirmation message of form submission successfully.
    await page.getByText('Thanks for reaching out! We\'').click();
    await expect(page.locator('#content')).toContainText('Thanks for reaching out! We\'ll get in touch soon.');
    
    //Language change from English to French
    await page.getByRole('link').filter({ hasText: 'Français' }).click();

    //Text confirmation in French to check if website is redirected to french or not.
    await page.getByRole('heading', { name: 'Demandez une démo.' }).click();
    await expect(page.locator('h1')).toContainText('Demandez une démo.');
    });