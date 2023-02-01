

// // const amount = 2

// // if(amount < 10) {
// //     console.log('small num')
// // } else {
// //     console.log('big num')
// // }


// // console.log(`hello, 1st node app!!!`)
// // to run in the console(cmd) do node filename eg: node app.js



// const names = require("./first-module")
// // console.log(names)

// const func = require("./utils")

// // func("fatima")
// // func(names.john)
// // func(names.billy)


// const data = require("./alt-export-flavor")
// // console.log(data)

// require("./mind-grenade")





const _ = require("lodash")
const items = [1,2,3,4,[[5],6,[2,37]]]
const newItems = _.flatMapDeep(items)
console.log(newItems)