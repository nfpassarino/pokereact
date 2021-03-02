import React from 'react';
import styled from '@emotion/styled';
import Pokecard from './Pokecard';
import Pagination from './Pagination';
import Loading from './Loading';

const PokedexWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
`;

const Header = styled.div`
  width: 100%;
  margin: 2rem 8rem;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
`;

const PokeList = styled.div`
  margin: 0 2rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
`;

const Pokedex = ({ error, loading, pokemons, page, setPage, total }) => {
  const lastPage = () => {
    setPage(Math.max(page - 1, 0));
  }

  const nextPage = () => {
    setPage(Math.min(page + 1, total));
  }

  return (
    <PokedexWrapper>
      <Header>
        <Pagination
          page={page + 1}
          total={total}
          onLeftClick={lastPage}
          onRightClick={nextPage}
        />
      </Header>
      {loading ? <Loading /> :
        <PokeList>
        {pokemons.map((pokemon, i) =>{
          return (
            <Pokecard
              pokemon={pokemon}
            />
          );
        })}
        </PokeList>
      }
    </PokedexWrapper>
  );
};

export default Pokedex;