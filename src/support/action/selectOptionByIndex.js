"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Select a option from a select element by it's index
 * @param  {String}   index      The index of the option
 * @param  {String}   _   The ordinal indicator of the index (unused)
 * @param  {String}   selector Element selector
 *
 * @todo  merge with selectOption
 */
exports.default = async (index, _, selector) => {
    /**
     * The index of the option to select
     * @type {Int}
     */
    const optionIndex = parseInt(index, 10);
    await $(selector).selectByIndex(optionIndex);
};
