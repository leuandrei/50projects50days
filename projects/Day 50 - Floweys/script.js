const screens = document.querySelectorAll('.screen');
const choose_flowey_btns = document.querySelectorAll('.choose-flowey-btn');
const start_btn = document.getElementById('start-btn');
const game_container = document.querySelector('.game-container');
const timeEl = document.getElementById('time');
const scoreEl = document.getElementById('score');
const message = document.getElementById('message');
let seconds = 0;
let score = 0;
let selected_flowey = {};

start_btn.addEventListener('click', () => screens[0].classList.add('up'));

choose_flowey_btns.forEach(btn => {
    btn.addEventListener('click', () => {
        const img = btn.querySelector('img');
        const src = img.getAttribute('src');
        const alt = img.getAttribute('alt');
        selected_flowey = { src, alt };
        screens[1].classList.add('up');
        setTimeout(createFlowey, 1000);
        startGame();
    });
});

function startGame() {
    setInterval(increaseTime, 1000);
}

function increaseTime() {
    let m = Math.floor(seconds / 60);
    let s = seconds % 60;
    m = m < 10 ? `0${m}` : m;
    s = s < 10 ? `0${s}` : s;
    timeEl.innerHTML = `Time: ${m}:${s}`;
    seconds++;
}

function createFlowey() {
    const flowey = document.createElement('div');
    flowey.classList.add('flowey');
    const { x, y } = getRandomLocation();
    flowey.style.top = `${y}px`;
    flowey.style.left = `${x}px`;
    flowey.innerHTML = `<img src="${selected_flowey.src}" alt="${selected_flowey.alt}" style="transform: rotate(${Math.random() * 360}deg)" />`;
    flowey.addEventListener('click', catchFlowey);
    game_container.appendChild(flowey);
}

function getRandomLocation() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const x = Math.random() * (width - 200) + 100;
    const y = Math.random() * (height - 200) + 100;
    return { x, y };
}

function catchFlowey() {
    score++;
    if(score > 19) {
        message.classList.add('visible');
    }
    scoreEl.innerHTML = `Score: ${score}`;
    this.classList.add('caught');
    setTimeout(() => this.remove(), 2000);
    setTimeout(createFlowey, 1000);
    setTimeout(createFlowey, 1500);
}
