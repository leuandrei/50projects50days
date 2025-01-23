const hourEl = document.querySelector('.hour');
const minuteEl = document.querySelector('.minute');
const secondEl = document.querySelector('.second');
const timeEl = document.querySelector('.time');
const dateEl = document.querySelector('.date');
const toggle = document.querySelector('.toggle');
const html = document.querySelector('html');


const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

toggle.addEventListener('click', (e) => {
    if(html.classList.contains('dark')){
        html.classList.remove('dark');
        e.target.innerText = 'Dark Mode'
    } else {
        html.classList.add('dark');
        e.target.innerText = "Light Mode";
    }
})

function setTime() {
    const time = new Date();
    const month = time.getMonth();
    const day = time.getDay();
    const hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    const date = time.getDate();

    hourEl.style.transform = `translate(-50%, -100%) rotate(${0.5 * minutes + hours % 12}deg)`;
    minuteEl.style.transform = `translate(-50%, -100%) rotate(${6 * minutes}deg)`;
    secondEl.style.transform = `translate(-50%, -100%) rotate(${6 * seconds}deg)`;

    timeEl.innerText = `${hours}:${minutes < 10 ? "0" + minutes : minutes}`;
    dateEl.innerHTML = `${days[day]}, ${months[month]} <span class="circle">${date}</span>`
}

setTime();

setInterval(setTime, 1000);