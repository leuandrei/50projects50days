const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const decreaseBtn = document.getElementById('decrease');
const increaseBtn = document.getElementById('increase');
const clearBtn = document.getElementById('clear');
const sizeText = document.getElementById('size');
const colorBtn = document.getElementById('color');

let size = 20;
let color = 'black';
let x, y = 0;
let isPressed = false;
let sizeInterval;

colorBtn.addEventListener('change', (e) => {
    color = e.target.value;
})

decreaseBtn.addEventListener(('click'), () => {
    if (size > 0) {
        size -= 3;
        sizeText.innerText = size;
    }
});

increaseBtn.addEventListener(('click'), () => {
    if (size < 60) {
        size += 3;
        sizeText.innerText = size;
    }
    
});

clearBtn.addEventListener('click', () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
});

canvas.addEventListener('mousedown', (e) => {
    isPressed = true;

    x = e.offsetX;
    y = e.offsetY;
});

canvas.addEventListener('mouseup', (e) => {
    isPressed = false;

    x = undefined;
    y = undefined;
});

canvas.addEventListener('mousemove', (e) => {
    if(isPressed) {
        const x2 = e.offsetX;
        const y2 = e.offsetY;

        drawCircle(x2, y2);
        drawLine(x, y, x2, y2);
        x = x2;
        y = y2;
    }
});

function drawCircle(x, y) {
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.fill();
}

function drawLine(x1, y1, x2, y2) {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.strokeStyle = color;
    ctx.lineWidth = size * 2;
    ctx.stroke();
}

