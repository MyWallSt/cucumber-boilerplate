"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Clear a given input field (placeholder for WDIO's clearElement)
 * @param  {String}   selector Element selector
 */
exports.default = async (selector) => {
    await $(selector).clearValue();
};
