
item = "chocolat";
price = 10000;

let timer1 = setTimeout(firstMsg, 4000, item, price); // returns an ID
let timer2 = setTimeout(secondMsg, 2000);
let timer3 = setTimeout(thirdMsg, 6000);

function firstMsg(item, price) {
    alert(`BUY A ${item} BAR FOR $${price}`);
}
function secondMsg() {
    alert(`pls NO scam`);
}
function thirdMsg() {
    alert(`WHY DID U REDEEM IT`);
}

document.getElementById("BUYcourse").onclick = function () {
    clearTimeout(timer1);
    clearTimeout(timer2);
    clearTimeout(timer3);
    alert("thx for buying <33")
}