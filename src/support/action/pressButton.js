"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Perform a key press
 * @param  {String}   key  The key to press
 */
exports.default = async (key) => {
    await browser.keys(key);
};
