# Sprites

CodeGuppy comes with a library of pre-selected sprites. Many of the included sprites are animated. The CodeGuppy runtime takes care of proper animation display by leveraging the p5.play library.

However, for ease of use, a few functions and extensions are built on top of this library.

To load and display a sprite, you only need to call the `sprite()` function, passing as argument the sprite name.

You can also specify, the size of the sprite, the animation that you want to display and the position on the screen where you want the sprite to be initially displayed. You can obviously change these later.

```
sprite("plane").velocity.x = 1;
```