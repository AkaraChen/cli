#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const shelljs_1 = __importDefault(require("shelljs"));
const chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+?><:{}[]";
const passwordLenth = 16;
let password = "";
for (let i = 0; i <= passwordLenth; i++) {
    const random = Math.floor(Math.random() * chars.length);
    password += chars.substring(random, random + 1);
}
shelljs_1.default.exec(`echo ${password} | clip`);
