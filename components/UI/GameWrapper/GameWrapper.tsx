import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { IGameWrapperProps } from './interface';
import { useAppSelector } from '../../../hooks/redux';
import { PropsWithChildren } from 'react';

const background = (props: IGameWrapperProps) =>
  css`
    background: url('/assets/img/theme/${props.theme}/background.png') center /
      cover no-repeat;
  `;

const Wrapper = styled.div`
  ${background};
  width: 100vw;
  height: 100vh;
`;

const GameWrapper: React.FC<PropsWithChildren> = ({ children }) => {
  const theme = useAppSelector((state) => state.game.theme);

  return <Wrapper theme={theme}>{children}</Wrapper>;
};

export default GameWrapper;
