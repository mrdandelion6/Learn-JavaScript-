let c = 0;
let max = window.prompt("count up to.. ?");
max = Number(max);

const mytimer = setInterval(countUp, 1000);

function countUp() {
    c ++;
    console.log(c);

    if (c  >= max) {
        clearInterval(mytimer);
    }
}