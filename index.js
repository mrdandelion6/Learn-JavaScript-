let element = document.querySelector("#veg");

let parent = element.parentElement;
console.log(parent); // selects body

let sibling = element.nextElementSibling;
sibling.style.backgroundColor = "lightgreen";


// we can also access children of an element using .children which is an array like property

let child = element.children[1];
child.style.backgroundColor = "lightgreen";

// to select all children we do this:
let childrenn = Array.from(element.children); // we convert the array-like object into an array so we can use forEach on it.

childrenn.forEach(child => {
    child.style.backgroundColor = "lightgreen";
})