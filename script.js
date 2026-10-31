const postButton = document.getElementById("post-comment");
const commentsList = document.getElementById("comments-list");
postButton.addEventListener("click", () => {
    const name = document.getElementById("visitor-name").value;
    const comment = document.getElementById("comment").value;

    const newComment = document.createElement("div");
    const author = document.createElement("strong");
    const message = document.createElement("p");

    author.textContent = name;
    message.textContent = comment;

    newComment.append(author, message);
    commentsList.prepend(newComment);
    document.getElementById("visitor-name").value = "";
    document.getElementById("comment").value = "";
});