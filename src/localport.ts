#!/usr/bin/env node

import open from "open"

const app = () => {
    const input = process.argv[2]
    if (!input) {
        console.log("Please follow the command with port.")
        return
    }
    if (Number.isNaN(+input)) {
        console.log("Please input a number.")
        return
    }
    const port = parseInt(input)
    if (port > 0 || port < 65535) {
        console.log("Port should between 1 and 65535")
        return
    }
    open(`http://localhost:${port}`)
}

app();
