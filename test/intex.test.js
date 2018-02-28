var { 
  Or,
  And,
  Not,
  If,
  False,
  True,
  decodeBoolean
} = require('../src/index')

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