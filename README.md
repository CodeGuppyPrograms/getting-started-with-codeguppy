#CodeGuppy for p5.js connoisseurs

![Image](thumb.png)

# What is CodeGuppy?

[codecuppy.com](https://codeguppy.com) is an online environment where kids, teens and creative adults learn and practice JavaScript via creative coding.

CodeGuppy is based on the popular [p5.js](https://p5js.org/), [p5.play](http://molleindustria.github.io/p5.play/) and [p5.scenemanager](https://github.com/mveteanu/p5.SceneManager) libraries. 

Since CodeGuppy is intended to education, a few extra extensions has been added on top of the above mentioned libraries.

This tutorial is indended for:

- users that are familiar with p5.js and are coming to CodeGuppy
- users that want to graduate from CodeGuppy to p5.js

# No setup()

Users familiar with p5.js know that one of the first functions they have to define in their sketch is the `setup()` function.

With CodeGuppy the p5.js `setup()` function is no longer required. It will be ignored if you try to define it. As an educational environment, CodeGuppy does a few decisions automatically for the program in order to simplify coding for beginners.

CodeGuppy automatically initiate the canvas to 800x600 resolution.

```
circle(400, 300, 200);
```

# Gentle introduction to programming

In a typical p5.js sketch, the users are typically typing their own code after at least `setup()` function is defined.

Since there is no need to define the `setup()` function in CodeGuppy, students can learn programming in a progressive way.

Functions can be introduced later in the curriculum, once the basic knowledge of JavaScript is assimilated.

```
stroke("Navy");

for(var i = 0; i < 100; i++)
{
    circle(400, 300, i);
}
```

# Enriched drawing API

CodeGuppy enriches the p5.js drawing APIs with a few new functions that are easier to use and understand by young coders.

For example: `circle()`

Did you know you can have lots of fun with just one function? Checkout this code extracted from the first CodeGuppy lesson.

```
// Draw bear face
circle(400, 300, 200);

// Draw left year
circle(250, 100, 50);
circle(270, 122, 20);

// Draw right year
circle(550, 100, 50);
circle(530, 122, 20);

// Draw left eye
circle(300, 220, 30);
circle(315, 230, 10);

// Draw right eye
circle(500, 220, 30);
circle(485, 230, 10);

// Draw nose
circle(400, 400, 90);
circle(400, 350, 20);
```

# CodeGuppy defaults

CodeGuppy changes a few of the p5.js defaults to different values.

For instance:
-	There is no fill color defined upon program initialization. Try to draw a few shapes and you’ll see that they are transparent
-	The default angle mode is changed to DEGREES. p5.js sketches uses RADIANS as default.

```
background("Navy");
stroke("White");

// Notice that ellipse is transparent
ellipse(400, 300, 300, 300);
```

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

# Sprites

CodeGuppy comes with a library of pre-selected sprites. Many of the included sprites are animated. The CodeGuppy runtime takes care of proper animation display by leveraging the p5.play library.

However, for ease of use, a few functions and extensions are built on top of this library.

To load and display a sprite, you only need to call the `sprite()` function, passing as argument the sprite name.

You can also specify, the size of the sprite, the animation that you want to display and the position on the screen where you want the sprite to be initially displayed. You can obviously change these later.

```
sprite("plane").velocity.x = 1;
```

# Preloading assets

In majority cases users are using background, music, sound, sprite with static arguments. This allow CodeGuppy environment to determine the assets used by a program and pre-load them automatically.

If however, the user wants to let the code at runtime determine what asset to use, then he must declare all assets used by the program using the `preload()` function. This can appear in any part of the program although it is recommended to place it at the beginning.

```
preload("Scene1", "Scene2");

var scene = random(["Scene1", "Scene2"]);
background(scene);
```

# Type-in programs

With CodeGuppy, type-in programs are back! Popular in the 70s and 80s, type-in programs were small programs included in magazines or other printed materials that required users to enter them from the keyboard.

Although this method of entering programs is not very time efficient, it is very good in educational terms. Users that type in programs gets comfortable much quicker with the language and eventually learn to program much faster.

Afterall, coding is all about typing programs using the keyboard.

How CodeGuppy enables type-in programs? Very simple: all assets and libraries come included! Users don’t need to focus on project organization or asset management. They only need to open the code editor and type the program.

> Educators and parents can leverage this feature and hand over printed code listings to kids so they can exercise typing.

```
// This program can be found in a magazine...
background('Icebergs');
sprite('santa', 0.9);

stroke("Red")
textSize(30);
text("We wish you a Merry Christmas!", 150, 30);
```

# 5 layers

CodeGuppy programs use up to 5 layers:

- Background
- Sprites with .depth <= 0
- Drawing layer
- Sprites with .depth > 0
- HTML widgets

The background layer is drawn at the bottom, and the objects from all the other layers are added on top.

```
// Layer 1 (Bottom layer)
background('Autumn');

// Layer 2 (sprites with .depth <= 0)
var cat = sprite('cat', 200, 300)
cat.depth = -1;

// Layer 4 (sprites with .depth > 0)
var dog = sprite('dog', 600, 300);
dog.depth = 1;

// Layer 5 (Top layer. HTML5 widgets)
var btn = createButton(650, 560, 100, 30);
btn.setText("Click me");


// Layer 3 (drawing)
fill("White");

function loop()
{
    clear();
    
    circle(mouseX, mouseY, 100);
}
```

# Setting the background

The `background()` function operates in the background layer. 

The function has also been enriched to accept more values as parameters. For instance, `background()` can be used with a color or a static background from the assets library.

> Note: Because `background()` operates on the bottom layer only, you cannot use this function to erase the drawing layer inside the `loop()` event. For that purpose you need to use `clear()`.

```
background("Hearts");

// background("Pink");

// background("#104210");
```

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

# Multi-scene games

Scene management is a common topic when building games. Even the most basic games have at least three scenes: an intro scene, the main game scene and the credits scene.

With CodeGuppy, beginners can quickly build these multi-scene games without having to worry about the details of scene management.

The editor itself places each scene in a separate code page. You can define as many scenes as you want. Upon execution the first scene code is executed. To switch the scene, you can use the friendly `showScene()` function providing the name of the scene you want to jump to.

You can optionally pass arguments to the new scene you’re switching. 

To perform initialization actions when a scene is displayed, you can define an `enter()` function in each scene. This function will be automatically called when that scene is displayed.

## Scene: Intro

```
function enter()
{
    background("Scene1");
    textSize(30);
    text("Click to begin...", 300, 570);
}

function mouseClicked()
{
    showScene("Game");
}
```

## Scene: Game

```
background("Scene2");
function loop()
{
    line(pmouseX, pmouseY, mouseX, mouseY);
}

function mouseClicked()
{
    showScene("Credits", [mouseX, mouseY]);
}
```

## Scene: Credits

```
function enter()
{
    background("Hearts2");
    textAlign(CENTER, CENTER);

    textSize(30);
    text("Congratulations", width / 2, height / 2);

    if (PublicVars.Arguments)
    {
        textSize(10);
        text("Last known coordinates: " + PublicVars.Arguments[0] + " x " + PublicVars.Arguments[1], width / 2, height / 2 + 50);
    }
}

function mouseClicked()
{
    showScene("Intro");
}

```

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

# Support “INPUT” programs

If you’re building string processing programs, or even some games, you often need to ask for user input. For instance, to enter a long text using the keyboard.

CodeGuppy provides two very simple APIs to display textbox-es and buttons.

The two functions are `createTextBox()` and `createButton()`. They operate on the top most layer, therefore they are displayed on top of the graphical canvas.

```
var edit1 = createEdit(100, 100, 500, 30);
edit1.setText("I love Codeguppy!");

var btn1 = createButton(100, 150, 100, 30);
btn1.setText("Click Me");
btn1.onclick = handleButton1Click;

function handleButton1Click()
{
    var txt = edit1.getText();
    alert(txt);
}
```

# Other APIs

CodeGuppy contains also other useful APIs that help you easily build games and fun applications. For instance users may find particular useful the APIs for collision detection:

- `collisionPointCircle(pointX, pointY, circleX, circleY, circleR)`
- `collisionPointLine(pointX, pointY, lineX1, lineY1, lineX2, lineY2)`
- `collisionCircleCircle(circle1X, circle1Y, circle1R, circle2X, circle2Y, circle2R)`
- `collisionCircleRect(circleX, circleY, circleR, rectX, rectY, rectWidth, rectHeight)`
- `collisionPointRect(pointX, pointY, rectX, rectY, rectWidth, rectHeight)`
- `collisionRectRect(rect1X, rect1Y, rect1Width, rect1Height, rect2X, rect2Y, rect2Width, rect2Height)`

Note: Some collision functions are duplicated for convenience:

- `collisionCirclePoint(circleX, circleY, circleR, pointX, pointY)`
- `collisionLinePoint(lineX1, lineY1, lineX2, lineY2, pointX, pointY)`
- `collisionRectCircle(rectX, rectY, rectWidth, rectHeight, circleX, circleY, circleR)`
- `collisionRectPoint(rectX, rectY, rectWidth, rectHeight, pointX, pointY)`


# More info

For more info, please visit [codecuppy.com](https://codeguppy.com)
