"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const checkContainsAnyText_1 = __importDefault(require("./checkContainsAnyText"));
exports.default = async (elementType, element, falseCase) => {
    let newFalseCase = true;
    if (typeof falseCase === 'function') {
        newFalseCase = false;
    }
    else if (falseCase === ' not') {
        newFalseCase = false;
    }
    await (0, checkContainsAnyText_1.default)(elementType, element, newFalseCase);
};
