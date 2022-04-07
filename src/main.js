import data from './data/pokemon/pokemon.js';
import { searchByName, selectType, percentageCalc, sortAZ, } from './data.js'

const pokemons = data.pokemon;

function cardsPokemons(data) {
  document.getElementById("calculation").innerHTML = "HERE ARE ALL POKÉMONS";
  const cardPokemon = document.getElementById("cards");
  cardPokemon.innerHTML = data
    .map(
      (item) => `
    <div class="info-cards">
      <div class="img-and-name-container">
        <img class="img-card" src="${item.img}"/>
        <p class="name"> ${item.name}</p>
      </div>
      <div class="card-details">
        <p><strong> Rarity: </strong> ${item["pokemon-rarity"]}</p>
        <p><strong> Generation: </strong> ${item.generation.name}</p>
        <p><strong> Type: </strong> ${item.type.join(" | ")}</p>
        <p><strong> Weaknesses: </strong> ${item.weaknesses.join(" | ")}</p>
        <p><strong> Resistant: </strong> ${item.resistant.join(" | ")}</p>
      </div>
      <div class="number-container">
        <p class="num">  ${item.num}</p>
      </div>
    </div>`
    )
    .join("");
}
cardsPokemons(pokemons);

const filterType = document.querySelector("#types-filter");
const sortOrder = document.querySelector("#sortAlphabet");


const refreshPage = document.getElementById("clearButton")
const search = document.getElementById("inputSearch")
const percentage = document.getElementById("calculation")


function showPercentage(textPercentage){
  percentage.innerHTML = `THERE ARE ${textPercentage}`
}

filterType.addEventListener("change", (e) => {
  e.preventDefault;
  const arrFilter = selectType(filterType.value, pokemons);
  cardsPokemons(arrFilter);
  const typePercentage = `${percentageCalc(pokemons.length,arrFilter.length)}% POKÉMONS FROM THIS CATEGORY`
  showPercentage(typePercentage);
})

sortOrder.addEventListener("change", (e) => {
  e.preventDefault;
  const selectedSort = e.target.value;
  const filterAz = sortAZ(pokemons, selectedSort);
  cardsPokemons(filterAz);
})

search.addEventListener("keypress", (e) => {
  e.preventDefault;
  const pokemonsName = searchByName(search.value, pokemons);
  cardsPokemons(pokemonsName);
  const namePercentage = `${percentageCalc(pokemons.length,pokemonsName.length)}% FROM THIS CATEGORY`
  showPercentage(namePercentage);
})

refreshPage.addEventListener("click", () => cardsPokemons(pokemons));
