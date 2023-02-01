

const http = require("http")
const server = http.createServer()

// emits behind the scenes
server.on("request", (req, res) => {
    res.end("Welcome")
})

// sets up the server on localhost:5000
server.listen(5000)




const EventEmitter = require("events")

// create an instance
const customEmitter = new EventEmitter()

// order of on & emit matter on has to be 1st, then emit is 2nd

// on -listen for an event
customEmitter.on("response", (name, age) => {
    console.log(`data received ${name}, ${age}`)
})
// have as many of these function as we want
customEmitter.on("response", () => {
    console.log(`More data received `)
})

// emit - emit an event
customEmitter.emit("response", "jill", 22)