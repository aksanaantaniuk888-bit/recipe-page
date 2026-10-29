const basil = document.getElementById("basil"); // find in html element by its id
basil.addEventListener("click", () => { // give/listen for event and runs a function "click" - event trigger
    // () => {} specific function/animation that runs when "click"
    basil.classList.add("wiggle");       // classList.add - add from class css (instruction for animation)
    //  "wiggle" - custom class, with our specific instruction for animation
});
basil.addEventListener("animationend", () => { // "animatonend" - what we want happenhs with animation at the end
    basil.classList.remove("wiggle"); // remove animation
});

const ingredients = document.getElementById("ingredients"); // find whole box ingredients
const items = ingredients.getElementByTagName("li"); // find all element inside <li>
for (const ingredient of items) {  // go through all ingredient in a list 
    const checkbox = document.createElement("input"); // create a element (checkbox)for input
    checkbox.type = "checkbox"; // type of element "checkbox"
    checkbox.classList.add("ingredient-checkbox"); // add class from css "ingredient-checkbox"
    ingredient.prepend(checkbox); //prepend - add elemet checkbox in each ingredient from items <li>
    console.log(ingredient.textContent); // log .textContent
}