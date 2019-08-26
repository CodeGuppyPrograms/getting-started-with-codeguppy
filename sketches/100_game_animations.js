// #SKETCHNAME Game Animations
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
