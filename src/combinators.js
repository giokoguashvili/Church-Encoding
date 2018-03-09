//Strict fixed point combinator
//https://en.wikipedia.org/wiki/Fixed-point_combinator
const Z = f => (x => f(v => x(x)(v)))(x => f(v => x(x)(v))) 

module.exports = {
	Z
}
