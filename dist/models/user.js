"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
// const ObjectId = Schema.ObjectId;
const User = new Schema({
    firstName: String,
    lastName: String,
    email: { type: String, reuire: true },
    password: { type: String, min: 8, max: 16, require: true },
    createdAt: { type: Date, default: Date.now }
});
exports.default = User;
