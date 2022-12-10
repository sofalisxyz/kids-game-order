import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { IStatusBarProps } from './interface';
import { useAppSelector } from '../../hooks/redux';
import Sort from '../UI/Sort';
import Item from '../UI/Item';
import { Droppable } from 'react-beautiful-dnd';
import { IItem } from '../../redux/interface';
import EmptyItem from '../UI/EmptyItem';

const background = (props: IStatusBarProps) =>
  css`
    background: url('/assets/img/theme/${props.theme}/status-bar.svg') center /
      contain no-repeat;
  `;

const Wrapper = styled.div`
  width: 100%;
  max-width: 890px;
  height: 100%;
  max-height: 300px;
  position: absolute;
  bottom: 22px;
  left: 50%;
  transform: translateX(-50%);
`;

const StatusBarWrapper = styled.div`
  ${background};
  width: 100%;
  height: 100%;
  max-height: 231px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StatusBar = () => {
  const theme = useAppSelector((state) => state.game.theme);
  const items = useAppSelector((state) => state.game.items);
  const sort = useAppSelector((state) => state.game.sort);

  return (
    <Wrapper>
      <Sort sort={sort} />

      <StatusBarWrapper theme={theme}>
        {items.map((item: IItem, index: number) => {
          return (
            <Droppable key={item.id} droppableId={`${item.id}`}>
              {(provided) => (
                <div
                  className='test'
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                >
                  {index == 0 || item.isRevealed ? (
                    <Item
                      value={item.value}
                      index={item.id}
                      theme={theme}
                      iconStyle={item.iconStyle}
                    />
                  ) : (
                    <EmptyItem />
                  )}
                </div>
              )}
            </Droppable>
          );
        })}
      </StatusBarWrapper>
    </Wrapper>
  );
};

export default StatusBar;
