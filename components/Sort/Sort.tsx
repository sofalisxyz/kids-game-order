import styled from '@emotion/styled';
import React from 'react';
import Button from '../UI/Button';

const Wrapper = styled.div``;

const Sort = () => {
  const [sort, setSort] = React.useState('asc');

  const handleSort = (sortType: 'asc' | 'desc') => {
    setSort(sortType);
    // todo: redux action
  };

  return (
    <Wrapper>
      <Button size='small' onClick={() => handleSort('asc')}>
        По возрастанию
      </Button>
      <Button size='small' onClick={() => handleSort('desc')}>
        По убыванию
      </Button>
    </Wrapper>
  );
};

export default Sort;
