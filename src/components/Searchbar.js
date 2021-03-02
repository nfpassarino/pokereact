import React, { useState } from 'react';
import styled from '@emotion/styled';

const SearchWrapper = styled.div`
  width: 100%;
  display: flex;
  margin: 1rem 0;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
`;

const SearchInput = styled.input`
  width: 40%;
  padding: .5rem;
  background: #ffffff;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
  border: none;
  border-radius: 3px;
  &:focus {
    outline: none;
  }
`;

const SearchButton = styled.button`
  background-color: #363636;
  margin-left: 1rem;
  border: none;
  border-radius: 100%;
  width: 2.5rem;
  height: 2.5rem;
  color: white;
  outline: none;
  cursor: pointer;
`;

const Searchbar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const onChangeInput = (e) => {
    setSearchTerm(e.target.value);
    if (!e.target.value.length) return onSearch(null);
  }

  const clickSearch = async (e) =>{
    onSearch(searchTerm);
  }
  return (
    <SearchWrapper>
      <SearchInput
        placeholder="Buscá tu pokemon..."
        onChange={onChangeInput}
        value={searchTerm}
      />
      <SearchButton className="material-icons" onClick={clickSearch}>
        search
      </SearchButton>
    </SearchWrapper>
  );
};

export default Searchbar;