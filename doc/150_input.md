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
