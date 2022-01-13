"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const checkIfElementExists_1 = __importDefault(require("../lib/checkIfElementExists"));
/**
 * Set the value of the given input field to a new value or add a value to the
 * current selector value
 * @param  {String}   method  The method to use (add or set)
 * @param  {String}   value   The value to set the selector to
 * @param  {String}   selector Element selector
 */
exports.default = async (method, value, selector) => {
    /**
     * The command to perform on the browser object (addValue or setValue)
     * @type {String}
     */
    const command = method === 'add' ? 'addValue' : 'setValue';
    let checkValue = value;
    await (0, checkIfElementExists_1.default)(selector, false, 1);
    if (!value) {
        checkValue = '';
    }
    await $(selector)[command](checkValue);
};
