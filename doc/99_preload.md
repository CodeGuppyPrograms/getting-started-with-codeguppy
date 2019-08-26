# Preloading assets

In majority cases users are using background, music, sound, sprite with static arguments. This allow CodeGuppy environment to determine the assets used by a program and pre-load them automatically.

If however, the user wants to let the code at runtime determine what asset to use, then he must declare all assets used by the program using the `preload()` function. This can appear in any part of the program although it is recommended to place it at the beginning.

```
preload("Scene1", "Scene2");

var scene = random(["Scene1", "Scene2"]);
background(scene);
```
