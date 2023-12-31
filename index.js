// events are user interactions etc.
// for instance, onclick event

// we can have the HTML code reference the functions here
function doSomething() {
    alert("you did something !")
}

// or we can directly set events here as well
document.getElementById("myButt").onclick = function () {
    alert("you clicked the BUTTON!")
}
// another event is onload; does the function when website loads in

// another is onchange; does when the element has been changed
document.getElementById("nameText").onchange = function () {
    alert("YO!");
}

let myDiv = document.getElementById("div1");

myDiv.onmouseover = function () {
    myDiv.style.backgroundColor = "lightgreen";
}

myDiv.onmouseleave = function () {
    myDiv.style.backgroundColor = "lightblue";
}