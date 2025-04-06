import scrollama from "scrollama";

let body = document.querySelector("body");
let scrolling = body.querySelector(".story-element");
let sticky = scrolling.querySelector(".sticky-container");
let article = scrolling.querySelector("article");
let blurbs = article.querySelectorAll(".blurb");

let image1 = "./assets/headline1.png";
let image2 = "./assets/testing1.png";


const scroller  = scrollama();

scroller
  .setup({
    step: ".story-element article .blurb",
    offset: 0.50,
    progress: true,
    debug: false
  })
  .onStepEnter((response) => {
    let el = response.element;
    el.classList.add("active");

    if(el.parentElement.className == "story-1-stepper") {
      let container = document.querySelector("#story-1-data-container");

      container.style.backgroundColor = "purple";
    }
  })
  .onStepExit((response) => {
    let el = response.element;
    el.classList.remove("active");
  })

console.log("Hi. I work!")