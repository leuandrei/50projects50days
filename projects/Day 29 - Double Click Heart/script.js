const loveMe = document.querySelector('.loveMe');
const times = document.getElementById('times');

let likedTimes = 0;

loveMe.addEventListener('dblclick', (e) => {
    const heart = document.createElement('span');
    heart.innerText = "♥";
    const x = e.clientX;
    const y = e.clientY;
    const leftOffset = e.target.offsetLeft;
    const topOffset = e.target.offsetTop;
    const xInside = x - leftOffset;
    const yInside = y - topOffset;

    heart.style.left = `${xInside}px`;
    heart.style.top = `${yInside}px`;

    loveMe.appendChild(heart);

    times.innerHTML = ++likedTimes;

    setTimeout(() => heart.remove(), 1000);
})