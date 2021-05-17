import "./styles/style.css";
import portfolioPhoto from "./images/photo.jpg";
import firstPostPhoto from "./images/post1.png";
import secondPostPhoto from "./images/post2.png";
import thirdPostPhoto from "./images/post3.png";
import fourthPostPhoto from "./images/post4.png";
import fifthPostPhoto from "./images/post5.png";
import sixthPostPhoto from "./images/post6.png";
import sevenPostPhoto from "./images/post7.png";
import eightPostPhoto from "./images/post8.png";
import ninePostPhoto from "./images/post9.png";
import tenPostPhoto from "./images/post10.png";
import elevenPostPhoto from "./images/post11.png";
import twelvePostPhoto from "./images/post12.png";
import thirteenPostPhoto from "./images/post13.png";
import fourteenPostPhoto from "./images/post14.png";
import fifteenPostPhoto from "./images/post15.png";
import sixteenPostPhoto from "./images/post16.png";

let PortfolioImg = document.getElementById("portfolio-photo");
PortfolioImg.src = portfolioPhoto;

let post1Photo = document.getElementById("post1-photo");
post1Photo.src = firstPostPhoto;

let post2Photo = document.getElementById("post2-photo");
post2Photo.src = secondPostPhoto;

let post3Photo = document.getElementById("post3-photo");
post3Photo.src = thirdPostPhoto;

let post4Photo = document.getElementById("post4-photo");
post4Photo.src = fourthPostPhoto;

let post5Photo = document.getElementById("post5-photo");
post5Photo.src = fifthPostPhoto;

let post6Photo = document.getElementById("post6-photo");
post6Photo.src = sixthPostPhoto;

let post7Photo = document.getElementById("post7-photo");
post7Photo.src = sevenPostPhoto;

let post8Photo = document.getElementById("post8-photo");
post8Photo.src = eightPostPhoto;

let post9Photo = document.getElementById("post9-photo");
post9Photo.src = ninePostPhoto;

let post10Photo = document.getElementById("post10-photo");
post10Photo.src = tenPostPhoto;

let post11Photo = document.getElementById("post11-photo");
post11Photo.src = elevenPostPhoto;

let post12Photo = document.getElementById("post12-photo");
post12Photo.src = twelvePostPhoto;

let post13Photo = document.getElementById("post13-photo");
post13Photo.src = thirteenPostPhoto;

let post14Photo = document.getElementById("post14-photo");
post14Photo.src = fourteenPostPhoto;

let post15Photo = document.getElementById("post15-photo");
post15Photo.src = fifteenPostPhoto;

let post16Photo = document.getElementById("post16-photo");
post16Photo.src = sixteenPostPhoto;

//background-animation

particlesJS(
  "particles-js",

  {
    particles: {
      number: {
        value: 80,
        density: {
          enable: true,
          value_area: 800,
        },
      },
      color: {
        value: "#ffffff",
      },
      shape: {
        type: "circle",
        stroke: {
          width: 0,
          color: "#000000",
        },
        polygon: {
          nb_sides: 5,
        },
        image: {
          src: "img/github.svg",
          width: 100,
          height: 100,
        },
      },
      opacity: {
        value: 0.5,
        random: false,
        anim: {
          enable: false,
          speed: 1,
          opacity_min: 0.1,
          sync: false,
        },
      },
      size: {
        value: 5,
        random: true,
        anim: {
          enable: false,
          speed: 40,
          size_min: 0.1,
          sync: false,
        },
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: "#ffffff",
        opacity: 0.4,
        width: 1,
      },
      move: {
        enable: true,
        speed: 6,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out",
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200,
        },
      },
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: true,
          mode: "grab",
        },
        onclick: {
          enable: true,
          mode: "push",
        },
        resize: true,
      },
      modes: {
        grab: {
          distance: 400,
          line_linked: {
            opacity: 1,
          },
        },
        bubble: {
          distance: 400,
          size: 40,
          duration: 2,
          opacity: 8,
          speed: 3,
        },
        repulse: {
          distance: 200,
        },
        push: {
          particles_nb: 4,
        },
        remove: {
          particles_nb: 2,
        },
      },
    },
    retina_detect: true,
    config_demo: {
      hide_card: false,
      background_color: "#b61924",
      background_image: "",
      background_position: "50% 50%",
      background_repeat: "no-repeat",
      background_size: "cover",
    },
  }
);

//preloader

var p = document.createElement("div");
p.innerHTML =
  "<div style='z-index:100000' id='owlreporter-preloader'><div id='loader'></div><div class='loader-section section-left'></div><div class='loader-section section-right'></div></div>";
document.body.insertBefore(p, document.body.firstChild);
function pageload() {
  var e = new Date().getTime(),
    t = (e - before) / 1e3,
    n = document.getElementById("loadingtime");
  n.innerHTML = "Page load: " + t + " seconds.";
}
(window.onload = function () {
  pageload();
}),
  setTimeout(function () {
    document.body.className += " loaded";
  }, 1500),
  document.addEventListener
    ? document.addEventListener(
        "DOMContentLoaded",
        function () {
          document.removeEventListener(
            "DOMContentLoaded",
            arguments.callee,
            !1
          ),
            domReady();
        },
        !1
      )
    : document.attachEvent &&
      document.attachEvent("onreadystatechange", function () {
        "complete" === document.readyState &&
          (document.detachEvent("onreadystatechange", arguments.callee),
          domReady());
      });

//text animation
let textWrapper = document.querySelector(".ml12");
textWrapper.innerHTML = textWrapper.textContent.replace(
  /\S/g,
  "<span class='letter'>$&</span>"
);

anime
  .timeline({ loop: true })
  .add({
    targets: ".ml12 .letter",
    translateX: [40, 0],
    translateZ: 0,
    opacity: [0, 1],
    easing: "easeOutExpo",
    duration: 1200,
    delay: (el, i) => 500 + 30 * i,
  })
  .add({
    targets: ".ml12 .letter",
    translateX: [0, -30],
    opacity: [1, 0],
    easing: "easeInExpo",
    duration: 1100,
    delay: (el, i) => 100 + 30 * i,
  });
