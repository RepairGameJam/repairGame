import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Scoreboard = styled.div`
  display: flex;
  flex-direction: row;
  flex-grow: 1;
`;
const Player = styled.div`
  flex-grow: 1;
  margin: 2em;
  min-height: 2em;
  background-color: rgba(196, 196, 196, 1);
  -webkit-border-radius: 25px;
  -moz-border-radius: 25px;
  border-radius: 25px;
`;
const PlayerTag = styled.p`
  text-align: center;
`;

const PlayerScores = ({ scores = [{ name: 'J', score: 100 }] }) => (
  <Scoreboard>
    {scores.map(user => (
      <Player key={user.name}>
        <PlayerTag>
          {user.name}:{user.score}
        </PlayerTag>
      </Player>
    ))}
  </Scoreboard>
);

PlayerScores.propTypes = {
  scores: PropTypes.array.isRequired,
};

export default PlayerScores;
