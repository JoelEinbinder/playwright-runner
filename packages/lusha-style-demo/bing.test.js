const {test, describe} = require('playwright-runner');
const expect = require('expect');
describe('some bing stuff', () => {
  test('should go to bing.com', async ({page}) => {
    await page.goto('https://bing.com');
    await page.keyboard.type('hello world');
    await page.click('.search');
  });
});
