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

    if(el.className.includes("testing123")) {
      let container = document.querySelector(".testing123");
      let newImage = document.querySelector(".testing1234")

      console.log(newImage);

      container.style.border = "4px solid purple";
      newImage.src = "./assets/house1.png";

      console.log(newImage);
    }
  })
  .onStepExit((response) => {
    let el = response.element;
    el.classList.remove("active");

    if(el.className.includes("testing123")) {
      let container = document.querySelector(".testing123");
      console.log("REMOVED!");
      console.log(container);


      container.style.border = "none";
    }
  })

console.log("Hi. I work!")