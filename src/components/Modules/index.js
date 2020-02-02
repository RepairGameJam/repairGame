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
    drop: () => {
      const test = new Audio('/audio/CORRECT.mp3');
      test.play();
      dispatch(matchPieceAction(pieceType, 25));
    },
  });

  const requiredPieces = useSelector(state => state.game.requiredPieces);

  // Execute some altered asset state
  if (!requiredPieces.includes(pieceName)) {
    imageUrl = imageUrl.replace('sockets', 'pieces').replace('socket', 'chip');
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
  triangle: { imageUrl: 'sockets/master-socket-1.svg', key: 'triangle', pieceName: 'triangle', posX: 180, posY: 20 },
  square: { imageUrl: 'sockets/master-socket-2.svg', key: 'square', pieceName: 'square', posX: 310, posY: 90 },
  circle: { imageUrl: 'sockets/master-socket-3.svg', key: 'circle', pieceName: 'circle', posX: 530, posY: 400 },
  ruby: { imageUrl: 'sockets/master-socket-4.svg', key: 'ruby', pieceName: 'ruby', posX: 520, posY: 230 },
  python: { imageUrl: 'sockets/master-socket-5.svg', key: 'python', pieceName: 'python', posX: 90, posY: 340 },
  nola: { imageUrl: 'sockets/master-socket-7.svg', key: 'nola', pieceName: 'nola', posX: 20, posY: 10 },
  orlando: { imageUrl: 'sockets/master-socket-6.svg', key: 'orlando', pieceName: 'orlando', posX: 9, posY: 250 },
  nyc: { imageUrl: 'sockets/master-socket-8.svg', key: 'nyc', pieceName: 'nyc', posX: 301, posY: 240 },
  sf: { imageUrl: 'sockets/master-socket-9.svg', key: 'sf', pieceName: 'sf', posX: 490, posY: 0 },
  chicago: { imageUrl: 'sockets/master-socket-10.svg', key: 'chicago', pieceName: 'chicago', posX: 300, posY: 390 },
  dallas: { imageUrl: 'sockets/master-socket-11.svg', key: 'dallas', pieceName: 'dallas', posX: 430, posY: 300 },
  tucson: { imageUrl: 'sockets/master-socket-12.svg', key: 'tucson', pieceName: 'tucson', posX: 610, posY: 300 },
  killington: {
    imageUrl: 'sockets/master-socket-13.svg',
    key: 'killington',
    pieceName: 'killington',
    posX: 680,
    posY: 400,
  },
  montreal: { imageUrl: 'sockets/master-socket-14.svg', key: 'montreal', pieceName: 'montreal', posX: 530, posY: 100 },
  vancouver: {
    imageUrl: 'sockets/master-socket-15.svg',
    key: 'vancouver',
    pieceName: 'vancouver',
    posX: 195,
    posY: 290,
  },
  newjersey: {
    imageUrl: 'sockets/master-socket-16.svg',
    key: 'newjersey',
    pieceName: 'newjersey',
    posX: 160,
    posY: 430,
  },
};
