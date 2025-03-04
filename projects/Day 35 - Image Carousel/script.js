const container = document.getElementById('imgs');
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");
const images = document.querySelectorAll('#imgs img');
let currentIndex = 0;

console.log(currentIndex);

prevButton.addEventListener('click', () => {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    }
    container.style.transform = `translateX(-${currentIndex * 500}px)`;

});

function increaseCounter(){
    currentIndex++;
    if (currentIndex > (images.length - 1)){
        currentIndex = 0;
    }
    container.style.transform = `translateX(-${currentIndex * 500}px)`;
}

nextButton.addEventListener('click', increaseCounter);

setInterval(increaseCounter, 3000);