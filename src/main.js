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
    offset: 0.40,
    threshold: 10,
    progress: true,
    debug: false
  })
  .onStepEnter((response) => {
    let el = response.element;
    el.classList.add("active");

    if(el.className.includes("testing1")) {
      let container = document.querySelector("#story-1-data-container");

      container.style.border = "4px solid purple";
      container.appendChild(image);
    }
  })
  .onStepExit((response) => {
    let el = response.element;
    el.classList.remove("active");

    if(el.className.includes("testing1")) {
      let container = document.querySelector("#story-1-data-container");
      console.log("REMOVED!");
      console.log(container);


      container.style.border = "none";
    }
  })

console.log("Hi. I work!")