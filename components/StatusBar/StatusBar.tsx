import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { IStatusBarProps } from './interface';
import EmptyItem from '../UI/EmptyItem';
import { Item } from '../../redux/interface';
import FilledItem from '../FilledItem/FilledItem';
import { useAppSelector } from '../../hooks/redux';
import { randomize } from '../../utils/randomize';

const background = (props: IStatusBarProps) =>
  css`
    background: url('/assets/img/theme/${props.theme}/status-bar.svg') center /
      contain no-repeat;
  `;

const Wrapper = styled.div`
  ${background};
  width: 100%;
  height: 100%;
  max-height: 231px;
  position: absolute;
  bottom: 22px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StatusBar = () => {
  const theme = useAppSelector((state) => state.game.theme);
  const items = useAppSelector((state) => state.game.items);
  const iconThemeCount = useAppSelector((state) => state.game.iconsThemeCount);

  return (
    <Wrapper theme={theme}>
      {items &&
        items.map((item: Item, index: number) => {
          const iconStyle = randomize(iconThemeCount);

          return (
            <FilledItem
              value={item}
              theme={theme}
              iconStyle={iconStyle}
              key={index}
            />
          );
        })}
    </Wrapper>
  );
};

export default StatusBar;
