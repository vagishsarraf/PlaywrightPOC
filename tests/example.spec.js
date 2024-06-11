// @ts-check
const { test, expect } = require('@playwright/test');
const { addAbortListener } = require('events');

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});
test('Yeh dusra test case', async({ page}) =>{
  await page.locator('label').filter({ hasText: 'Radio1' }).getByRole('radio').check();
  await page.locator('label').filter({ hasText: 'Radio2' }).getByRole('radio').check();
  await page.getByText('Radio3').click();
  await page.getByPlaceholder('Type to Select Countries').click();
  await page.getByPlaceholder('Type to Select Countries').fill('Ind');
  await page.locator('#ui-id-3').click();
  await page.locator('#dropdown-class-example').selectOption('option2');
  await page.locator('#checkbox-example').getByText('Option1').click();
  await page.locator('#checkbox-example').getByText('Option2').click();
  await page.locator('#checkbox-example').getByText('Option2').click();
  await page.locator('#checkBoxOption1').check();
  await page.locator('#checkBoxOption2').check();
  await page.locator('#checkBoxOption3').check();
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('button', { name: 'Open Window' }).click();
  const page1 = await page1Promise;
  await page1.close();
  await page.getByPlaceholder('Enter Your Name').click();
  await page.getByPlaceholder('Enter Your Name').fill('Vagish');
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole('button', { name: 'Alert' }).click();
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole('button', { name: 'Confirm' }).click();
  await page.getByRole('button', { name: 'Hide' }).click();
  await page.getByRole('button', { name: 'Show' }).click();
  await page.getByPlaceholder('Hide/Show Example').click();
  await page.getByRole('button', { name: 'Hide' }).click();
})
test('get started link', async ({ page }) => {
  await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
  await page.locator('label').filter({hasText: 'Radio1'}).locator('input').check();
  await page.locator('label').filter({hasText: 'Radio2'}).locator('input').check();
  await page.locator('label').filter({hasText: 'Radio3'}).locator('input').check();

  await page.getByPlaceholder('Type to Select Countries').fill('Turkey');
  await page.locator('li.ui-menu-item div').filter({hasText: 'Turkey'}).click();
  await page.locator('select#dropdown-class-example').selectOption('option1');
  await page.locator('select#dropdown-class-example').selectOption('option2');
  await page.locator('select#dropdown-class-example').selectOption('option3');

  await page.locator('label').filter({hasText: 'Option1'}).locator('input').check();
  await page.locator('label').filter({hasText: 'Option2'}).locator('input').check();
  await page.locator('label').filter({hasText: 'Option3'}).locator('input').check();


  await page.getByPlaceholder('Enter Your Name').fill('Vagish');
  await page.locator('input#alertbtn').click();
  page.once('dialog', dialog=>{
    console.log(dialog.message());
    dialog.dismiss().catch(()=>{});
  });

  await page.getByRole('button', {'name': 'Confirm'}).click();
  page.once('dialog', dialog=>{
    console.log(dialog.message());
    dialog.dismiss().catch(()=>{});
  });
  await page.locator('input#hide-textbox').click();
  await page.locator('input#show-textbox').click();
  await page.getByPlaceholder('Hide/Show Example').fill('Hello');
  await page.getByRole('button', {name: "Mouse Hover"}).hover();
  await page.locator('div.mouse-hover').locator('a').filter({hasText: "Top"}).click();


  // Click the get started link.
  

  // Expects page to have a heading with the name of Installation.
});

test.only('Testing shadow dom', async({page})=>{
  await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
  await page.waitForLoadState('networkidle');
  await page.waitForLoadState('domcontentloaded')
})
