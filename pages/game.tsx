import Head from 'next/head';
import React from 'react';
import ItemsToDrag from '../components/ItemsToDrag';
import StatusBar from '../components/StatusBar';
import GameWrapper from '../components/UI/GameWrapper';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { gameLoaded, revealItem, winGame } from '../redux/reducers/gameSlice';
import {
  DragDropContext,
  Droppable,
  OnDragEndResponder,
} from 'react-beautiful-dnd';

const Game = () => {
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(gameLoaded());

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  let i = useAppSelector((state) => state.game.items.length);

  const onDragEnd: OnDragEndResponder = (e) => {
    if (e.draggableId == e.destination?.droppableId) {
      dispatch(revealItem(e.source.index));
      i--;
    }

    if (i == 0) {
      dispatch(winGame());
    }
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <GameWrapper>
        <Head>
          <title>Игра - Тренажер &#34;Порядок&#34;</title>
        </Head>
        <Droppable droppableId='itemsToDrag'>
          {(provided) => (
            <div
              className=''
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              <ItemsToDrag />

              {provided.placeholder}
            </div>
          )}
        </Droppable>

        <StatusBar />
      </GameWrapper>
    </DragDropContext>
  );
};

export default Game;
