const Zero  = f => x => x
const One   = f => x => f(x)
const Two   = f => x => f(f(x))
const Three = f => x => f(f(f(x)))
const Four  = f => x => f(f(f(f(x))))
const Five  = f => x => f(f(f(f(f(x)))))
const Six   = f => x => f(f(f(f(f(f(x))))))
const Seven = f => x => f(f(f(f(f(f(f(x)))))))
const Eight = f => x => f(f(f(f(f(f(f(f(x))))))))
const Nine  = f => x => f(f(f(f(f(f(f(f(f(x)))))))))
const Ten   = f => x => f(f(f(f(f(f(f(f(f(f(x))))))))))

const decodeNumber = n => n(i => i + 1)(0)

module.exports = {
	Zero,
	One,
	Two,
	Three,
	Four,
	Five,
	Six,
	Seven,
	Eight,
	Nine,
	decodeNumber
}
