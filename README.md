# Church Encoding

🔥 The Factorial function as a one-line expression, without mathematical operators, executed with parameter 7, is used only:
- Lambda Calculus (Terms, Reduction Operators)
- Church Encoding

You can run copy & past it in browser console and see result
```js
(n => n(i => i + 1)(0))((f => (x => f(v => x(x)(v)))(x => f(v => x(x)(v))))(f => n => (b => A => B => b(A)(B)())((n => n(x => _ => f => f)(t => _ => t))(n))(_ => f => x => f(x))(_ => (n0 => n1 => n1((n0 => n1 => f => x => n1(f)(n0(f)(x)))(n0))(f => x => x))(n)(f((n => (p => p(t => _ => t) )( n  (p => (x1 => x2 => f => f(x1)(x2))( (p => p(_ => f => f))(p))( (n => f => x => f(n(f)(x)))((p => p(_ => f => f))(p)))) ((x1 => x2 => f => f(x1)(x2))(f => x => x)(f => x => x))))(n)))))(f => x => f(f(f(f(f(f(f(x))))))))) 
// 5040
```

 🤯 Lambda Calculus is Turing Complete, and we can build whole FP & OOP paradigms on it
