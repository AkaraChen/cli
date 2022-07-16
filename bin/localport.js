#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const open_1 = __importDefault(require("open"));
const app = () => {
    const input = process.argv[2];
    if (!input) {
        console.log("Please follow the command with port.");
        return;
    }
    if (Number.isNaN(+input)) {
        console.log("Please input a number.");
        return;
    }
    const port = parseInt(input);
    if (port > 0 || port < 65535) {
        console.log("Port should between 1 and 65535");
        return;
    }
    (0, open_1.default)(`http://localhost:${port}`);
};
app();
