const URL_BASE = 'https://pokeapi.co/api/v2';

export const searchPokemon = async (pokemon) => {
  try {
    let url = `${URL_BASE}/pokemon/${pokemon}`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (err) {}
}

export const getPokemons = async (limit = 24, offset = 0) => {
  const response = await fetch(`${URL_BASE}/pokemon?limit=${limit}&offset=${offset}`);
  if (!response.ok) {
    throw new Error('API Error');
  }
  return response.json();
}

export const getPokemonData = async (url) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('API Error');
  }
  return response.json();
}
export default searchPokemon;