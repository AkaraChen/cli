#!/usr/bin/env node

import shell from "shelljs"

const chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+?><:{}[]"

const passwordLenth = 16;

let password = "";

for (let i = 0; i <= passwordLenth; i++) {
    const random = Math.floor(Math.random() * chars.length);
    password += chars.substring(random, random + 1);
}

shell.exec(`echo ${password} | clip`);
