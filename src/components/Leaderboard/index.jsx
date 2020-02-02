import React from 'react';
import { useSelector } from 'react-redux';

const Lobby = () => {
  const room = useSelector(state => state.game);
  const userID = useSelector(state => state.game.userID);

  return (
    <div>
      <h1>Leaderboard </h1>
      <ul>
        {room &&
          Object.keys(room.players).map(playerId => (
            <li key={playerId}>
              {playerId} {playerId === userID && <b>**YOU**</b>} - {room.players[playerId].score}
            </li>
          ))}
      </ul>
      Next round starts soon
    </div>
  );
};

export default Lobby;
