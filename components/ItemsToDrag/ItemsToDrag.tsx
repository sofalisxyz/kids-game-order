import React from 'react';
import styled from '@emotion/styled';
import { useAppSelector } from '../../hooks/redux';
import { IItem } from '../../redux/interface';
import Item from '../UI/Item';
import { Draggable } from 'react-beautiful-dnd';
import { shuffleArr } from '../../utils/randomize';

const Wrapper = styled.div`
  padding-top: 133px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ItemWrapper = styled.div`
  width: 100%;
  max-width: 157px;
  height: 158px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:nth-of-type(odd) {
    position: relative;
    top: 100px;
    // todo: add condition to add css above if there are more than 2 active items
  }
`;

const ItemsToDrag = () => {
  const theme = useAppSelector((state) => state.game.theme);
  const items = useAppSelector((state) => state.game.items);
  const shuffledItems = shuffleArr([...items]);

  return (
    <Wrapper>
      {shuffledItems.map((item: IItem) => {
        return (
          <>
            {!item.isRevealed ? (
              <Draggable
                key={`itemToDrag_${item.id}`}
                draggableId={`${item.id}`}
                index={item.id}
              >
                {(provided) => (
                  <ItemWrapper
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                  >
                    <Item
                      value={item.value}
                      theme={theme}
                      iconStyle={item.iconStyle}
                    />
                  </ItemWrapper>
                )}
              </Draggable>
            ) : null}
          </>
        );
      })}
    </Wrapper>
  );
};

export default ItemsToDrag;
