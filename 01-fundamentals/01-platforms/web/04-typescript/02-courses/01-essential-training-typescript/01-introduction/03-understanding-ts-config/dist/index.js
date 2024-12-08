"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.main = void 0;
const data_json_1 = __importDefault(require("./data/data.json"));
function main() {
    console.log('Oi!', data_json_1.default);
}
exports.main = main;
main();
