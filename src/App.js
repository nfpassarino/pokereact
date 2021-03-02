import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import Header from './components/Header';
import Searchbar from './components/Searchbar';
import Pokedex from './components/Pokedex';
import { getPokemonData, getPokemons, searchPokemon } from './pokeapi';
import { FavoriteProvider } from './favoritesContext';

const Wrapper = styled.div`
`;

const Error = styled.h2`
  text-align: center;
  color: #ffffff;
`;

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [page, setPage] = useState(0);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [favorites, setFavorites] = useState([]);
  const [error, setError] = useState('');
  const [searching, setSearching] = useState(false);

  const loadFavoritePokemons = () => {
    const pokemonsSaved = JSON.parse(window.localStorage.getItem('favorite_pokemon')) || [];
    setFavorites(pokemonsSaved);
  }

  const fetchPokemons = async () => {
    try {
      setError('');
      setLoading(true);
      const data = await getPokemons(24, 24 * page);
      const promises = data.results.map(async (pokemon) => {
        return await getPokemonData(pokemon.url);
      });
      const results = await Promise.all(promises);
      setLoading(false);
      setPokemons(results);
      setTotal(Math.ceil(data.count / 24));
    } catch (err) {}
  }

  useEffect(() => {
    if(!searching) return loadFavoritePokemons();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    fetchPokemons();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  const updateFavorites = (name) => {
    const updated = [...favorites];
    const isFavorite = updated.indexOf(name);
    (isFavorite >= 0) ? updated.splice(isFavorite, 1) : updated.push(name);
    setFavorites(updated);
    window.localStorage.setItem('favorite_pokemon', JSON.stringify(updated));
  }

  const onSearch = async (pokemon) => {
    if (!pokemon) return fetchPokemons();
    setSearching(true);
    setError('');
    setLoading(true);
    const result = await searchPokemon(pokemon);
    if (!result) {
      setError('No se encuentra el Pokemon buscado...');
      setLoading(false);
      return;
    } else {
      setPokemons([result]);
      setPage(0);
      setTotal(1);
    }
    setLoading(false);
    setSearching(false);
  }

  return (
    <FavoriteProvider
      value={{
        favoritePokemons: favorites,
        updateFavoritePokemons: updateFavorites,
      }}
    >
      <Wrapper>
        <Header />
        <Searchbar onSearch={onSearch} />
        {error ? <Error>{error}</Error> : (
          <Pokedex
            loading={loading}
            pokemons={pokemons}
            page={page}
            setPage={setPage}
            total={total}
          />
        )}
      </Wrapper>
    </FavoriteProvider>
  );
}

export default App;