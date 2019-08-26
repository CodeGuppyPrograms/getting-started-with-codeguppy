# Support “text-based output” programs

When teaching coding or when building algorithms / math programs it is very convenient to just print the results on the screen.

CodeGuppy allow users to quickly print numbers and strings via the `print()` and `println()` functions.

> Note: These functions are printing on the top most layer in a dedicated HTML5 transparent area. This area is scrollable in order to accommodate an arbitrary number of rows. Once the printing layer has been displayed, you cannot hide it… therefore you need to decide ahead of time if you need a text-based output or a graphical output for your program.

> Note: Since the printing layer is transparent, you can use the `background()` function to set a fun background for boring programs.

```
background("Fabric2");

for(var i = 0; i < 10; i++)
{
    println("i = " + i);
}
```
