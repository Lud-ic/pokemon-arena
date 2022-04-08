export const searchByName = (selectByName, pokemons) =>
  pokemons.filter((select) => select.name.toUpperCase().includes(selectByName));

export const selectType = (selectByType, pokemons) =>
  pokemons.filter((select) => select.type.includes(selectByType));

export const selectResistant = (selectByResistant, pokemons) =>
  pokemons.filter((select) => select.resistant.includes(selectByResistant));

export const selectWeaknesses = (selectByWeaknesses, pokemons) =>
  pokemons.filter((select) => select.weaknesses.includes(selectByWeaknesses));

export const selectRarity = (selectByRarity, pokemons) => {
  const filteredRarity = selectByRarity.filter(
    (pokemonRarity) => pokemonRarity["pokemon-rarity"] == pokemons
  );
  return filteredRarity;
};

export const percentageCalc = (total, portion) => {
  const percentage = Math.round((portion * 100) / total).toFixed(2);
  return percentage;
};

export const sortAZ = (data, order) => {
  const sortaz = [...data];
  if (order === "A-Z") {
    return sortaz.sort((a, z) => (a.name > z.name ? 1 : -1));
  } else {
    return sortaz.sort((a, z) => (a.name > z.name ? -1 : 1));
  }
};
