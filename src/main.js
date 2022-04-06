import data from "./data/pokemon/pokemon.js";
import { searchByName, selectType, calcType, sortAZ } from "./data.js";

const pokemons = data.pokemon;

function cardsPokemons(data) {
  document.getElementById("calculation").innerHTML = "";
  const cardPokemon = document.getElementById("cards");
  cardPokemon.innerHTML = data
    .map(
      (item) => `
    <div class="info-cards">
      <div class="img-name">
        <img class="img-card" src="${item.img}"/>
        <p class="name"> ${item.name}</p>
      </div>
      <div class="card-details">
        <p class="title"> <strong> Rarity: </strong> ${item["pokemon-rarity"]}</p>
        <p class="title"><strong> Generation: </strong> ${item.generation.name}</p>
        <p class="title"><strong> Type: </strong> ${item.type.join(" | ")}</p>
        <p class="title"><strong> Weaknesses: </strong> ${item.weaknesses.join(" | ")}</p>
        <p class="title"><strong> Resistant: </strong> ${item.resistant.join(" | ")}</p>
      </div>
      <div class="number-container">
        <p class="num">  ${item.num}</p>
      </div>
    </div>`
    )
    .join("");
}
cardsPokemons(pokemons);

const search = document.getElementById("inputSearch");

search.addEventListener("keypress", (e) => {
  const searchName = e.search.value;
  const pokemonsName = searchByName(searchName, pokemons);
  cardsPokemons(pokemonsName);
});

const filterType = document.querySelector(".select-typefilters");

filterType.addEventListener("change", () => {
  const filterbyType = filterType.value;
  const arrFilter = selectType(filterbyType, pokemons);
  cardsPokemons(arrFilter);
  typePercent();
});

function typePercent() {
  const filterType = document.querySelector(".select-typefilters").value;
  let result = calcType(pokemons, filterType);
  document.getElementById(
    "calculation"
  ).innerText += `The selected pokémon represent ${result}% of the total.`;
}

const sortOrder = document.getElementById("sortAlphabet");

sortOrder.addEventListener("change", (event) => {
  const selectedSort = event.target.value;
  const filterAz = sortAZ(pokemons, selectedSort);
  cardsPokemons(filterAz);
});

const refreshPage = document.getElementById("clearButton");

refreshPage.addEventListener("click", () => cardsPokemons(pokemons));
