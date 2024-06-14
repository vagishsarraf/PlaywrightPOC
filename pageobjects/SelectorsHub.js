var path = require('path');
class SelectorsHub{
    constructor(page)
    {
        this.page = page;
        this.email_textbox = this.page.getByPlaceholder('Enter email');
        this.password_textbox = this.page.getByPlaceholder('Enter Password');
        this.company_name = this.page.getByRole('textbox', { name: 'Enter your company' })
        this.mobile_num = this.page.getByRole('spinbutton')
        this.crushName = this.page.getByPlaceholder('First Crush');
        this.SubmitButton = this.page.getByRole('button', { name: 'Submit' })
        this.dateloc = this.page.locator('input[name="the_date"]').fill('2024-06-12');
        this.selectAllCheckbox = this.page.getByRole('checkbox', {name: 'chkSelectAll'});
        this.clickIframeLink = this.page.getByText('Click to practice iframe inside shadow dom scenario', {exact: true})
        this.downloadLink = this.page.getByText('Click to Download PNG File')

    }

    async goTo(){
        await this.page.goto("https://selectorshub.com/xpath-practice-page/")
    }

    async fillformTextboxes(){
        await this.email_textbox.click();
        await this.email_textbox.fill("vagishd.sarraf@infobeans.com")
        await this.password_textbox.fill('asddfg');
        await this.company_name.fill('Infobeans');
        await this.mobile_num.fill('987654321');
        await this.crushName.fill('Amy');
        await this.SubmitButton.click();
        // console.log(await this.page.locator('table#resultTable tr td a', {hasText: 'John.Smith'}).textContent());
        await this.page.locator('table#resultTable tr', {has: this.page.locator('td', {hasText: 'Garry White'})}).getByRole('checkbox').click();
        await this.page.locator('table#resultTable tr', {has: this.page.locator('td', {hasText: 'Joe Root'})}).getByRole('checkbox').click();
        await this.page.getByPlaceholder('enter name', { exact: true }).fill('Vagishsarraf');
        const downloadPromise = this.page.waitForEvent('download');
        await this.downloadLink.click();
        const download  = await downloadPromise;
        // await download.saveAs('/Users/vagish.saraf/Documents/Playwright_Projects/downloads', download.suggestedFilename());
        const fileChooserPromise = this.page.waitForEvent('filechooser');
        await this.page.locator('input#myFile').click()
        const fileChooser = await fileChooserPromise;
        await fileChooser.setFiles('/Users/vagish.saraf/Documents/Playwright_Projects/storageState.json');
        await this.clickIframeLink.click();
        await this.page.waitForLoadState('networkidle');
        await this.page.frameLocator('iframe#pact1').getByPlaceholder('Destiny').fill('Destiny');
        await this.page.goBack();
    }
    
    async sortColumns(column_name){
        await this.page.getByLabel(`${column_name}: activate to sort column ascending`).click();
    }
    async getSessionStorage(){
        await this.page.context().storageState({ path: 'storageState.json' })
    }
}
module.exports = {SelectorsHub};