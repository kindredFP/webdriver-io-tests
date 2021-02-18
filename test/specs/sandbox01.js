describe('Verify a property of a page.', () => {
    it('Verify title of page matches expected', () => {
        browser.url('https://webdriver.io/')
        expect(browser).toHaveTitle('WebdriverIO · Next-gen browser and mobile automation test framework for Node.js | WebdriverIO');
    });
});


