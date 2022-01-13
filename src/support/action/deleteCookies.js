"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Delete a cookie
 * @param  {String}   name The name of the cookie to delete
 */
exports.default = async (name) => {
    await browser.deleteCookies(name);
};
