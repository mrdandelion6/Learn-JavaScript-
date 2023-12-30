
// QUERY SELECTORS
// a popular way to select elements
// we can select element by an ID, classname, tag, or an attribute

let element = document.querySelector("#menuTitle"); // ID example
element.style.backgroundColor = "lightgreen";

element = document.querySelector(".deserts"); // class example
element.style.backgroundColor = "lightgreen";
// only selects the first element if there are several with same class

element = document.querySelector("li"); // tag example
element.style.backgroundColor = "lightgreen";
// only selects the first element if there are several with same tag

element = document.querySelector("[for]"); // attribute example
element.style.backgroundColor = "lightgreen";
// only selects the first element if there are several with same attribute

// to select all elements, we can use querySelectorAll

let elems = document.querySelectorAll("li");
// returns an array like object

elems.forEach(elem => {
    elem.style.backgroundColor = "lightblue";
})

