const container = document.getElementById('container');
const colors = ['dodgerblue', 'darkorange', 'chartreuse', 'purple', 'red', 'white'];
const SQUARES = 500;

for (let i = 0; i < SQUARES; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    square.addEventListener('mouseover', () => setColor(square));
    square.addEventListener('mouseout', () => removeColor(square));
    container.appendChild(square);
}

function setColor(element) {
    const randomColor = colors[Math.floor(Math.random() * (colors.length - 1))];
    element.style.background = randomColor;
    element.style.boxShadow = `0 0 2px ${randomColor}, 0 0 10px ${randomColor}`;
}

function removeColor(element) {
    element.style.background = '#1d1d1d';
    element.style.boxShadow = '0 0 2px black';
}