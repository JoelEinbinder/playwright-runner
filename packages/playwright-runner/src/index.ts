import {Environment} from 'describers';
import {chromium, Page, Browser} from 'playwright';
const env = new Environment<{page: Page}, {browser: Browser}>({
  async beforeAll() {
    const browser = await chromium.launch();
    return {browser};
  },
  async afterAll({browser}) {
    await browser.close();
  },
  async beforeEach({browser}) {
    const page = await browser.newPage();
    return {page};
  },
  async afterEach({page}) {
    await page.close();
  }
});
export const extend = env.extend.bind(env);
export const test = env.test.bind(env);
export const it = env.it.bind(env);
