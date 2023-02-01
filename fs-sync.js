// Fs module(sync)
const { readFileSync, writeFileSync } = require('fs')
// const fs = require("fs")
console.log("start")

const first = readFileSync("./content/first.txt", "utf8")
const second = readFileSync("./content/second.txt", "utf8")
// console.log(first,second)

/*
if the file not their, node will create it
if the file is their node will overwrite it

the "a" flag will append the result
instead of the default behavior of overwriting the file
*/
writeFileSync(
    "./content/result-sync.txt",
    `the result --> ${first}, ${second}`,
    {flag:"a"}
)

console.log("done with this task")
console.log("start next one")

