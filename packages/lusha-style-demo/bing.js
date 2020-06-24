const {test} = require('playwright-runner');
test('should go to bing.com', async ({page}) => {
  await page.goto('https://bing.com');
});