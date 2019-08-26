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
