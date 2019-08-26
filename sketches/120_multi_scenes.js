// #SKETCHNAME Multi-scene games
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
