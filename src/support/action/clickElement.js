"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const checkIfElementExists_1 = __importDefault(require("../lib/checkIfElementExists"));
/**
 * Perform an click action on the given element
 * @param  {String}   action  The action to perform (click or doubleClick)
 * @param  {String}   type    Type of the element (link or selector)
 * @param  {String}   selector Element selector
 */
exports.default = async (action, type, selector) => {
    /**
     * Element to perform the action on
     * @type {String}
     */
    const selector2 = type === 'link' ? `=${selector}` : selector;
    /**
     * The method to call on the browser object
     * @type {String}
     */
    const method = action === 'click' ? 'click' : 'doubleClick';
    await (0, checkIfElementExists_1.default)(selector2);
    await $(selector2)[method]();
};
