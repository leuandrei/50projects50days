const range = document.getElementById('range');
const label = document.getElementById('rangeLabel');

range.addEventListener('input', (e) => {
    const value = +e.target.value;

    const range_width = getComputedStyle(e.target).getPropertyValue('width');
    const label_width = getComputedStyle(label).getPropertyValue('width');

    const range_numeric_width = +range_width.substring(0, range_width.length - 2);
    const label_numeric_width = +label_width.substring(0, label_width.length - 2);
    const thumb_numeric_width = 24; //defined in css

    const max = +e.target.max;
    const min = +e.target.min;
    const percent = value / max;
    let left = 0;
    // if (percent < 0.5) {
    //     left = range_numeric_width * percent - (label_numeric_width - thumb_numeric_width) / 2;
    // } else {
    //     left = (range_numeric_width - thumb_numeric_width/2) * percent - label_numeric_width / 2;
    // }
    left = range_numeric_width * percent - label_numeric_width / 2 + computeThumbOffset(percent, thumb_numeric_width/2);

    label.style.left = `${left}px`;

    label.innerText = value;
})

function computeThumbOffset(percent, width) {
    if (percent === 0.5) {
        return 0;
    } else if (percent < 0.5) {
        return (0.5 - percent) * 2 * width;
    } else {
        return (percent - 0.5) * -2 * width;
    }
}