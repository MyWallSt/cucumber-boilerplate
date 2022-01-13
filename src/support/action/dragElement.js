"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Drag a element to a given destination
 * @param  {String}   selector      The selector for the source element
 * @param  {String}   destination The selector for the destination element
 */
exports.default = async (selector, destination) => {
    const target = await $(destination);
    await $(selector).dragAndDrop(target);
};
