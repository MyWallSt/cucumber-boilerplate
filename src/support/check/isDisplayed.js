"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Check if the given element is (not) visible
 * @param  {String}   selector   Element selector
 * @param  {String}   falseCase Check for a visible or a hidden element
 */
exports.default = async (selector, falseCase) => {
    /**
     * Visible state of the give element
     * @type {String}
     */
    const isDisplayed = await $(selector).isDisplayed();
    if (falseCase) {
        expect(isDisplayed).not.toEqual(true, 
        // @ts-expect-error
        `Expected element "${selector}" not to be displayed`);
    }
    else {
        expect(isDisplayed).toEqual(true, 
        // @ts-expect-error
        `Expected element "${selector}" to be displayed`);
    }
};
