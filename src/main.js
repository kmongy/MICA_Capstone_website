import scrollama from "scrollama";

let body = document.querySelector("body");
let scrollIntro = body.querySelector("#intro");
let sticky = scrollIntro.querySelector(".sticky-thing");
let article = scrollIntro.querySelector("article");
let blurbs = article.querySelectorAll(".blurb");

const scroller  = scrollama();

function handleStepEnter(response) {
  let el = response.element;

  blurbs.forEach(blurb => blurb.classList.remove("active"));
  el.classList.add("active");

  sticky.querySelector("p").innerText = `Step number ${el.dataset.step}`;
  sticky.style.backgroundColor = el.dataset.color;
}

function init() {
  scroller
    .setup({
      step: "#intro article .blurb",
      offset: 0.50,
      debug: true
    })
    .onStepEnter(handleStepEnter)
}

init()
console.log("Hi. I work!")