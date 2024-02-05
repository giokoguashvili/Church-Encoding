// Pure Church Encoded Factorial Recurtion Function
const churchEncodedFactorialFunction = (f => (x => f(v => x(x)(v)))(x => f(v => x(x)(v))))(f => n => (b => A => B => b(A)(B)())((n => n(x => _ => f => f)(t => _ => t))(n))(_ => f => x => f(x))(_ => (n0 => n1 => n1((n0 => n1 => f => x => n1(f)(n0(f)(x)))(n0))(f => x => x))(n)(f((n => (p => p(t => _ => t) )( n	(p => (x1 => x2 => f => f(x1)(x2))( (p => p(_ => f => f))(p))( (n => f => x => f(n(f)(x)))((p => p(_ => f => f))(p)))) ((x1 => x2 => f => f(x1)(x2))(f => x => x)(f => x => x))))(n)))))

// Decoded Version to call `churchEncodedFactorialFunction` with number literals like: factorial(3)
const factorial = (f => n => (n => n(i => i + 1)(0))(f((n => Array.from(Array(n).keys(), item => item + 1).reduce((p, n) => (n => f => x => f(n(f)(x)))(p), f => x => x))(n))))(churchEncodedFactorialFunction)
factorial(6)
