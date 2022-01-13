"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Focus the last opened window
 */
exports.default = async () => {
    /**
     * The last opened window
     * @type {Object}
     */
    const lastWindowHandle = (await browser.getWindowHandles()).slice(-1)[0];
    await browser.switchToWindow(lastWindowHandle);
};
