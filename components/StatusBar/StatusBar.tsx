import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { IStatusBarProps } from './interface';
import EmptyItem from '../UI/EmptyItem';
import { Item, Items } from '../../redux/interface';
import FilledItem from '../FilledItem/FilledItem';

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

const StatusBar: React.FC<IStatusBarProps> = ({ theme }) => {
  const items = [23, 45, 65, 32, 56];

  return (
    <Wrapper theme={theme}>
      {items &&
        items.map((item: Item, index: number) => {
          return (
            <FilledItem value={item} theme={theme} iconStyle={1} key={index} />
          );
        })}
    </Wrapper>
  );
};

export default StatusBar;
