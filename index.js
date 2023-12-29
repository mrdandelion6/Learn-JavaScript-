callbackSum(2, 3, displayConsole);

function callbackSum(x, y, f) {
    f(x + y);
}

function displayConsole(output) {
    console.log(output);   
}

function displayDOM(output) {
    document.getElementById("p2").innerHTML = output;
}