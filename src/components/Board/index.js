import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { startGameAction } from '../../reducers/gameReducer';
import LEVELS from '../LEVELS';
import PIECES from '../PIECES_SHAPES';

const Board = () => {
  const level = useSelector(state => state.game.level);
  const requiredPieces = useSelector(state => state.game.requiredPieces);
  const { TopRow, BottomRow } = level;
  const dispatch = useDispatch();

  const setLevel = () => {
    dispatch(startGameAction(LEVELS.level1));
  };

  const TopComponent = TopRow || (() => <div />);
  const BottomComponent = BottomRow || (() => <div />);
  return (
    <>
      <h1>Board</h1>
      <button className="btn" type="button" onClick={setLevel}>
        Load level
      </button>
      {level
        ? requiredPieces.map(pieceType => {
            const Component = PIECES[pieceType];
            return <Component />;
          })
        : null}
      {level ? (
        <>
          <TopComponent />
          <BottomComponent />
        </>
      ) : null}
    </>
  );
};

export default Board;
