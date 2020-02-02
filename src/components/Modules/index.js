import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import { addPieceAction, matchPieceAction } from '../../reducers/gameReducer';
import { PIECE_TYPES } from '../PIECES_SHAPES';

const Asset = styled.div`
  width: 200px;
  height: 200px;
  background-color: ${props => props.color};
`;

export const Module = ({ color, pieceName }) => {
  const selectedPiece = useSelector(state => state.game.selectedPiece);
  const pieceType = PIECE_TYPES[pieceName];
  const dispatch = useDispatch();

  const isMatch = () => {
    if (pieceType === selectedPiece) {
      dispatch(matchPieceAction(pieceType, 25));
    } else if (selectedPiece) {
      dispatch(matchPieceAction(null, 0));
    }
  };

  const requiredPieces = useSelector(state => state.game.requiredPieces);

  // Execute some altered asset state
  if (!requiredPieces.includes(pieceName)) {
    color = 'black';
  }

  useEffect(() => {
    dispatch(addPieceAction(pieceType));
  }, []);

  return (
    <Asset color={color} onClick={isMatch}>
      <h3>{pieceName}</h3>
    </Asset>
  );
};
export const moduleMap = {
  triangle: { color: 'aquamarine', key: 'triangle', pieceName: 'triangle' },
  square: { color: 'salmon', key: 'square', pieceName: 'square' },
  circle: { color: 'tomato', key: 'circle', pieceName: 'circle' },
  ruby: { color: 'goldenrod', key: 'ruby', pieceName: 'ruby' },
  python: { color: 'olive', key: 'python', pieceName: 'python' },
};
