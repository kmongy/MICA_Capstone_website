import scrollama from "scrollama";

let body = document.querySelector("body");
let scrollIntro = body.querySelector("#intro");
let sticky = scrollIntro.querySelector(".sticky-container");
let article = scrollIntro.querySelector("article");
let blurbs = article.querySelectorAll(".blurb");

let story1 = body.querySelector(".story-1");

const scroller  = scrollama();

function handleStepEnter(response) {
  let el = response.element;

  blurbs.forEach(blurb => blurb.classList.remove("active"));
  el.classList.add("active");

  sticky.querySelector("p").innerText = `Step number ${el.dataset.step}`;
  sticky.style.backgroundColor = el.dataset.color;
}


scroller
  .setup({
    step: "#intro article .blurb",
    offset: 0.50,
    debug: false
  })
  .onStepEnter(handleStepEnter)

console.log("Hi. I work!")