import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { useDrop } from 'react-dnd';

import { addPieceAction, matchPieceAction } from '../../reducers/gameReducer';
import { PIECE_TYPES } from '../PIECES_SHAPES';

const AssetContainer = styled.div`
  display: flex;
  width: 100px;
  height: 100px;
  background-color: rgba(0, 0, 0, 0.4);
  position: absolute;
  top: ${props => props.posY}px;
  left: ${props => props.posX}px;
  border-radius: 50%;
`;

const Asset = styled.div`
  width: 100px;
  height: 100px;
  background-image: url(${props => props.imageUrl});
  background-repeat: no-repeat;
  background-position: center;
  &:active {
    opacity: 0.9;
  }
  user-select: none;
`;

export const Module = ({ imageUrl, pieceName, posX, posY }) => {
  const pieceType = PIECE_TYPES[pieceName];
  const dispatch = useDispatch();

  const [collectedProps, drop] = useDrop({
    accept: [pieceType],
    drop: () => dispatch(matchPieceAction(pieceType, 25)),
  });

  const requiredPieces = useSelector(state => state.game.requiredPieces);

  // Execute some altered asset state
  if (!requiredPieces.includes(pieceName)) {
    // color = 'black';
  }

  useEffect(() => {
    dispatch(addPieceAction(pieceType));
  }, []);

  return (
    <AssetContainer posX={posX} posY={posY}>
      <Asset ref={drop} imageUrl={imageUrl} />
    </AssetContainer>
  );
};
export const moduleMap = {
  triangle: { imageUrl: 'sockets/master-socket-1.svg', key: 'triangle', pieceName: 'triangle', posX: 20, posY: 200 },
  square: { imageUrl: 'sockets/master-socket-2.svg', key: 'square', pieceName: 'square', posX: 200, posY: 0 },
  circle: { imageUrl: 'sockets/master-socket-3.svg', key: 'circle', pieceName: 'circle', posX: 330, posY: 400 },
  ruby: { imageUrl: 'sockets/master-socket-4.svg', key: 'ruby', pieceName: 'ruby', posX: 500, posY: 200 },
  python: { imageUrl: 'sockets/master-socket-5.svg', key: 'python', pieceName: 'python', posX: 90, posY: 300 },
};
