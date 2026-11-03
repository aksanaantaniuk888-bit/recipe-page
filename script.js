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
const items = ingredients.getElementsByTagName("li"); // find all element inside <li>
for (const ingredient of items) {  // go through all ingredient in a list 
    const checkbox = document.createElement("input"); // create a element (checkbox)for input
    checkbox.type = "checkbox"; // type of element "checkbox"
    checkbox.classList.add("ingredient-checkbox"); // add class from css "ingredient-checkbox"
    ingredient.prepend(checkbox); //prepend - add elemet checkbox in each ingredient from items <li>
    checkbox.addEventListener("change", () => {
        basil.classList.add("wiggle");
    });
}
const postButton = document.getElementById("post-comment");
const commentsList = document.getElementById("comments-list");
postButton.addEventListener("click", () => { // give a decsribel function for postButton when we "click"
    const name = document.getElementById("visitor-name").value; // show value that was input in visitor name 
    const comment = document.getElementById("comment").value; // show value from comment 

    const newComment = document.createElement("div"); // div - create separate container posted comment 
    const author = document.createElement("strong"); // strong - create bold text - will use got the athor comment name
    const message = document.createElement("p"); // p - paragraph - create p for showing text of comment separately from the name

    author.textContent = name; //  Textcontent author = name - "strong" (bold) = value visitor name
    message.textContent = comment; // Textcontent message = comment  - "p" = value comment

    newComment.append(author, message); // append - adds element. at the end of container div newComment
    commentsList.prepend(newComment); //  prepend - adds element at the beginning of the container // show new comment at the top of list
    document.getElementById("visitor-name").value = ""; // clear the name input after the posting comment
    document.getElementById("comment").value = ""; // clear the comment input aftr posting 
});

const emojiButtons = document.getElementById("emoji-buttons").getElementsByTagName("button"); // find all emoji button
const commentInput = document.getElementById("comment");

for (const emojiButton of emojiButtons) {
    emojiButton.addEventListener("click", () => {
        commentInput.value += emojiButton.textContent; // add thi clicked emoji to the input comment
    });
}
