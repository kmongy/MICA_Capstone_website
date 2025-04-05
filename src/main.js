import scrollama from "scrollama";

let body = document.querySelector("body");
let scrolling = body.querySelector(".story-element");
let sticky = scrolling.querySelector(".sticky-container");
let article = scrolling.querySelector("article");
let blurbs = article.querySelectorAll(".blurb");

const scroller  = scrollama();

scroller
  .setup({
    step: ".story-element article .blurb",
    offset: 0.50,
    debug: true
  })
  .onStepEnter((response) => {
    let el = response.element;
    el.classList.add("active");
  })
  .onStepExit((response) => {
    let el = response.element;
    el.classList.remove("active");
  })

console.log("Hi. I work!")