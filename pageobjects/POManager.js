const {lambdatestlogin} = require('./lambdatest_login');

class POManager{
    constructor(page) {
        this.page = page;
        this.login_page = new lambdatestlogin(page);
    }

    getLoginPage(){
        return this.login_page;
    }
}

module.exports = {POManager};