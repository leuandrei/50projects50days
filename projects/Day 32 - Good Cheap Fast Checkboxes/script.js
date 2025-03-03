const toggles = document.querySelectorAll('.toggle');
const good = document.getElementById('good');
const cheap = document.getElementById('cheap');
const fast = document.getElementById('fast');

toggles.forEach(toggle => toggle.addEventListener('change', (e) => doTheTrick(e.target)));

function doTheTrick(clickedToggle) {
    if (good.checked && cheap.checked && fast.checked) {
        if (good === clickedToggle) {
            cheap.checked = false;
        } else if (cheap === clickedToggle) {
            fast.checked = false;
        } else {
            good.checked = false;
        }
    }
}