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

const Module = ({ pieceName, color, text }) => {
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

  useEffect(() => {
    dispatch(addPieceAction(pieceType));
  }, []);

  return (
    <Asset color={color} onClick={isMatch}>
      <h3>{text}</h3>
    </Asset>
  );
};

export const Module1 = () => <Module pieceName="triangle" color="aquamarine" text="Module 1" />;
export const Module2 = () => <Module pieceName="square" color="salmon" text="Module 2" />;
export const Module3 = () => <Module pieceName="circle" color="tomato" text="Module 3" />;
export const Module4 = () => <Module pieceName="ruby" color="goldenrod" text="Module 4" />;
export const Module5 = () => <Module pieceName="python" color="olive" text="Module 5" />;
