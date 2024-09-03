// Assignment: Fetching Data by ID from the Pokémon API

// Objective:
// By the end of this assignment, you will be able to create a function that fetches data from the Pokémon API by a given ID.
// This exercise will help you practice handling asynchronous data fetching and processing with JavaScript.

// INSTRUCTIONS:
// You will create a function that fetches data for a specific Pokémon, berry, ability, or item from the Pokémon API based on an ID provided.
// You will also include a method to log relevant information from the fetched data.


// EXAMPLE 1: Fetch Pokémon Data by ID

// Function to fetch Pokémon data by ID
async function fetchPokemonById(pokemonId) {
  const url = `https://pokeapi.co/api/v2/pokemon/${pokemonId}`;
  const response = await fetch(url);
  const data = await response.json();
  console.log(`Pokémon Name: ${data.name}`);
  console.log(`Height: ${data.height}`);
  console.log(`\n`);
}

// Fetch and log data for Pokémon with ID 1 (Bulbasaur)
fetchPokemonById(1);


// EXAMPLE 2: Fetch Berry Data by ID

// Function to fetch Berry data by ID
async function fetchBerryById(berryId) {
  const url = `https://pokeapi.co/api/v2/berry/${berryId}`;
  const response = await fetch(url);
  const data = await response.json();
  console.log(`Berry Name: ${data.name}`);
  console.log(`Flavor: ${data.flavor}`);
  console.log(`\n`);
}

// Fetch and log data for Berry with ID 1
fetchBerryById(1);


// EXERCISE 1: Fetch Ability Data by ID

// INSTRUCTIONS:
// Create a function called `fetchAbilityById` that fetches data for a given ability ID from the Pokémon API.
// Log the ability name and effect to the console.

// TODO: Write your function here

async function fetchAbilityById(abilityId) {
  const url = `https://pokeapi.co/api/v2/ability/${abilityId}`;
  const response =  await fetch(url);
  const data = await response.json();
  console.log(`Ability Name: ${data.name}`);
  console.log(`Effect: ${data.effect_entries[1].effect.value}`);
  console.log(`\n`);
}

fetchAbilityById(1);

// EXERCISE 2: Fetch Item Data by ID

// INSTRUCTIONS:
// Create a function called `fetchItemById` that fetches data for a given item ID from the Pokémon API.
// Log the item name and its category to the console.

// TODO: Write your function here

async function fetchItemById(itemId) {
  const url = `https://pokeapi.co/api/v2/item/${itemId}`;
  const response = await fetch(url);
  const data = await response.json();
  console.log(`Item Name: ${data.name}`);
  console.log(`Item Category: ${data.category.name}`);
  console.log(`\n`);
}

fetchItemById(1);

// EXERCISE 3: Fetch Type Data by ID

// INSTRUCTIONS:
// Create a function called `fetchTypeById` that fetches data for a given type ID from the Pokémon API.
// Log the type name and its damage relations to the console.

// TODO: Write your function here

async function fetchTypeById(typeId) {
  const url = `https://pokeapi.co/api/v2/type/${typeId}`;
  const response = await fetch(url);
  const data = await response.json();
  console.log(`Type Name:`, data.name);
  console.log(`Damage Relations:`, data.damage_relations);
  console.log(`\n`);
}

fetchTypeById(1);
// EXERCISE 4: Fetch Nature Data by ID

// INSTRUCTIONS:
// Create a function called `fetchNatureById` that fetches data for a given nature ID from the Pokémon API.
// Log the nature name and its characteristics to the console.

// TODO: Write your function here

async function fetchNatureById(natureId) {
  const url = `https://pokeapi.co/api/v2/nature/${natureId}`;
  const response = await fetch(url);
  const data = await response.json();
  console.log(`Nature Name: ${data.name}`);
  console.log(`Nature Characteristics:`, Object.keys(data));
  console.log(`\n`);
  }
  
  


fetchNatureById(1);

// EXERCISE 5: Fetch Pokémon Data by IDs and print the abilities of the pokemon.

// INSTRUCTIONS:
// Create a function called `fetchPokemonByIds2`
// print the name of the pokemon and the abilities of the pokemon.
// Hint: abilities is an array.
// TODO: Write your function here

async function fetchPokemonByIds2(pokemonId2) {
  const url = `https://pokeapi.co/api/v2/pokemon/${pokemonId2}`;
  const response = await fetch(url);
  const data = await response.json();
  console.log(`Second Pokemon Name: ${data.name}`);
  for (let i = 0; i < data.abilities.length; i++) {
    console.log(`Ability: ${data.abilities[i].ability.name}`);
  }
}

fetchPokemonByIds2(21);

// Summary:
// These exercises help you practice creating functions to fetch data by ID from various endpoints of the Pokémon API.
// You'll gain experience in handling asynchronous data requests and processing responses to extract and display relevant information.
// After completing these exercises, try experimenting with different API endpoints or adding additional features for further practice!
