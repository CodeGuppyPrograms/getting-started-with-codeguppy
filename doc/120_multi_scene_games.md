# Multi-scene games

Scene management is a common topic when building games. Even the most basic games have at least three scenes: an intro scene, the main game scene and the credits scene.

With CodeGuppy, beginners can quickly build these multi-scene games without having to worry about the details of scene management.

The editor itself places each scene in a separate code page. You can define as many scenes as you want. Upon execution the first scene code is executed. To switch the scene, you can use the friendly `showScene()` function providing the name of the scene you want to jump to.

You can optionally pass arguments to the new scene you’re switching. 

To perform initialization actions when a scene is displayed, you can define an `enter()` function in each scene. This function will be automatically called when that scene is displayed.

```
// #BEGINSCENE Intro
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

```
// #BEGINSCENE Game
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

```
// #BEGINSCENE Credits
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
