# Games and Animations 

The most popular way of building games and animations is by implementing the “game loop” pattern. In p5.js sketches, the game loop is implemented via the `draw()` function.

In CodeGuppy, this function is named `loop()` instead of `draw()`. If you’re porting p5.js sketches to CodeGuppy, make sure you rename your `draw()` function to `loop()`.

Also – since the `background()` effects are visible on the bottom layer only, you cannot use `background()` calls inside the `loop()` to clear the screen. Instead you need to call `clear()`

```
var y = 0;

background("Azure");

function loop()
{
    clear();

    circle(400, y, 10);
    
    y++;

    if (y > height)
        y = 0;
}
```