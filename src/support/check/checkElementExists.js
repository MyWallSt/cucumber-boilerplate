"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const checkIfElementExists_1 = __importDefault(require("../lib/checkIfElementExists"));
/**
 * Check if the given element exists
 * @param  {String}   isExisting Whether the element should be existing or not
 *                               (an or no)
 * @param  {String}   selector   Element selector
 */
exports.default = async (isExisting, selector) => {
    /**
     * Falsecase assertion
     * @type {Boolean}
     */
    let falseCase = true;
    if (isExisting === 'an') {
        falseCase = false;
    }
    await (0, checkIfElementExists_1.default)(selector, falseCase);
};
