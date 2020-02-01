import React from 'react';
import styled from 'styled-components';
import PlayerScores from './PlayerScores';
import Board from './Board';

const ContentWrapper = styled.div`
  display: flex;
  flex-flow: column;
  font-weight: bold;
  text-align: center;
  flex-grow: 20;
  background-image: url('rubber-texture.jpg');
  background-size: contain;
`;

const Content = () => (
  <ContentWrapper>
    <PlayerScores />
    <Board />
  </ContentWrapper>
);

export default Content;
