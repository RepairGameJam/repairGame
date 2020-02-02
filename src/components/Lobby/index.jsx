import React, { useCallback } from 'react';
import { useSelector } from 'react-redux';

import client from '../../modules/feathers';

const roomService = client.service('room');

const Lobby = ({ leaderboard }) => {
  const room = useSelector(state => state.game);
  const userID = useSelector(state => state.game.userID);

  const updateStateToPlaying = useCallback(() => {
    roomService.patch(room.id, { state: 'playing' });
  }, [room]);

  console.log('room', room);

  return (
    <div>
      <h1>{leaderboard ? 'Leaderboard' : 'Lobby'}</h1>
      <ul>
        {room &&
          Object.keys(room.players).map(playerId => (
            <li key={playerId}>
              {playerId} {playerId === userID && <b>**YOU**</b>} - {room.players[playerId].score}
            </li>
          ))}
      </ul>
      {!leaderboard ? (
        <button className="btn" type="button" onClick={updateStateToPlaying}>
          Start
        </button>
      ) : (
        'Next round starts soon'
      )}
    </div>
  );
};

export default Lobby;
