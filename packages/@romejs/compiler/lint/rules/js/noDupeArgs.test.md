# `noDupeArgs.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test packages/@romejs/compiler/lint/rules/js/noDupeArgs.test.ts --update-snapshots` to update.

## `no duplicated args allowed`

### `0`

```

 unknown:1:18 lint/js/noDupeArgs ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ Avoid duplicate function arguments. Check the a argument.

  > 1 │ function hello(a, a) {
      │                   ^
    2 │  //
    3 │ }a

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✖ Found 1 problem

```

### `0: formatted`

```
function hello(a, a) {
	//
}

```

### `1`

```

 unknown:1:18 lint/js/noDupeArgs ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ Avoid duplicate function arguments. Check the a argument.

  > 1 │ const hello = (a, a) => {
      │                   ^
    2 │  //
    3 │ }a

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✖ Found 1 problem

```

### `1: formatted`

```
function hello(a, a) {
	//
}

```

### `2`

```

 unknown:1:27 lint/js/noDupeArgs ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ Avoid duplicate function arguments. Check the a argument.

  > 1 │ const hello = function (a, a) {
      │                            ^
    2 │  //
    3 │ }a

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✖ Found 1 problem

```

### `2: formatted`

```
function hello(a, a) {
	//
}

```

### `3`

```
✔ No known problems!

```

### `3: formatted`

```
function foo(foo) {
	console.log(foo);
}

```

### `4`

```
✔ No known problems!

```

### `4: formatted`

```
const foo = "test";
function bar(foo) {
	console.log(foo);
}

```
