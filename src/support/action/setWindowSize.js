"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Resize the browser window
 * @param  {String}   screenWidth  The width of the window to resize to
 * @param  {String}   screenHeight The height of the window to resize to
 */
exports.default = async (screenWidth, screenHeight) => {
    await browser.setWindowSize(parseInt(screenWidth, 10), parseInt(screenHeight, 10));
};
