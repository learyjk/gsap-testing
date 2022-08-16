import anime from "animejs/lib/anime.es.js";

anime({
  targets: "path",
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: "easeInOutSine",
  duration: 1000,
  delay: function (el, i) {
    return i * 900;
  },
  direction: "forward",
  loop: true,
});
