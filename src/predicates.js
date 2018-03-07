var {
	True,
	False
} = require('./booleans')

var {
	Sub
} = require('./arithmetics')

const IsZero = n => n(x => False)(True)
const LEQ = a => b => IsZero(Sub(a)(b))

module.exports = {
	IsZero,
	LEQ
}
