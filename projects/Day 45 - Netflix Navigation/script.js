const openBtn = document.querySelector('.open-btn');
const closeBtn = document.querySelector('.close-btn');
const nav = document.querySelectorAll('.nav');

openBtn.addEventListener('click', () => {
    nav.forEach(navEl => navEl.classList.add('visible'));
    openBtn.style.display = "none";
});

closeBtn.addEventListener('click', () => {
    nav.forEach(navEl => navEl.classList.remove('visible'));
    openBtn.style.display = "inline-block";
})