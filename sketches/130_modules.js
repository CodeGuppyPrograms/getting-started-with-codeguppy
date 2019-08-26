// #SKETCHNAME Modules
// #BEGINSCENE Code
var utils = require("Utils");

var r1 = utils.add(100, 200);
println(r1);

var r2 = utils.mult(100, 200);
println(r2);
// #BEGINSCENE Utils
function add(n1, n2)
{
    return n1 + n2;
}

function mult(n1, n2)
{
    return n1 * n2;
}
