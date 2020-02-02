import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { useDrag } from 'react-dnd';

import PIECES from '../../PIECES_SHAPES';

const CircuitsWrapper = styled.div`
  flex-grow: 3;
  background-color: rgba(196, 196, 196, 1);
  margin: 2em;
  border-radius: 20px;
  user-select: none;
`;

const Header = styled.h3`
  text-align: center;
  margin-top: 2em;
`;

const PieceContainer = styled.div`
  width: 100px;
  height: 100px;
  background-color: ${props => props.color};
  user-select: none;
`;

const Piece = ({ pieceType, color, content }) => {
  const [{ opacity }, dragRef] = useDrag({
    item: { type: pieceType },
    collect: monitor => {
      if (monitor.isDragging()) {
        const test = new Audio('/audio/PICKUP.mp3');
        test.play();
      }
      return {
        opacity: monitor.isDragging() ? 0.5 : 1,
      };
    },
  });

  return (
    <PieceContainer style={{ opacity }} color={color} ref={dragRef}>
      {content}
    </PieceContainer>
  );
};

const Circuits = () => {
  const requiredPieces = useSelector(state => state.game.requiredPieces);
  const level = useSelector(state => state.game.level);

  return (
    <CircuitsWrapper>
      <Header>Circuit Parts</Header>
      {level
        ? requiredPieces.map(pieceType => {
            const piece = PIECES[pieceType];
            return <Piece {...piece} key={pieceType} />;
          })
        : null}
    </CircuitsWrapper>
  );
};

export default Circuits;
