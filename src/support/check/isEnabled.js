"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Check if the given selector is enabled
 * @param  {String}   selector   Element selector
 * @param  {String}   falseCase Whether to check if the given selector
 *                              is enabled or not
 */
exports.default = async (selector, falseCase) => {
    /**
     * The enabled state of the given selector
     * @type {Boolean}
     */
    const isEnabled = await $(selector).isEnabled();
    if (falseCase) {
        expect(isEnabled).not.toEqual(true, 
        // @ts-expect-error
        `Expected element "${selector}" not to be enabled`);
    }
    else {
        expect(isEnabled).toEqual(true, 
        // @ts-expect-error
        `Expected element "${selector}" to be enabled`);
    }
};
