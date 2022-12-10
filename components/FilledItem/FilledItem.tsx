import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { IFilledItemProps, IFilledItemWrapperProps } from './interface';
import { useAppSelector } from '../../hooks/redux';

const background = (props: IFilledItemWrapperProps) =>
  css`
    background: url('/assets/img/theme/${props.theme}/item-icon-${props.iconStyle}.svg')
      center / contain no-repeat;
    width: 100%;
    height: 100%;
    max-width: 131px;
    max-height: 131px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-size: 56px;
    -webkit-text-stroke-width: 3px;
    -webkit-text-stroke-color: #242546;
  `;

const Wrapper = styled.div`
  ${background}
`;

const FilledItem: React.FC<IFilledItemProps> = ({ value, iconStyle }) => {
  const theme = useAppSelector((state) => state.game.theme);

  return (
    <Wrapper theme={theme} iconStyle={iconStyle}>
      {value}
    </Wrapper>
  );
};

export default FilledItem;
