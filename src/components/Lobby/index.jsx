import React, { useCallback } from 'react';
import { useSelector } from 'react-redux';

import client from '../../modules/feathers';

const roomService = client.service('room');

const Lobby = () => {
  const room = useSelector(state => state.game);
  const userID = useSelector(state => state.game.userID);

  const updateStateToPlaying = useCallback(() => {
    roomService.patch(room.id, { state: 'playing' });
  }, [room]);

  return (
    <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
      <h1>Lobby</h1>
      <ul>
        {room &&
          Object.keys(room.players).map(playerId => (
            <li key={playerId}>
              {playerId} {playerId === userID && <b>**YOU**</b>} - {room.players[playerId].score}
            </li>
          ))}
      </ul>
      <button className="btn" type="button" onClick={updateStateToPlaying}>
        Start
      </button>
    </div>
  );
};

export default Lobby;
