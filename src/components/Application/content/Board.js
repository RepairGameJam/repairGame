import React from 'react';
import styled from 'styled-components';

const BoardWrapper = styled.div`
  flex-grow: 9;
  margin: 3em 5em 3em 5em;
  background-image: url('circuit-texture.png');
  background-repeat: repeat;
  border-style: solid;
  border-width: 5px;
`;

const Board = () => <BoardWrapper>Board</BoardWrapper>;

export default Board;
