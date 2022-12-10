import Head from 'next/head';
import React from 'react';
import StatusBar from '../components/StatusBar/StatusBar';
import GameWrapper from '../components/UI/GameWrapper';

const Game = () => {
  const [theme, setTheme] = React.useState(1);

  React.useEffect(() => {
    setTheme(Math.ceil(Math.random() * 4));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <GameWrapper theme={theme}>
      <Head>
        <title>Игра - Тренажер &#34;Порядок&#34;</title>
      </Head>

      <StatusBar theme={theme} />
    </GameWrapper>
  );
};

export default Game;
