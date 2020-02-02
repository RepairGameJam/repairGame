import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { useDrop } from 'react-dnd';

import { addPieceAction, matchPieceAction } from '../../reducers/gameReducer';
import { PIECE_TYPES } from '../PIECES_SHAPES';

const Asset = styled.div`
  width: 100px;
  height: 100px;
  background-color: ${props => props.color};
  position: absolute;
  top: ${props => props.posY}px;
  left: ${props => props.posX}px;
  &:active {
    opacity: 0.9;
  }
  user-select: none;
`;

export const Module = ({ color, pieceName, posX, posY }) => {
  const pieceType = PIECE_TYPES[pieceName];
  const dispatch = useDispatch();

  const [collectedProps, drop] = useDrop({
    accept: [pieceType],
    drop: () => dispatch(matchPieceAction(pieceType, 25)),
  });

  const requiredPieces = useSelector(state => state.game.requiredPieces);

  // Execute some altered asset state
  if (!requiredPieces.includes(pieceName)) {
    color = 'black';
  }

  useEffect(() => {
    dispatch(addPieceAction(pieceType));
  }, []);

  return (
    <Asset ref={drop} color={color} posX={posX} posY={posY}>
      <h3>{pieceName}</h3>
    </Asset>
  );
};
export const moduleMap = {
  triangle: { color: 'aquamarine', key: 'triangle', pieceName: 'triangle', posX: 20, posY: 200 },
  square: { color: 'salmon', key: 'square', pieceName: 'square', posX: 200, posY: 0 },
  circle: { color: 'tomato', key: 'circle', pieceName: 'circle', posX: 330, posY: 400 },
  ruby: { color: 'goldenrod', key: 'ruby', pieceName: 'ruby', posX: 500, posY: 200 },
  python: { color: 'olive', key: 'python', pieceName: 'python', posX: 90, posY: 300 },
};
