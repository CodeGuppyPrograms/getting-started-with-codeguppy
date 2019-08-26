// #SKETCHNAME Input
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
