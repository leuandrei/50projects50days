const nav = document.querySelector('.nav');
window.addEventListener('scroll', stickNav);

function stickNav() {
    if(window.scrollY > nav.offsetHeight + 150) {
        nav.classList.add('active');
    } else {
        nav.classList.remove('active');
    }
}