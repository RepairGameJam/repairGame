import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import PIECES from '../../PIECES_SHAPES';

const CircuitsWrapper = styled.div`
  flex-grow: 3;
  background-color: rgba(196, 196, 196, 1);
  margin: 2em;
  border-radius: 20px;
`;

const Header = styled.h3`
  text-align: center;
  margin-top: 2em;
`;

const Circuits = () => {
  const requiredPieces = useSelector(state => state.game.requiredPieces);
  const level = useSelector(state => state.game.level);
  return (
    <CircuitsWrapper>
      <Header>Circuit Parts</Header>
      {level
        ? requiredPieces.map(pieceType => {
            const Component = PIECES[pieceType];
            return <Component />;
          })
        : null}
    </CircuitsWrapper>
  );
};

export default Circuits;
