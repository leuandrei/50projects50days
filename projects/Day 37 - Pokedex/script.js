const pokeContainer = document.getElementById('poke-container');
const POKEMON_COUNT = 150;
const colors = {
    fire: '#FDDFDF',
    grass: '#DFGDE0',
    electric: '#FCF7DE',
    water: '#DEF3FD',
    ground: '#F4E7DA',
    rock: '#D5D5D4',
    fairy: '#FCEAFF',
    poison: '#98D7A5',
    bug: '#F8D5A3',
    dragon: '#97B3E6',
    psychic: '#EAEDA1',
    flying: '#F5F5F5',
    fighting: '#E6E0D4',
    normal: '#F5F5F5',
}

async function fetchPokemons() {
    for (let i = 1; i <= POKEMON_COUNT; i++){
        await getPokemon(i);
    }
}

async function getPokemon(id){
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const res = await fetch(url);
    const data = await res.json();
    createPokemonCard(data);
}

function createPokemonCard(pokemon) {
    const pokemonEl = document.createElement('div');
    pokemonEl.classList.add('pokemon');
    const pokeName = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
    const pokeType = pokemon.types[0].type.name;

    pokemonEl.innerHTML = `
    <div class="img-container">
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${pokemon.id}.png" alt="Pokemon Picture">
    </div>
    <div class="info">
        <span class="number">${pokemon.id.toString().padStart(3, '0')}</span>
        <h3 class="name">${pokeName}</h3>
        <small class="type">Type: <span>${pokeType}</span></small>
    </div>
    `;
    pokemonEl.style.backgroundColor = colors[pokeType];

    pokeContainer.appendChild(pokemonEl);
}

fetchPokemons();