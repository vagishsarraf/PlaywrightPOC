const { SelectorsHub } = require('./SelectorsHub');
const {lambdatestlogin} = require('./lambdatest_login');

class POManager{
    constructor(page) {
        this.page = page;
        this.login_page = new lambdatestlogin(page);
        this.selectHub = new SelectorsHub(page);
    }

    getLoginPage(){
        return this.login_page;
    }

    getSelectorsHub(){
        return this.selectHub;
    }
}

module.exports = {POManager};