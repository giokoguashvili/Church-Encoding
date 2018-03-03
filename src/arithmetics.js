var {
	True,
	False
} = require('../src/booleans')

var {
	First,
	Second,
	Pair
} = require('../src/pairs')

var {
	Zero
} = require('../src/numbers')

const IsZero = n => n(x => False)(True)
const Succ = n => f => x => f(n(f)(x))
const Sum = n0 => n1 => f => x => n1(f)(n0(f)(x))

// fold (\(x,y) -> (y,y+1)) (0,0)
const Pred = n => First(
					n	(p => Pair(
								Second(p))(
								Succ(Second(p))))
						(Pair(Zero)(Zero)))

module.exports = {
	IsZero,
	Succ,
	Sum,
	Pred
}
