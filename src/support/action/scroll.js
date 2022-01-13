"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Scroll the page to the given element
 * @param  {String}   selector Element selector
 */
exports.default = async (selector) => {
    await $(selector).scrollIntoView();
};
