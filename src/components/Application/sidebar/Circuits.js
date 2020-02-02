import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import PIECES from '../../PIECES_SHAPES';
import { selectPieceAction } from '../../../reducers/gameReducer';

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

const PieceContainer = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
`;

const Circuits = () => {
  const requiredPieces = useSelector(state => state.game.requiredPieces);
  const level = useSelector(state => state.game.level);
  const dispatch = useDispatch();
  return (
    <CircuitsWrapper>
      <Header>Circuit Parts</Header>
      <PieceContainer>
        {level
          ? requiredPieces.map(pieceType => {
              const Component = PIECES[pieceType];
              return (
                <Component
                  key={pieceType}
                  onClick={() => {
                    dispatch(selectPieceAction(pieceType));
                  }}
                />
              );
            })
          : null}
      </PieceContainer>
    </CircuitsWrapper>
  );
};

export default Circuits;
