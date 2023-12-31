
// now if we want an even better way to move the div around, such that we can do diagonal movement as well
// then we should keep track of all keys being pressed and have parallel cases for each!
let x = 0;
let y = 0;

// keep track of all keys being pressed
const keys = {
    "w": false,
    "a": false,
    "s": false,
    "d": false,
};

const div1 = document.querySelector("#div1");

window.addEventListener("keydown", event => {
    keys[event.key] = true;
    move();
});

window.addEventListener("keyup", event => {
    keys[event.key] = false;
    move();
});



function move() {
    
    function updatePos() {
        div1.style.top = y + "px";
        div1.style.left = x + "px";
    }

    if (keys["w"]) {
        y -= 15;
    }

    if (keys["a"]) {
        x -= 15;
    }

    if (keys["s"]) {
        y += 15;
    }

    if (keys["d"]) {
        x += 15;
    }

    updatePos(); 
}