"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const path_1 = __importDefault(require("path"));
const wdio_conf_1 = require("./wdio.conf");
wdio_conf_1.config.capabilities = [{
        browserName: 'chrome',
        'goog:chromeOptions': {
            args: [
                '--disable-infobars',
                '--window-size=1280,800',
                '--headless',
                '--no-sandbox',
                '--disable-gpu',
                '--disable-setuid-sandbox',
                '--disable-dev-shm-usage',
            ],
        },
    }];
wdio_conf_1.config.port = 9516;
wdio_conf_1.config.services = [
    [
        'chromedriver',
        {
            chromeDriverArgs: ['--port=9516', '--url-base=\'/\''],
        },
    ],
    [
        'static-server',
        {
            port: 8080,
            folders: [
                { mount: '/', path: path_1.default.join(__dirname, 'demo-app') },
            ],
        },
    ],
];
wdio_conf_1.config.path = '/';
wdio_conf_1.config.beforeFeature = async () => {
    /**
     * check if static website is up and cancel if not
     */
    await browser.url('/');
    const pageTitle = await browser.getTitle();
    if (pageTitle !== 'DEMO APP') {
        console.error(`Demo app is not up, found ${pageTitle}`);
        console.log(await browser.getPageSource());
        process.exit(1);
    }
};
if (process.env.CI) {
    wdio_conf_1.config.outputDir = path_1.default.join(__dirname, 'logs');
}
exports.config = wdio_conf_1.config;
