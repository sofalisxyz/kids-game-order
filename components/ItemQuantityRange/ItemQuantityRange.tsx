import React from 'react';
import styled from '@emotion/styled';
import Range from '../UI/Range';

const Wrapper = styled.div`
  width: 69%;
`;

const ItemQuantityRange = () => {
  const itemQuantityOptions = [2, 3, 4, 5];

  return (
    <Wrapper>
      <Range
        title='Кол-во предметов'
        options={itemQuantityOptions}
        bottomSpace='61'
      />
    </Wrapper>
  );
};

export default ItemQuantityRange;
