/**
 * reference: https://github.com/puppeteer/puppeteer
 */

const puppeteer = require("puppeteer")

const limitCount = 1000 // 最多邀请多少人，每次执行都会重新计算
const rndDown = 30, rndUp = 60
let _count = 0
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min //含最大值，含最小值 
};

/**
 * ".recommend-card-list>li button.btn-greet"
*/
async function batchAdd(page, selector) {
    if (_count >= limitCount) return
    let helloBtns = await page.$$(selector),
        len = helloBtns.length
    console.log('helleBtns, len ', helloBtns, len)
    let timeout = 0
    for (let i = 0; i < len; i++) {

        timeout += getRandomIntInclusive(rndDown, rndUp) * 1000
        console.log(`timeout is ${timeout}`)
        setTimeout(function () {
            _count++
            if (_count >= limitCount) return
            console.log(`helloBtns[i] is ${helloBtns[i]}`, ` _count is ${_count}`, ` len is ${len}`)
            await helloBtns[i].click()
            if (_count === len + 1) {
                // 需要加载下一页了
                const body = await page.$('body')
                const { height } = await body.boundingBox()
                console.log(`scrollTo bottom ${height}`)
                await page.mouse.wheel({ deltaY: height })
                await batchAdd()
            }
        }, timeout)
    }

}

(async () => {
    const browser = await puppeteer.launch({
        defaultViewport: null,
        args: ["--window-position=0,0", "--window-size=1920,1040"],
        executablePath:
            "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
        // devtools: true,
        headless: false,
        slowMo: 250, // slow down by 250ms
    })

    const pages = await browser.pages()
    const page = pages[0]
    await page.goto("https://dev.xmplus.cn/cem/login")

    await page.waitForFrame("https://dev.xmplus.cn/cem/journeymaplist")

    await page.goto("https://dev.xmplus.cn/cem/touchs/surveys")

    const _selector = ".survey_tmp_dialog_panel>.el-button"
    await page.waitForSelector(_selector, {
        timeout: 6000 * 1000,
    })

    await page.click(_selector)
})()
