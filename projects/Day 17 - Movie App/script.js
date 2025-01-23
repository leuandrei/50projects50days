"use strict"

//import doesn't work due to CORS policy, will proceed to the next project
//This project file will have a null key for github
//import { API_KEY } from "./config.js";
API_KEY = '';
const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=' +
                 API_KEY + '&page=1';
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280';
const SEARCH_URL = 'https://api.themoviedb.org/3/search/movie?api_key=' +
                    API_KEY + '&query="';


const main = document.getElementById('main');
const form = document.getElementById('form');
const search = document.getElementById('search');

getMovies(API_URL);

async function getMovies(url) {
    const res = await fetch(url);
    const data = await res.json();

    showMovies(data.results);
}

function getRating(vote) {
    if(vote<5) {
        return 'red';
    } else if (vote < 8) {
        return 'orange';
    } else {
        return 'green';
    }
}

function showMovies(movies){
    main.innerHTML = '';

    movies.forEach((movie) => {
        const {title, poster_path, vote_average, overview} = movie;

        const movieEl = document.createElement('div');
        movieEl.classList.add('movie');

        movieEl.innerHTML = `<img src="${IMG_PATH + poster_path}" alt="${title}">
            <div class="movie-info">
                <h3>${title}</h3>
                <span class="${getRating(vote_average)}">${vote_average}</span>
            </div>
            <div class="overview">
                <h3>Overview</h3>
                ${overview}
            </div>`;

        main.appendChild(movieEl);
    })
}

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const searchTerm = search.value;

    // console.log(searchTerm);
    // console.log(SEARCH_URL + searchTerm + '"');

    if (searchTerm && searchTerm !== '') {
        getMovies(SEARCH_URL + searchTerm + '"');
        search.value = '';
    } else {
        window.location.reload();
    }
})