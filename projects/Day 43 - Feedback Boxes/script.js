const ratingsContainer = document.querySelector('.ratings-container');
const sendBtn = document.getElementById('send');
const panel = document.getElementById('panel');

let selectedRating = '';

ratingsContainer.addEventListener('click', (e) => {
    let activeElement = document.querySelector('.active');
    if (activeElement){
        activeElement.classList.remove('active');
    }
    if (e.target.parentNode.classList.contains('rating')) {
        e.target.parentNode.classList.add('active');
        if (e.target.tagName === 'SMALL') {
            selectedRating = e.target.innerHTML;
        } else {
            selectedRating = e.target.nextElementSibling.innerHTML;
        }
    } else if (e.target.classList.contains('rating')) {
        e.target.classList.add('active');
        selectedRating = e.target.lastChild.innerText;
    }
})

sendBtn.addEventListener('click', () => {
    if (selectedRating === ''){
        return ;
    }
    panel.innerHTML = `
    <span class="red-heart">♥</span>
    <strong>Thank You!</strong>
    <br/>
    <strong>Feedback: ${selectedRating}</strong>
    <p>We'll use your feedback to improve our services</p>
    `
})