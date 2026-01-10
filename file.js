const slider = document.querySelector(".news-slider");
const nextBtn = document.querySelector(".slide-btn.next");
const prevBtn = document.querySelector(".slide-btn.prev");

const cards = document.querySelectorAll(".news-card");
const cardWidth = cards[0].offsetWidth + 30; // card + gap
const container = document.querySelector(".slider-container");

let index = 0;
const visibleCards = Math.floor(container.offsetWidth / cardWidth);
const maxIndex = cards.length - visibleCards;

nextBtn.addEventListener("click", () => {
    index++;
    if (index > maxIndex) index = 0;
    slider.style.transform = `translateX(-${index * cardWidth}px)`;
});

prevBtn.addEventListener("click", () => {
    index--;
    if (index < 0) index = maxIndex;
    slider.style.transform = `translateX(-${index * cardWidth}px)`;
});