var { 
  Or,
  And,
  Not,
  If,
  False,
  True,
  decodeBoolean
} = require('../src/booleans')

var {
  Pair,
  First,
  Second
} = require('../src/pairs')


var {
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
} = require('../src/numbers')

var {
	IsZero,
	Succ,
	Sum,
	Pred,
	Mul,
	Mul1,
	Sub,
	Pow
} = require('../src/arithmetics')

test('check booleans', () => {
  expect(decodeBoolean(True)).toBe(true);
  expect(decodeBoolean(False)).toBe(false);

  expect(If(True)("Yes")("No")).toBe("Yes");
  expect(If(False)("Yes")("No")).toBe("No");

  expect(decodeBoolean(Not(True))).toBe(false);
  expect(decodeBoolean(Not(False))).toBe(true);

  expect(decodeBoolean(And(True)(True))).toBe(true);
  expect(decodeBoolean(And(True)(False))).toBe(false);
  expect(decodeBoolean(And(False)(True))).toBe(false);
  expect(decodeBoolean(And(False)(False))).toBe(false);

  expect(decodeBoolean(Or(True)(True))).toBe(true);
  expect(decodeBoolean(Or(True)(False))).toBe(true);
  expect(decodeBoolean(Or(False)(True))).toBe(true);
  expect(decodeBoolean(Or(False)(False))).toBe(false);
});

test('check pair functionality', () => {
  expect(decodeBoolean(First(Pair(True)(False)))).toBe(true);
  expect(decodeBoolean(Second(Pair(True)(False)))).toBe(false);
});

test('check numbers', () => {
	expect(decodeNumber(Zero)).toBe(0);
	expect(decodeNumber(One)).toBe(1);
	expect(decodeNumber(Two)).toBe(2);
	expect(decodeNumber(Three)).toBe(3);
	expect(decodeNumber(Four)).toBe(4);
	expect(decodeNumber(Five)).toBe(5);
	expect(decodeNumber(Six)).toBe(6);
	expect(decodeNumber(Seven)).toBe(7);
	expect(decodeNumber(Eight)).toBe(8);
	expect(decodeNumber(Nine)).toBe(9);
});

test('check arithmetics', () => {
	expect(decodeBoolean(IsZero(Zero))).toBe(true);
	expect(decodeBoolean(IsZero(One))).toBe(false);
	expect(decodeNumber(Succ(Two))).toBe(3);
	expect(decodeNumber(Sum(Two)(Five))).toBe(7);

	//expect(decodeNumber(First(Pair(One)(Three))))
	expect(decodeNumber(Pred(Six))).toBe(5);
	expect(decodeNumber(Sub(Nine)(Five))).toBe(4);
	expect(decodeNumber(Mul(Two)(Seven))).toBe(14);
	expect(decodeNumber(Mul1(Three)(Nine))).toBe(27);

	expect(decodeNumber(Pow(Five)(Three))).toBe(125);
});
