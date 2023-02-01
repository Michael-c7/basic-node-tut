

const { readFile, writeFile } = require('fs')

// async example
readFile("./content/first.txt", "utf8", (err, result) => {
    if(err) {
        console.log(err)
        return null
    }
    const first = result
    readFile("./content/second.txt", "utf8", (err,result) => {
        if(err) {
            console.log(err)
            return null
        }
        const second = result
        writeFile(
            "./content/result-async.txt",
            `The result: ${first} and ${second}`,
            (err, result) => {
                if(err) {
                    console.log(err)
                    return null
                }
                console.log("done w/ this task")
            })
    })
})
console.log("starting next task")
