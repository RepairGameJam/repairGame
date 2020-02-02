import React, { useEffect, useState } from 'react';
import client from '../../modules/feathers';
import './index.scss';

const genUserId = (prefix = '') => {
  let result = '';
  const uniqueLength = 30;
  const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnpqrstuvwxyz123456789';
  for (let i = 0; i < uniqueLength; i += 1) {
    result += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return `${prefix}${result}`;
};

const MainScreen = () => {
  const [room, setRoom] = useState('');
  const [userID, setUserID] = useState('');

  useEffect(() => {
    if (!userID) {
      setUserID(genUserId());
    }
  }, [userID]);

  const roomService = client.service('room');

  const createRoomAndJoin = () => {
    roomService.create({ userID }).then(res => {
      setRoom(res);
      console.log('response from CREATE', res);
    });

    roomService.on('status', (data, error) => {
      if (error) console.log('error', error);
      setRoom(data);
      console.log('data', data);
    });
  };

  const upadateScore = () => {
    roomService.patch(room.id, { players: { [userID]: { score: 100 } } });
  };

  return (
    <div className="container">
      <div>
        {room &&
          Object.keys(room.players).map(playerId => (
            <div key={playerId}>
              {playerId} - {room.players[playerId].score}
            </div>
          ))}
      </div>
      <button className="btn" type="button" onClick={createRoomAndJoin}>
        START GAME
      </button>
      <button className="btn" type="button" onClick={upadateScore}>
        set my score
      </button>
    </div>
  );
};

export default MainScreen;
