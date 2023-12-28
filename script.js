let val = document.getElementById("countLabel").innerHTML;
val = Number(val);

document.getElementById("decrease").onclick = function () {
    val -= 1;
    document.getElementById("countLabel").innerHTML = val;
}

document.getElementById("increase").onclick = function () {
    val += 1;
    document.getElementById("countLabel").innerHTML = val;
}

document.getElementById("reset").onclick = function () {
    val = 0;
    document.getElementById("countLabel").innerHTML = 0;
}