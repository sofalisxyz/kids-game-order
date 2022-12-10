import React from 'react';
import styled from '@emotion/styled';
import Range from '../UI/Range';
import { useAppDispatch } from '../../hooks/redux';
import { setItemQuantity } from '../../redux/reducers/gameSlice';

const Wrapper = styled.div`
  width: 69%;
`;

const ItemQuantityRange = () => {
  const dispatch = useAppDispatch();
  const itemQuantityOptions = [2, 3, 4, 5];

  const handleItemQuantity = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setItemQuantity(parseInt(e.target.value)));
  };

  return (
    <Wrapper>
      <Range
        title='Кол-во предметов'
        options={itemQuantityOptions}
        action={handleItemQuantity}
        bottomSpace='61'
      />
    </Wrapper>
  );
};

export default ItemQuantityRange;
