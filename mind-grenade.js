/*
- when you import a module you invoke it
- don't have to name a module you import
- this code not just exported on it own, 
when node exports it wraps it in the function (addValues)
if it gets executed here
*/

const num1 = 2
const num2 = 7

function addValues() {
    console.log(`sum --> ${num1 + num2}`)
}


addValues()