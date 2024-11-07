
import anime from "animejs";

import { app, button } from "./elements";
import title from "./content";

app.append(button);

button.innerText = title;
button.addEventListener("click", function () {
  shake.restart();
  snow.restart();
});

// initial shake code from: https://codepen.io/Katdelorme/pen/VxoYKw
var shake = anime({
  autoplay: false,
  targets: ".back",
  easing: "easeInOutQuad",
  // translateX: '13rem',
  rotateY: -30,
  duration: 100,
  loop: 8,
  direction: "alternate",
});


// intial snow code from:  https://codepen.io/blaustern_fotografie/pen/vYEwwqx
var container = document.querySelector(".anime-container");

var n = 500; // how many snowflakes
for (var i = 0; i < n; i++) {
  var dot = document.createElement("div");
  dot.classList.add("dot");
  container.appendChild(dot);

  var size = anime.random(5, 10);
  dot.style.width = size + "px";
  dot.style.height = size + "px";

  dot.style.left = anime.random(0, window.innerWidth) + "px";
  dot.style.top = anime.random(-700, -10) + "px";

  // dot.style.opacity = Math.random(0.5, 1);
}

var time, top, h;
var snow = anime({
  delay: 1000, // so snow starts after shake
  autoplay: false,
  easing: "linear",

  targets: document.querySelectorAll(".dot"),

  translateY: {
    value: function (target) {
      h = parseInt(anime.get(target, "height"));
      top = parseInt(anime.get(target, "top"));
      return window.innerHeight - top - h;
    },
    duration: function () {
      time = anime.random(7000, 15000);
      return time;
    },
  },
  translateX: {
    value: function () {
      return anime.random(-100, 100);
    },
    duration: function () {
      return time;
    },
  },
});