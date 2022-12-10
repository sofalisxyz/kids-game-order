import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { IGameWrapperProps } from './interface';

const background = (props: IGameWrapperProps) =>
  css`
    background: url('/assets/img/theme/${props.theme}/background.png') center /
      cover no-repeat;
  `;

const GameWrapper = styled.div`
  ${background};
  width: 100vw;
  height: 100vh;
`;

export default GameWrapper;
