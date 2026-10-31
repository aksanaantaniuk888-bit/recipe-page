const postButton = document.getElementById("post-comment");

postButton.addEventListener("click", () => {
    const name = document.getElementById("visitor-name").value;
    const comment = document.getElementById("comment").value;

    console.log(name);
    console.log(comment);
});