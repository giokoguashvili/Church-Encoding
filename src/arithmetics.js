var {
	True,
	False
} = require('../src/booleans')

const IsZero = n => n(x => False)(True)
const Succ = n => f => x => f(n(f)(x))

module.exports = {
	IsZero,
	Succ
}
