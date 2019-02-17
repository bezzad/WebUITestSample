// https://github.com/GoogleChrome/puppeteer
const puppeteer = require('puppeteer');

(async () => {
    const viewPort = { width: 1920, height: 9000 };
    const paperFormat = "A4";
    const browser = await puppeteer.launch({
        headless: true,
        //slowMo: 250, // slow down by 250ms
        //devtools: true
        args: [
            `--window-size=${ viewPort.width },${ viewPort.height }`
        ]
    });
    const page = await browser.newPage();
    // Adaptive?
    // await page.setUserAgent('Mozilla (Android) Mobile')
    await page.setViewport(viewPort);
    await page.goto('https://taaghche.ir'); //, { waitUntil: 'networkidle2' });
    await page.screenshot({ path: 'taaghche.png' });
    await page.pdf({ path: 'taaghche.pdf', format: paperFormat, landscape: false, scale: 1 }); // just for --> puppeteer.launch({headless: true});

    // Get the "viewport" of the page, as reported by the page.
    const dimensions = await page.evaluate(() => {
        return {
            width: document.documentElement.clientWidth,
            height: document.documentElement.clientHeight,
            deviceScaleFactor: window.devicePixelRatio
        };
    });

    console.log('Dimensions:', dimensions);

    // await page.waitFor(60000);

    await browser.close();
})();