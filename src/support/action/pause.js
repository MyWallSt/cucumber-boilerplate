"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Pause execution for a given number of milliseconds
 * @param  {String}   ms   Number of milliseconds to pause
 */
exports.default = async (ms) => {
    /**
     * Number of milliseconds
     * @type {Int}
     */
    const intMs = parseInt(ms, 10);
    await browser.pause(intMs);
};
