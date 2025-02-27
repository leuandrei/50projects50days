const textEl = document.getElementById("text");
const speedEl = document.getElementById("speed");
const text = "Wouldn't you know? Dynamic writable text!"

let idx = 1;
let speed = 300;

function writeText() {
    if (idx > text.length) {
        idx = 1;
    }
    textEl.innerText = text.slice(0, idx);
    idx++;
    setTimeout(writeText, speed);
}

speedEl.addEventListener('input', (e) => {
    speed = 300/e.target.value;
});

writeText();