import { test, expect } from '@playwright/test';

test('Testing UI scenrios', async ({ page }) => {
  
  await page.getByLabel('Choose a car:').selectOption('saab');
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Join Training' }).click();
  const page1 = await page1Promise;
  await page.getByRole('checkbox', {name: 'chkSelectAll'})
  await page.locator('input[name="the_date"]').fill('2024-06-12');
  await page.locator('#ohrmList_chkSelectRecord_25').check();
  await page.locator('#ohrmList_chkSelectAll').check();
  await page.locator('#ohrmList_chkSelectRecord_16').check();
  await page.locator('table#resultTable tr', {has: page.locator('table#resultTable tr td', {hasText: 'Garry White'})}).getByRole('checkbox')
  await page.locator('#ohrmList_chkSelectRecord_21').check();
  await page.locator('#canpro').click({
    position: {
      x: 54,
      y: 60
    }
  });
  await page.waitForLoadState('domcontentloaded')
  
  await page.getByPlaceholder('enter name', { exact: true }).click();
  await page.getByPlaceholder('enter name', { exact: true }).fill('vagish');
  await page.getByPlaceholder('enter name', { exact: true }).press('Tab');
  await page.getByRole('link', { name: 'Click to practice iframe' }).click();
  await page.getByPlaceholder('enter name').click();
  await page.getByPlaceholder('enter name').fill('vagish');
  await page.frameLocator('#pact1').getByPlaceholder('Destiny').click();
  await page.frameLocator('#pact1').getByRole('button', { name: 'Close it' }).click();
  await page.getByPlaceholder('Enter pizza name').click();
  await page.getByPlaceholder('Enter pizza name').fill('martinoz');
  await page.locator('#concepts').click();
  await page.frameLocator('#pact1').getByRole('button', { name: 'Close it' }).click();
  await page.getByRole('row', { name: 'windows chrome Hvidovre' }).getByRole('checkbox').check();
  await page.locator('.row-3 > .column-1').click();
  await page.getByText('Click to practice iframe inside shadow dom scenario', {exact: true}).click();
  await page.locator('.row-3 > .column-1 > input').check();
  await page.locator('.row-4 > .column-1 > input').check();
  await page.getByLabel('OS: activate to sort column').click();
  await page.frameLocator('iframe#pact1').getByPlaceholder('Destiny').fill('Destiny');
  await page.getByLabel('OS: activate to sort column').click();
  await page.getByLabel('Country: activate to sort').click();
  await page.getByLabel('Country: activate to sort').click();
  await page.frameLocator('internal:text="Coming Google"i').getByLabel('No', { exact: true }).click();
  await page.getByLabel(`${column_name}: activate to sort column ascending`)
});