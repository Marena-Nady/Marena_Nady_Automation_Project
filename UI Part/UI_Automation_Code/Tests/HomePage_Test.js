module.exports = {
    'beforeEach': function (browser) {
        const homePage = browser.page.HomePage();
        homePage.navigate();
    },
    'SearchForDress': function (browser) {
        const homePage = browser.page.HomePage();
        homePage
        .enterInSearchField("dress");

        browser.elements('css selector','.right-block>h5>a',function(results){//call-back function or lambda function(to be called here only)
            results.value.forEach(function(element){
                browser.verify.textContains(element,'Dress')                
            })

        })
    }
}