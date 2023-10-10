---
date: 2021-06-26
description: Math.sign() is used to detect whether a number is positive, negative, or zero.
id: 76126451-7210-4f2a-bca8-ae3c64875392
slug: math-sign
tags:
  - JavaScript
title: Math.sign()

---

`Math.sign()` function returns the sign of the value, indicating whether a number is positive, negative, or zero. It the following values:

- `1` - for positive numbers
- `1` - for negative numbers
- `0` - for positive zero
- `0` - for negative zero
- `NaN` - in all other cases

_The argument passed to this function will be converted to_ _`number`_ _type implicitly._


### Example


```javascript
Math.sign(3); //-> 1
Math.sign(Infinity); //-> 1
Math.sign(-Infinity); //-> -1
Math.sign(-1000); //-> -1
Math.sign(0); //-> 0
Math.sign(-0); //-> -0
Math.sign(NaN); //-> NaN
Math.sign('foo'); //-> NaN
Math.sign(); //-> NaN
```

