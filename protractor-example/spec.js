function sleep(ms) {
    return new Promise(resolve => {
      setTimeout(resolve, ms)
    })
  }
  
  // https://www.protractortest.org/#/tutorial
  // spec.js
  describe('Protractor Taaghche.ir', function () {
    var profileButton = element(by.css('.ng-scope > #header > .header > .left-icons > #loginTitle'));
    var enterButton = element(by.css('.modal-dialog > .modal-content > .modal-body > .modal-body > .modal-login-enter-btn'));
    var usernameInput = element(by.model('loginModalCtrl.userName'));
    var passwordInput = element(by.css('.modal-dialog > .modal-content > .modal-body > .modal-body > #password-input'));
    var toast = element(by.css('#toast-container > .ng-scope > .toast > div > .toast-message'));
  
    beforeEach(function () {
      browser.get('http://localhost:3000');
    });
  
    it('Login senario', async function () {
      expect(browser.getTitle()).toEqual('دانلود کتاب و کتاب صوتی با طاقچه');
  
      profileButton.click();
  
      // Click on the element.
      usernameInput.click();
  
      // Send keys to the element (usually an input).
      usernameInput.sendKeys('xomorod.co@gmail.com');
  
      enterButton.click();
  
      passwordInput.click();
  
      passwordInput.sendKeys('1');
  
      enterButton.click();
  
      expect(toast.getText()).toEqual('عملیات با موفقیت انجام شد');
  
      await sleep(5000);
    });
  
  });
  
  
  