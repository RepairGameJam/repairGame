import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import LEVELS from '../../LEVELS';
import { Module } from '../../Modules';

const BoardWrapper = styled.div`
  flex-grow: 9;
  margin: 3em 5em;
  background-image: url('circuit-texture.png');
  background-repeat: repeat;
  border-style: solid;
  border-width: 5px;
  position: relative;
`;

const Board = () => {
  const level = useSelector(state => state.game.level);
  const { TopRow, BottomRow } = LEVELS[level] || {};
  return (
    <BoardWrapper>
      {TopRow && TopRow.map(item => <Module {...item} />)}
      {BottomRow && BottomRow.map(item => <Module {...item} />)}
    </BoardWrapper>
  );
};
export default Board;
