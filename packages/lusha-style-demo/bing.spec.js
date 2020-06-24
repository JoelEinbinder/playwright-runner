const {test, describe} = require('playwright-runner');
describe('some bing stuff', () => {
  test('should go to bing.com', async ({page}) => {
    await page.goto('https://bing.com');
    await page.keyboard.type('hello world');
  });
});
