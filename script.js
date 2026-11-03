
console.log("Carousel JavaScript is working");
const carouselDots = document.getElementById("carousel-dots").getElementsByTagName("button");

for (const dot of carouselDots) {
    dot.addEventListener("click", () => {
        for (const otherDot of carouselDots) {
            otherDot.classList.remove("active");
        }

        dot.classList.add("active");
    });
}
