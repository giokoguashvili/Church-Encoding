

const Z = f => (x => f(v => x(x)(v)))(x => f(v => x(x)(v)))

const Zero  = f => x => x
const One   = f => x => f(x)

const True = t => _ => t
const False = _ => f => f
const IsZero = n => n(x => False)(True)


const Pair = x1 => x2 => f => f(x1)(x2)
const First = p => p(True) 
const Second = p => p(False)


const Succ = n => f => x => f(n(f)(x))
const Sum = n0 => n1 => f => x => n1(f)(n0(f)(x))

const Pred = n => First(
					n	(p => Pair(
								Second(p))(
								Succ(Second(p))))
						(Pair(Zero)(Zero)))

const Mul = n0 => n1 => n1(Sum(n0))(Zero)

const If = b => A => B => b(A)(B)
const lif = b => A => B => b(A)(B)()

const _fact = f => n => lif(IsZero(n))(_ => One)(_ => Mul(n)(f(Pred(n)))) 
const fact = Z(_fact)

const decodeNumber = n => n(i => i + 1)(0)
const encodeNumber = n => Array.from(Array(n).keys(), item => item + 1).reduce((p, n) => Succ(p), Zero);

const exec = f => n => decodeNumber(f(encodeNumber(n)));

//console.log(decodeNumber(fact(Five))); //120
//console.log(exec(fact)(5)); //120

exec(fact)(5)
