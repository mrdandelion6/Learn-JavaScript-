// new way with func expr
let count = 0;
document.getElementById("decreaseBtn").onclick = function () {
    count -= 1;
    document.getElementById("counterLabel").innerHTML = count;
}
document.getElementById("increaseBtn").onclick = function () {
    count += 1;
    document.getElementById("counterLabel").innerHTML = count;
}
