# 5 layers

CodeGuppy programs use up to 5 layers:

- Background
- Sprites with .depth <= 0
- Drawing layer
- Sprites with .depth > 0
- HTML widgets

The background layer is drawn at the bottom, and the objects from all the other layers are added on top.
