import React from 'react';
import styled from '@emotion/styled';
import { useAppSelector } from '../../hooks/redux';
import { IItem } from '../../redux/interface';
import Item from '../UI/Item';
import { Draggable } from 'react-beautiful-dnd';
import { shuffleArr } from '../../utils/randomize';

const Wrapper = styled.div``;

const ItemsToDrag = () => {
  const theme = useAppSelector((state) => state.game.theme);
  const items = useAppSelector((state) => state.game.items);
  const shuffledItems = shuffleArr([...items]);

  return (
    <Wrapper>
      {shuffledItems.map((item: IItem) => {
        return (
          <Draggable key={item.id} draggableId={`${item.id}`} index={item.id}>
            {(provided) => (
              <div
                className=''
                {...provided.draggableProps}
                {...provided.dragHandleProps}
                ref={provided.innerRef}
              >
                {!item.isRevealed ? (
                  <Item
                    value={item.value}
                    index={item.id}
                    theme={theme}
                    iconStyle={item.iconStyle}
                  />
                ) : null}
              </div>
            )}
          </Draggable>
        );
      })}
    </Wrapper>
  );
};

export default ItemsToDrag;
