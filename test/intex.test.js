var { 
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
});