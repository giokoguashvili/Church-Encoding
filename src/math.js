var {
	Z
} = require('./combinators')

var {
	IsZero
} = require('./predicates')

var {
	One
} = require('./numbers')

var {
	Pred,
	Mul
} = require('./arithmetics')

var {
	If,
	lif
} = require('./booleans')

//https://stackoverflow.com/a/33388134/5200896
const _fact = f => n => lif(IsZero(n))(_ => One)(_ => Mul(n)(f(Pred(n)))) 
const fact = Z(_fact)

module.exports = {
	fact
}
