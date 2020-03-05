


const pokeContainer = document.querySelector('.pokeContainer');
const pokemonCount = 150;
const colors = {
  fire: '#FDDFDF',
  grass: '#DEFDE0',
  electric: '#FCF7DE',
  water: '#DEF3FD',
  ground: '#f4e7da',
  rock: '#d5d5d4',
  fairy: '#fceaff',
  poison: '#98d7a5',
  bug: '#f8d5a3',
  dragon: '#97b3e6',
  psychic: '#eaeda1',
  flying: '#F5F5F5',
  fighting: '#E6E0D4',
  normal: '#F5F5F5'
};

const main_types = Object.keys(colors);
console.log(main_types);

const fetchPokemons = async () => {
  for (let i = 1; i <= pokemonCount; i++) {
    await getPokemon(i);
  }
}

function createPokemonCard(pokemon) {
  const card = document.createElement('div');
  card.classList.add('pokemonCard')
  const name = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);


  const poke_types = pokemon.types.map(el => el.type.name);
  console.log(poke_types);
  const type = main_types.find(type => poke_types.indexOf(type) > -1);
  console.log(type);

  const color = colors[type];

  card.style.background = color;

  const pokeInnerHtml = `
    <div class="pokemonImage">
      <img src="${pokemon.sprites.front_default}"/>
    </div>
    <div class="pokemonInfo">
      <span class="pokemonInfo__Number">
      #${pokemon.id.toString().padStart(3, 0)}
      </span>
      <div class="pokemonInfo__Name">${name}</div>
      <span class="pokemonInfo__Type">Type: ${type}</span>

    </div>

  `
    // console.log(pokemon);
  card.innerHTML = pokeInnerHtml;

  pokeContainer.appendChild(card)
}

const getPokemon = async (id) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`
  const res = await fetch(url);
  const pokemon = await res.json();
  createPokemonCard(pokemon);
}

fetchPokemons();

