var {
    True,
    False
} = require("./booleans")

const Pair = x1 => x2 => f => f(x1)(x2)
const First = p => p(True) 
const Second = p => p(False)

module.exports = {
    First,
    Second,
    Pair
}