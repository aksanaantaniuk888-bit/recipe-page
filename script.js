

const carouselDots = document.getElementById("carousel-dots").getElementsByTagName("button");

const heroVideo = document.getElementById("hero-video");

const videos = [
    "videos/video1.mp4",
    "videos/video2.mp4",
    "videos/video3.mp4"
];

for (let i = 0; i < carouselDots.length; i++) {
    carouselDots[i].addEventListener("click", () => {

        for (const dot of carouselDots) {
            dot.classList.remove("active");
        }

        carouselDots[i].classList.add("active");

        heroVideo.src = videos[i];
        heroVideo.play();
    });
}
