# Setting the background

The `background()` function operates in the background layer. 

The function has also been enriched to accept more values as parameters. For instance, `background()` can be used with a color or a static background from the assets library.

> Note: Because `background()` operates on the bottom layer only, you cannot use this function to erase the drawing layer inside the `loop()` event. For that purpose you need to use `clear()`.

```
// #SKETCHNAME Background

background("Hearts");

// background("Pink");

// background("#104210");
```