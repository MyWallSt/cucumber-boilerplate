"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Check if the given element has the focus
 * @param  {String}   selector  Element selector
 * @param  {String}   falseCase Whether to check if the given element has focus
 *                              or not
 */
exports.default = async (selector, falseCase) => {
    /**
     * Value of the hasFocus function for the given element
     * @type {Boolean}
     */
    const hasFocus = await $(selector).isFocused();
    if (falseCase) {
        expect(hasFocus).not.toBe(true, 
        // @ts-expect-error
        'Expected element to not be focused, but it is');
    }
    else {
        expect(hasFocus).toBe(true, 
        // @ts-expect-error
        'Expected element to be focused, but it is not');
    }
};
