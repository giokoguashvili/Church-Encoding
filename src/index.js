const True = t => _ => t
const False = _ => f => f

const If = b => A => B => b(A)(B)
const Not = b => b(False)(True)

const decodeBoolean = b => b(true)(false)

module.exports = { 
    Not,
    If,
    False,
    True,
    decodeBoolean
};