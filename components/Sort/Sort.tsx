import styled from '@emotion/styled';
import React from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { setSort } from '../../redux/reducers/gameSlice';
import Button from '../UI/Button';

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const Sort = () => {
  const dispatch = useAppDispatch();
  const sort = useAppSelector((state) => state.game.sort);

  const handleSort = (type: 'asc' | 'desc') => {
    dispatch(setSort(type));
  };

  return (
    <Wrapper>
      <Button isActive={sort == 'asc'} onClick={() => handleSort('asc')}>
        По возрастанию
      </Button>
      <Button isActive={sort == 'desc'} onClick={() => handleSort('desc')}>
        По убыванию
      </Button>
    </Wrapper>
  );
};

export default Sort;
