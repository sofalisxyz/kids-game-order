import styled from '@emotion/styled';
import React from 'react';
import Button from '../UI/Button';

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const Sort = () => {
  const [sort, setSort] = React.useState('asc');

  const handleSort = (sortType: 'asc' | 'desc') => {
    setSort(sortType);
    // todo: redux action
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
