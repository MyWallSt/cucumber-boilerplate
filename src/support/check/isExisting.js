"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Check if the given element exists in the current DOM
 * @param  {String}   selector  Element selector
 * @param  {String}   falseCase Whether to check if the element exists or not
 */
exports.default = async (selector, falseCase) => {
    /**
     * Elements found in the DOM
     * @type {Object}
     */
    const elements = await $$(selector);
    if (falseCase) {
        expect(elements).toHaveLength(0, 
        // @ts-expect-error
        `Expected element "${selector}" not to exist`);
    }
    else {
        expect(elements.length).toBeGreaterThan(0, 
        // @ts-expect-error
        `Expected element "${selector}" to exist`);
    }
};
