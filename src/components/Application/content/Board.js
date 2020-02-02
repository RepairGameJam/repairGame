import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import LEVELS from '../../LEVELS';

const BoardWrapper = styled.div`
  flex-grow: 9;
  margin: 3em 5em;
  background-image: url('circuit-texture.png');
  background-repeat: repeat;
  border-style: solid;
  border-width: 5px;
`;

const Board = () => {
  const level = useSelector(state => state.game.level);
  const { TopRow, BottomRow } = LEVELS[level] || {};

  const TopComponent = TopRow || (() => <div />);
  const BottomComponent = BottomRow || (() => <div />);
  return (
    <BoardWrapper>
      {level ? (
        <>
          <TopComponent />
          <BottomComponent />
        </>
      ) : null}
    </BoardWrapper>
  );
};
export default Board;
