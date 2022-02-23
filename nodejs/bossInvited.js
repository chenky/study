/**
 * reference: https://github.com/puppeteer/puppeteer
*/

const puppeteer = require('puppeteer');

// let browser
// if (!browser) {
//     browser = await puppeteer.launch({
//         headless: false,
//         slowMo: 250, // slow down by 250ms
//     })
// }

(async () => {

    // console.log('new page')
    // const page = await browser.newPage()
    // console.log('goto url')
    // await page.goto('https://www.baidu.com')
    // console.log('type keyword')
    // await page.type('#kw', 'puppeteer isTrusted')
    // console.log('click')
    // await page.click('#su')


    const browser = await puppeteer.launch({
        // defaultViewport: {
        //     width: 1920,
        //     height: 1080
        // },
        defaultViewport: null,
        // args: [
        //     '--start-maximized',
        //     '--kiosk',
        // ],
        args: [
            '--window-position=0,0',
            '--window-size=1920,1040',
        ],
        executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
        // devtools: true,
        headless: false,
        slowMo: 250, // slow down by 250ms
    })
    const pages = await browser.pages()
    const page = pages[0]
    // const size = await page.evaluate(() => {
    //     return {
    //         width: window.screen.availWidth,
    //         height: window.screen.availHeight
    //     }
    // })
    // await page.setViewport(size)

    page.on('console', msg => {
        console.log(`${msg.type()} ${msg.text()}`)
    })
    await page.goto('https://www.baidu.com')
    // await page.goto('file:///D:/study/study/javascript/isTrusted.html')
    // await page.click('#test')

})()