import data from "./data/pokemon/pokemon.js";
import {
  searchByName,
  selectType,
  percentageCalc,
  selectRarity,
  sortAZ,
  selectWeaknesses,
  selectResistant,
} from "./data.js";

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
const filterRarity = document.querySelector("#rarity-filter");
const filterWeaknesses = document.querySelector("#weaknesses-filter");
const filterResistant = document.querySelector("#resistant-filter");

const refreshPage = document.getElementById("clearButton");
const search = document.getElementById("inputSearch");
const percentage = document.getElementById("calculation");

function showPercentage(textPercentage) {
  percentage.innerHTML = `THERE ARE ${textPercentage}`;
}

filterType.addEventListener("change", (e) => {
  e.preventDefault;
  const arrFilter = selectType(filterType.value, pokemons);
  filterRarity.selectedIndex = 0;
  filterWeaknesses.selectedIndex = 0;
  filterResistant.selectedIndex = 0;
  sortOrder.selectedIndex = 0;
  cardsPokemons(arrFilter);
  const typePercentage = `${percentageCalc(
    pokemons.length,
    arrFilter.length
  )}% POKÉMONS FROM THIS CATEGORY`;
  showPercentage(typePercentage);
});

filterResistant.addEventListener("change", (e) => {
  e.preventDefault;
  const arrResistant = selectResistant(filterResistant.value, pokemons);
  filterRarity.selectedIndex = 0;
  filterWeaknesses.selectedIndex = 0;
  filterType.selectedIndex = 0;
  sortOrder.selectedIndex = 0;
  cardsPokemons(arrResistant);
  const resistantPercentage = `${percentageCalc(
    pokemons.length,
    arrResistant.length
  )}% POKÉMONS FROM THIS CATEGORY`;
  showPercentage(resistantPercentage);
});

filterWeaknesses.addEventListener("change", (e) => {
  e.preventDefault;
  const arrWeaknesses = selectWeaknesses(filterWeaknesses.value, pokemons);
  filterRarity.selectedIndex = 0;
  filterResistant.selectedIndex = 0;
  filterType.selectedIndex = 0;
  sortOrder.selectedIndex = 0;
  cardsPokemons(arrWeaknesses);
  const WeaknessesPercentage = `${percentageCalc(
    pokemons.length,
    arrWeaknesses.length
  )}% POKÉMONS FROM THIS CATEGORY`;
  showPercentage(WeaknessesPercentage);
});

filterRarity.addEventListener("change", (e) => {
  e.preventDefault;
  const arrRarity = selectRarity(pokemons, e.target.value);
  filterWeaknesses.selectedIndex = 0;
  filterResistant.selectedIndex = 0;
  filterType.selectedIndex = 0;
  sortOrder.selectedIndex = 0;
  cardsPokemons(arrRarity);
  const typePercentage = `${percentageCalc(
    pokemons.length,
    arrRarity.length
  )}% POKÉMONS FROM THIS CATEGORY`;
  showPercentage(typePercentage);
});

sortOrder.addEventListener("change", (e) => {
  e.preventDefault;
  const selectedSort = e.target.value;
  filterWeaknesses.selectedIndex = 0;
  filterResistant.selectedIndex = 0;
  filterType.selectedIndex = 0;
  filterRarity.selectedIndex = 0;
  const filterAz = sortAZ(pokemons, selectedSort);
  cardsPokemons(filterAz);
});

search.addEventListener("keypress", (e) => {
  e.preventDefault;
  const pokemonsName = searchByName(search.value.toUpperCase(), pokemons);
  cardsPokemons(pokemonsName);
  const namePercentage = `${percentageCalc(
    pokemons.length,
    pokemonsName.length
  )}% FROM THIS CATEGORY`;
  showPercentage(namePercentage);
});

refreshPage.addEventListener("click", () => cardsPokemons(pokemons));
