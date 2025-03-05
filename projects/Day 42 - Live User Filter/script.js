const result = document.getElementById('result');
const filter = document.getElementById('filter');
const listItems = [];

getData();

async function getData() {
    const res = await fetch('https://randomuser.me/api?results=50');
    const { results } = await res.json();

    result.innerHTML = '';
    setTimeout(20);
    results.forEach(user => {
        const li = document.createElement('li');
        listItems.push(li); //why are you retarded again?
        li.innerHTML = `
        <img src="${user.picture.thumbnail}" alt="User Picture">
        <div class="user-info">
            <h4>${user.name.first} ${user.name.last}</h4>
            <p>${user.location.city}, ${user.location.country}</p>
        </div>
        `
        result.appendChild(li);
    });
}

filter.addEventListener('input', (e) => filterData(e.target.value));

function filterData(searchTerm) {
    const fields = document.querySelectorAll('#result li');
    fields.forEach(field => {
        if (field.innerText.toLowerCase().includes(searchTerm.toLowerCase())) {
            field.classList.remove('hide');
        } else {
            field.classList.add('hide');
        }
    });
}