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