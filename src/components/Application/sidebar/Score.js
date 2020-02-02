import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

const ScoreWrapper = styled.div`
  flex-grow: 1;
`;

const Score = () => {
  // const userID = useSelector(state => state.game.userID);
  const score = useSelector(state => state.game.score);

  return (
    <ScoreWrapper>
      <h4>Score</h4>
      {score}
    </ScoreWrapper>
  );
};

export default Score;
