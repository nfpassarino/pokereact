import React from 'react';
import styled from '@emotion/styled';

const PaginationWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
`;

const PageButton = styled.button`
  background-color: #363636;
  margin: 0 .5rem;
  border: none;
  border-radius: 100%;
  width: 2.5rem;
  height: 2.5rem;
  color: #ffffff;
  outline: none;
  cursor: pointer;
`;

const PageInfo = styled.div`
  font-weight: bold;
  color: #ffffff;
`;

const Pagination = ({ onLeftClick, onRightClick, page, total }) => {
  const afterClick = (e) => {
    e.preventDefault();
    onLeftClick();
  }
  const nextClick = (e) => {
    e.preventDefault();
    onRightClick();
  }
  return (
    <PaginationWrapper>
        <PageButton className="material-icons" onClick={afterClick}>arrow_back</PageButton>
        <PageInfo>{page} de {total}</PageInfo>
        <PageButton className="material-icons" onClick={nextClick}>arrow_forward</PageButton>
    </PaginationWrapper>
  );
};

export default Pagination;