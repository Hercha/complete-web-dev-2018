var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

function init() {
    color1.value = "#FF0000";
    color2.value = "#FFFF00";

    setGradient();
}

init();

function setGradient() {
    body.style.background =
    "linear-gradient(to right, "
    + color1.value
    + ", "
    + color2.value
    + ")";

    css.textContent = body.style.background + ";";
}

function randomColor() {
    var r = Math.floor(Math.random() * 255);
    var g = Math.floor(Math.random() * 255);
    var b = Math.floor(Math.random() * 255);
    var col = "rgb(" + r + "," + g + "," + b + ")";
}

console.log(randomColor());

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);