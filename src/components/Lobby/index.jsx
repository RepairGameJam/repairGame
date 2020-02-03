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
      <img
        src="https://thumbs.dreamstime.com/b/isometric-d-old-lady-watching-tv-sit-armchair-cartoon-character-flat-design-vector-illustration-101715798.jpg"
        alt="grandma"
        style={{ width: '30%', marginTop: '4em' }}
      />
    </div>
  );
};

export default Lobby;
