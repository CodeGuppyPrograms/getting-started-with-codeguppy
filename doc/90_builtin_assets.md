# Built-in assets

CodeGuppy comes with assets built-in. This allows users to focus on writing code, rather than organizing projects or managing assets. This is what enables “type-in” programs.

There are four groups of assets. Each asset has a unique name.
-	Backgrounds
-	Sprites
-	Music
-	Sound effects

The following CodeGuppy functions can work with assets. They receive as argument the asset name.
- `background()`
- `sprite()`
- `music()`
- `sound()`

Because assets need to be pre-loaded before the program is executed, the CodeGuppy environment is parsing the code prior to execution to identify what assets are used by the program in order to load them.

In most cases users use static names with these functions. If variables are used instead, CodeGuppy won’t be able to figure the used assets. In that case users have to call the `preload()` function as explained later.

```
background('Scene1');
sprite('plane');
music('8 bit retro');

sound('female_congratulations');
```