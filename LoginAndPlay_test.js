Feature('LoginNavigate1');
// Scenario test cases
Scenario('Login to Demo Site', ({ I }) => {
    I.amOnPage('/Login.html')
    I.fillField("UserName","admin")
    I.fillField("Password","Password")
    I.click("//input[@type='submit']")
    I.waitForElement({xpath: "//input[@name='Initial']"})
    I.saveScreenshot("loggedIn.jpg")

    I.selectOption({css: 'select[name=TitleId]'},"Mr.")
    //pause()
    I.checkOption("Hindi")
    I.fillField("FirstName","saran")



});
