const puppeteer = require('puppeteer');

(async () => {
    try {
        const browser = await puppeteer.launch({headless: false})
        const page = await browser.newPage()

        await page.goto('https://www.youtube.com/channel/UCmNoL3N13lRHbcGYT8vr6lA')

        let subscribers = await page.$eval('#subscriber-count', el => el.textContent)

        await browser.close()
    } catch (err) {
        console.error(err)
    }
})();