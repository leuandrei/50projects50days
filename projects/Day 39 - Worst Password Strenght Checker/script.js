const bg = document.getElementById('background');
const pw = document.getElementById('password');

pw.addEventListener('input', (e) => {
    let textLen = e.target.value.length;
    let blurModifier = 20;
    if (pw.length > 10) {
        blurModifier = 0;
    } else {
        blurModifier = 20 - (textLen * 2);
    }
    bg.style.filter = `blur(${blurModifier}px)`
})