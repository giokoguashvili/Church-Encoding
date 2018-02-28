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