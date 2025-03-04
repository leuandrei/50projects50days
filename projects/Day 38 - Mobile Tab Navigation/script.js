const images = document.querySelectorAll('.phone img');
const menuItems = document.querySelectorAll('.phone nav ul li');

images[0].classList.add('show');
menuItems[0].classList.add('active');

menuItems.forEach((item, idx) => {
    item.addEventListener('click', () => {
        for (let i = 0; i < images.length; i++) {
            images[i].classList.remove('show');
            menuItems[i].classList.remove('active');
        }
        images[idx].classList.add('show');
        menuItems[idx].classList.add('active');
    })
})