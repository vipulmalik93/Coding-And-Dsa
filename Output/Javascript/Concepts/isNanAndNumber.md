```
console.log(isNaN("3"));              // false     ✅ "3" is numeric
console.log(isNaN(Number("3")));      // false     ✅

console.log(isNaN("N/A"));            // true      ✅ clearly not a number
console.log(isNaN(Number("N/A")));    // true      ✅ safe

console.log(isNaN("abc"));            // true      ✅ not a number
console.log(isNaN(Number("abc")));    // true      ✅

console.log(isNaN(""));               // false     ⚠️ empty string becomes 0
console.log(isNaN(Number("")));       // false     ⚠️  Number("") = 0

console.log(isNaN(" "));              // false     ⚠️ whitespace becomes 0
console.log(isNaN(Number(" ")));      // false     ⚠️

console.log(isNaN(undefined));        // true      ⚠️ behaves weird
console.log(isNaN(Number(undefined)));// true      ✅

console.log(isNaN(null));             // false     ⚠️ null becomes 0
console.log(isNaN(Number(null)));     // false     ⚠️
```




---









| Value   | `Number(value)` | `isNaN(value)` | `isNaN(Number(value))` | Show icon? |
| ------- | --------------- | -------------- | ---------------------- | ---------- |
| `"3"`   | `3`             | false          | false                  | ✅ Yes      |
| `"N/A"` | `NaN`           | true           | true                   | ❌ No       |
| `" "`   | `0`             | false          | false                  | ⚠️ Yes?    |
| `""`    | `0`             | false          | false                  | ⚠️ Yes?    |
| `"abc"` | `NaN`           | true           | true                   | ❌ No       |
| `null`  | `0`             | false          | false                  | ⚠️ Yes?    |
