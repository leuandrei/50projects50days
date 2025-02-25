const button = document.getElementById('button');
const toasts = document.getElementById('toasts');

const messages = [
    'Message One',
    'Message Two',
    'Message Three',
    'Message Four',
];

button.addEventListener('click', () => createNotification());

function createNotification() {
    const toast = document.createElement('div');
    const msgId = Math.floor(Math.random() * messages.length);
    toast.innerHTML = messages[msgId];
    toast.classList.add('toast');
    toasts.appendChild(toast);
    setTimeout(() => {
        toasts.removeChild(toast);
        toast.remove();
    }, 3000);
}