const basil = document.getElementById("basil"); // find in html element by its id
basil.addEventListener("click", () => { // give/listen for event and runs a function "click" - event trigger
    // () => {} specific function/animation that runs when "click"
    basil.classList.add("wiggle");       // classList.add - add from class css (instruction for animation)
    //  "wiggle" - custom class, with our specific instruction for animation
});
basil.addEventListener("animationend", () => { // "animatonend" - what we want happenhs with animation at the end
    basil.classList.remove("wiggle"); // remove animation
});