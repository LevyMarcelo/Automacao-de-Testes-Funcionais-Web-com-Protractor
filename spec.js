describe('Login', function () {
  it('Fazer Login', function () {
    browser.get('http://www.way2automation.com/angularjs-protractor/registeration/#/login');

    element(by.id('username')).sendKeys('angular');
    element(by.name('password')).sendKeys('password');
    element(by.model('model[options.key]')).sendKeys('Teste');
    element(by.buttonText('Login')).click();

    expect(element(by.css('.ng-scope h1')).getText()).toBe("Home");
  });
});