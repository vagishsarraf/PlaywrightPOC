var fs = require('fs');
class lambdatestlogin{
    constructor(page)
    {
        this.page = page;
        this.email_textbox = this.page.locator('#input-email');
        this.password = this.page.locator('#input-password');

    }

    async goTo(){
        await this.page.goto("https://ecommerce-playground.lambdatest.io/index.php?route=account/login")
    }

    async goToUrl(url){
        await this.page.goto(url)
    }
    
    async LoginToPortal(){
        await this.email_textbox.fill("vagishd.sarraf@infobeans.com")
        await this.password.fill('indo4321')
        await this.page.getByRole('button', { name: 'Login' }).click();
        await this.page.waitForLoadState('networkidle')
    }

    async getSessionStorage(){
        await this.page.context().storageState({ path: 'storageState.json' })
    }
}
module.exports = {lambdatestlogin};