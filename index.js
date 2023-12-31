// we want to begin an animation when we click the button
const myButt = document.querySelector("#beginButt");
const myAnimation = document.querySelector("#div1");

myButt.addEventListener("click", begin);

// scaling image
function begin() {
    let timerID = null;
    let scaleX = 1;
    let scaleY = 1;
    
    timerID = setInterval(frame, 5);
    // repeatedly invoke frame() every 5 ms

    function frame() {
        if (scaleX >= 2) {
            clearInterval(timerID);
        } else {
            scaleX += 0.01;
            scaleY += 0.01;
            myAnimation.style.transform = "scale("+scaleX+","+scaleY+")";
        }
    }
}
