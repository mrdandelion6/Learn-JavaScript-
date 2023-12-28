// factor out a constant
const submitButton = document.getElementById("hiButton");
const visaButton = document.getElementById("visaBtn");
const masterButton = document.getElementById("masterBtn");
const paypalButton = document.getElementById("ppBtn");

submitButton.onclick = function() {
    if (document.getElementById("BoxYa").checked) {
        submitButton.innerHTML = "thanks!";
    } else {
        submitButton.innerHTML = "SELECT IT >:("
    }

    if (visaButton.checked) {
        alert("You are paying with Visa!");
    } else if (masterButton.checked) {
        alert("You are paying with Mastercard!");
    } else if (paypalButton.checked) {
        alert("You are paying with PayPal!");
    }
}
