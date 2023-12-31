
// ADDING/CHANGING HTML ELEMENTS

// creating a new element tag
const nameTag = document.createElement("h2");

// two ways to change html element
// 1) .innerHTML (vulnerable to XSS attacks)
// 2) .textContent (more secure)

nameTag.textContent = "YOSKIES";
document.body.append(nameTag);

// issue with using innerHTML: by altering innerHTML, it is possible to run a script!
// in other words, if users can alter innerHTML then they can run scripts on your website.
// this is done by also assigning tags along with some text.

// textContent cannot do this and only display everything as text
// anything given as textContent is only parsed as text.

// let us try adding something to an HTML list

const myList = document.getElementById("fruit");
const listItem = document.createElement("li");
listItem.textContent = "mango";

// myList.append(listItem);
// myList.prepend(listItem); // to put at start of list

// to put at a specific spot we must do this:
myList.insertBefore(listItem, myList.getElementsByTagName("li")[2]);
// the index [2] is the index in the list where we want it
