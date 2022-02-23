const puppeteer = require("puppeteer");

(async () => {
  // Initializing a Chrome instance manually
  const chrome = await chromeLauncher.launch({
    chromeFlags: ["--headless"],
  });
  // console.info('chrome ', chrome)
  const response = await axios.get(
    `http://localhost:${chrome.port}/json/version`
  );
  const { webSocketDebuggerUrl } = response.data;

  // Connecting the instance using `browserWSEndpoint`
  const browser = await puppeteer.connect({
    args: ["--window-position=0,0", "--window-size=1920,1040"],
    executablePath:
      "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
    // devtools: true,
    headless: false,
    browserWSEndpoint: webSocketDebuggerUrl,
  });
  // console.info('browser ', browser)
  const pages = await browser.pages();
  pages.forEach((page) => {
    console.log(page.url());
  });

  await browser.close();
  // await chrome.kill()
})();
