
// element.addEventListener(event, function, useCapture)
const innerDiv = document.getElementById("innerDiv");
const outerDiv = document.getElementById("outerDiv");

innerDiv.addEventListener("click", function () {
    changeBlue(innerDiv);
});

function changeBlue(element) {
    alert(`you selected ${element.id}`)
    element.style.backgroundColor = "lightblue";
}
// since innerDiv is nested within outerDiv, the clicks will overlap when clicking innerDiv
// the question is, which one do we want to be triggered first? both together, or only one? 
// using alerts we see that by default the inner happens first

// passing in true for the third argument into addEventListener, useCapture, will make this event happen first
// so we can pass in true for outerDiv's event listener!

outerDiv.addEventListener("click", function () {
    changeBlue(outerDiv);
}, true);