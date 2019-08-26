# Modules

As presented before, the code pages from the CodeGuppy editor are mostly used for writing code for scenes.

A second use of the code pages is for defining code modules. This usage is intended for advanced coding. Code modules can be used from the rest of the code via the `require()` function. 

> Note: the `require()` function is executing the code of that module upon each invocation.

## Main Code

```
var utils = require("Utils");

var r1 = utils.add(100, 200);
println(r1);

var r2 = utils.mult(100, 200);
println(r2);
```

## Utils

```
function add(n1, n2)
{
    return n1 + n2;
}

function mult(n1, n2)
{
    return n1 * n2;
}
```
