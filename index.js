const butoon = document.querySelector("#myButt");
const carPic = document.querySelector("#carPicture");

butoon.addEventListener("click", function () {
    carPic.classList.toggle("hidden");
});

// we do element.classList.toggle("hidden")
// where .hidden is a class made in style.css which has display: none;

// setting display: none; shifts all the elements below upwards.
// if we don't want this, we can just set visibility hidden.

// display: block vs none (shifts elements up)
// visibility: visible vs hidden (doesnt shift elements up)
