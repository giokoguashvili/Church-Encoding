var {
	True,
	False
} = require('../src/booleans')

const IsZero = n => n(x => False)(True)
const Succ = n => f => x => f(n(f)(x))
const Sum = n0 => n1 => f => x => n1(f)(n0(f)(x))

module.exports = {
	IsZero,
	Succ,
	Sum
}
