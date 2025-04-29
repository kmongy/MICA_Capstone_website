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

    console.log('HI. INSIDE')

    if(el.className.includes("lexicon-match")) {
      let container = document.querySelector(".may-bubble-nrc");

      container.src = new URL("./components/leave-common-word.svg", import.meta.url);
      console.log(container);
    }
  })
  .onStepExit((response) => {
    let el = response.element;
    el.classList.remove("active");
  })

console.log("Hi. I work!")