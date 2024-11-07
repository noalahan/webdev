// range slider
const green = document.querySelector("#green");
const flower = document.querySelector("#flower");
var range = document.querySelector("#range");

function rangeHandler(event) {
  green.src = "img/green " + event.target.value + ".png";
  flower.src = "img/flower " + event.target.value + ".png";
}

range.addEventListener("input", rangeHandler);

// drop down menu selector
const windowElement = document.querySelector("#window");
const windowSelector = document.querySelector("#windowSelect");

function changeHandler(event) {
  windowElement.src = "img/" + event.target.value + ".png";
}

windowSelector.addEventListener("change", changeHandler);
