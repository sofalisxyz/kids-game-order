import Head from 'next/head';
import React from 'react';
import StatusBar from '../components/StatusBar/StatusBar';
import GameWrapper from '../components/UI/GameWrapper';
import { useAppDispatch } from '../hooks/redux';
import { gameLoaded } from '../redux/reducers/gameSlice';

const Game = () => {
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(gameLoaded());

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <GameWrapper>
      <Head>
        <title>Игра - Тренажер &#34;Порядок&#34;</title>
      </Head>

      {/* todo: Draggable items component */}

      <StatusBar />
    </GameWrapper>
  );
};

export default Game;
