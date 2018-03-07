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
	Zero,
	One
} = require('../src/numbers')

const Succ = n => f => x => f(n(f)(x))
const Sum = n0 => n1 => f => x => n1(f)(n0(f)(x))
const Sub = n0 => n1 => n1(Pred)(n0)
// fold (\(x,y) -> (y,y+1)) (0,0)
const Pred = n => First(
					n	(p => Pair(
								Second(p))(
								Succ(Second(p))))
						(Pair(Zero)(Zero)))

const Mul = n0 => n1 => n1(Sum(n0))(Zero)
const Mul1 = n0 => n1 => f => n0(n1(f))

const Pow = n => x => x(Mul1(n))(One)


module.exports = {
	Succ,
	Sum,
	Pred,
	Mul,
	Mul1,
	Sub,
	Pow
}
