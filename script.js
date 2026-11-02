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