const btn = document.getElementById('ripple');

btn.addEventListener('click', function(e) {
    const x = e.clientX;
    const y = e.clientY;

    const btnTop = e.target.offsetTop;
    const btnLeft = e.target.offsetLeft;

    const xInside = x - btnLeft;
    const yInside = y - btnTop;

    console.log(x, y, btnLeft, btnTop, xInside, yInside);

    const circle = document.createElement('span');
    circle.classList.add('circle');
    circle.style.top = yInside + "px";
    circle.style.left = xInside + "px";

    this.appendChild(circle);

    setTimeout(() => circle.remove(), 500);
})