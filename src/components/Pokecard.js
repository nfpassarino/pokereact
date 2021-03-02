import React, { useContext } from 'react';
import styled from '@emotion/styled';
import FavoriteContext from '../favoritesContext';

const PokecardWrapper = styled.div`
  height: 6rem;
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-items: center;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: .5rem;
  background: linear-gradient(to right, #d3cce3, #e9e4f0);
`;

const PokeImg = styled.img`
  height: 100%;
  margin-right: .6rem;
`;

const Info = styled.div`
  height: 100%;
  margin-right: .6rem;
  display: flex;
  flex-flow: column wrap;
  justify-content: space-evenly;
  flex: 1;
`;

const Header = styled.div`
  margin: 0;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
`;

const Nombre = styled.h3`
  margin: 0;
  text-transform: uppercase;
`;

const Nro = styled.h3`
  margin: 0;
  text-transform: uppercase;
`;

const Bottom = styled.div`
  margin: 0;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
`;

const Stats = styled.div`
  display: flex;
  flex-flow: row wrap;
`;

const Type = styled.div`
  margin-right: .6rem;
  text-transform: capitalize;
`;

const FavButton = styled.button`
  display: flex;
  flex-flow: row wrap;
  cursor: pointer;
  background: none;
  border: none;
  outline: none;
`;

const Pokecard = ({ pokemon }) => {
  const { favoritePokemons, updateFavoritePokemons } = useContext(FavoriteContext);

  const heart = favoritePokemons.includes(pokemon.name) ? "❤️" : "🖤";

  const clickFav = (e) => {
    e.preventDefault();
    updateFavoritePokemons(pokemon.name);
  };

  return (
    <PokecardWrapper
      className={pokemon.types[0].type.name}
    >
      <PokeImg
        alt={pokemon.name}
        src={pokemon.sprites.front_default}
      />
      <Info>
        <Header>
          <Nombre>{pokemon.name}</Nombre>
          <Nro>#{pokemon.id}</Nro>
        </Header>
        <Bottom>
          <Stats>
            {pokemon.types.map((type, i) => {
              return(
                <Type key={`${pokemon.name}_${i}`}>{type.type.name}</Type>
              );
            })}
          </Stats>
          <FavButton onClick={clickFav}>{heart}</FavButton>
        </Bottom>
      </Info>
    </PokecardWrapper>
  );
};

export default Pokecard;