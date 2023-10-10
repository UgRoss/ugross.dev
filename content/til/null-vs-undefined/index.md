---
date: 2020-12-30
description: In JavaScript, the terms "null" and "undefined" are often used to
  indicate the absence of a value, but they have distinct meanings and
  behaviors.
id: e2f269ef-2f63-4f9f-9ba8-d0b872c2955b
slug: null-vs-undefined
tags:
  - JavaScript
title: null vs undefined

---

### Similarities

- Both are primitives
- Both are falsy:
	- `Boolean(undefined) //-> false
	Boolean(null) //-> false`

### Differences

- `undefined` means that a variable has not been declared, or it has been declared but has not yet been assigned a value.
- `null` is an assignment value that means “no value”. Javascript itself never sets a value to `null`
- Difference in `typeof`:
	- `typeof null; //-> "object"
	typeof undefined; //-> "undefined"`
- `undefined` is not a valid JSON while `null` is.

### Tips

- Check if a variable is `null`:

```javascript
variable === null;
```

- Check if a variable is `undefined`:

```javascript
typeof variable === 'undefined';

// ⬇️ or this, but will throw ReferenceError if variable wasn't defined
variable === undefined;

```

- Comparison _(Equality returns_ _`true`_ _and identity returns_ _`false`__)_:

```javascript
undefined == null; //-> true

undefined === null; //-> false
```

