const True = t => _ => t
const False = _ => f => f

const If = b => A => B => b(A)(B)
const Not = b => b(False)(True)
const And = b1 => b2 => b1(b2)(b1)
const Or = b1 => b2 => b1(b1)(b2)

const decodeBoolean = b => b(true)(false)

module.exports = { 
    Or,
    And,
    Not,
    If,
    False,
    True,
    decodeBoolean
};
