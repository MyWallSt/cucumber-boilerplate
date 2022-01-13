"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Check the selected state of the given element
 * @param  {String}   selector   Element selector
 * @param  {String}   falseCase Whether to check if the element is elected or
 *                              not
 */
exports.default = async (selector, falseCase) => {
    /**
     * The selected state
     * @type {Boolean}
     */
    const isSelected = await $(selector).isSelected();
    if (falseCase) {
        expect(isSelected)
            // @ts-expect-error
            .not.toEqual(true, `"${selector}" should not be selected`);
    }
    else {
        expect(isSelected)
            // @ts-expect-error
            .toEqual(true, `"${selector}" should be selected`);
    }
};
