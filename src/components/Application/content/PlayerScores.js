import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

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

const PlayerScores = () => {
  const players = useSelector(state => state.game.players);
  const topScores = Object.keys(players).map(key => ({ name: key, score: players[key].score }));
  topScores.sort((a, b) => b.score - a.score);
  const finalTopScores = topScores.slice(0, 3);
  return (
    <Scoreboard>
      {finalTopScores.map(user => (
        <Player key={user.name}>
          <PlayerTag>
            {user.name}:{user.score}
          </PlayerTag>
        </Player>
      ))}
    </Scoreboard>
  );
};

export default PlayerScores;
