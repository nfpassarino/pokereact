import React, { useContext } from 'react';
import styled from '@emotion/styled';
import FavoriteContext from '../favoritesContext';

const HeaderWrapper = styled.nav`
  height: 7rem;
  margin: 0 8rem;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
`;

const ImgHeader = styled.img`
  height: 5rem;
`;

const FavCount = styled.h2`
  font-weight: bold;
  color: #ffffff;
`;

const Header = () => {
  const { favoritePokemons } = useContext(FavoriteContext);
  const URL_IMG = "logo.png";

  return (
    <HeaderWrapper>
      <ImgHeader
        alt="logo"
        src={URL_IMG}
      />
      <FavCount>❤️ {favoritePokemons.length}</FavCount>
    </HeaderWrapper>
  );
};

export default Header;