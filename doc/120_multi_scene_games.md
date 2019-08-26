# Multi-scene games

Scene management is a common topic when building games. Even the most basic games have at least three scenes: an intro scene, the main game scene and the credits scene.

With CodeGuppy, beginners can quickly build these multi-scene games without having to worry about the details of scene management.

The editor itself places each scene in a separate code page. You can define as many scenes as you want. Upon execution the first scene code is executed. To switch the scene, you can use the friendly `showScene()` function providing the name of the scene you want to jump to.

You can optionally pass arguments to the new scene you’re switching. 

To perform initialization actions when a scene is displayed, you can define an `enter()` function in each scene. This function will be automatically called when that scene is displayed.
