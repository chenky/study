/**
 * reference: https://github.com/puppeteer/puppeteer
 */

const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch({
    defaultViewport: null,
    args: ["--window-position=0,0", "--window-size=1920,1040"],
    executablePath:
      "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
    // devtools: true,
    headless: false,
    slowMo: 250, // slow down by 250ms
  });

  const pages = await browser.pages();
  const page = pages[0];
  await page.goto("https://dev.xmplus.cn/cem/login");

  await page.waitForFrame("https://dev.xmplus.cn/cem/journeymaplist");

  await page.goto("https://dev.xmplus.cn/cem/touchs/surveys");

  const _selector = ".survey_tmp_dialog_panel>.el-button";
  await page.waitForSelector(_selector, {
    timeout: 6000 * 1000,
  });

  await page.click(_selector);
})();
