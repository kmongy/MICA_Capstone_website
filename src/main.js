import scrollama from "scrollama";

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

    if(el.className.includes("nrc-surprise")) {
      let container = document.querySelector(".may-bubble-nrc");

      container.src = new URL("./components/may-bubble-surprise.svg", import.meta.url);
    }

    if(el.className.includes("lexicon-match")) {
      let container = document.querySelector(".may-bubble-nrc");

      container.src = new URL("./components/may-bubble-match-word.svg", import.meta.url);
    }

    if(el.className.includes("all-positive")) {
      let container = document.querySelector(".may-bubble-nrc");

      container.src = new URL("./components/nrc-all-positive.svg", import.meta.url);
    }
  })
  .onStepExit((response) => {
    let el = response.element;
    el.classList.remove("active");
  })