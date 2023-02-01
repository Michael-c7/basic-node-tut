
const { createReadStream } = require("fs")

const stream = createReadStream("./content/big.text", {highWaterMark: 90000, encoding: "utf8"})

// default buffer size is 64kb, can control the size
// eg: const stream = createReadStream("./content/big.text", {highWaterMark: 90000})
// highWaterMark - control size
// last buffer - remainder
// encoding --> const stream = createReadStream("./content/big.text", {encoding: "utf8"})


stream.on("data", (result) => {
    console.log(result)
})

stream.on("error", (err) => {
    console.log(err)
})