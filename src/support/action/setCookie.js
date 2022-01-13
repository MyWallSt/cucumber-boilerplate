"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Set a given cookie to a given value. When the cookies does not exist it will
 * be created
 * @param  {String}   cookieName    The name of the cookie
 * @param  {String}   cookieContent The value of the cookie
 */
exports.default = async (cookieName, cookieContent) => {
    await browser.setCookies({
        name: cookieName,
        value: cookieContent,
    });
};
