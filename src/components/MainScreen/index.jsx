import React, { useEffect, useState } from 'react';
import client from '../../modules/feathers';
import './index.scss';

const MainScreen = () => {
  const [_rooms, setRooms] = useState([]);

  const roomService = client.service('room');

  useEffect(() => {
    roomService.on('created', room => setRooms(_rooms.concat(room)));
  }, []);

  const createRoom = () => {
    roomService.create({ name: `(╯°□°)╯ CREATE` });
    roomService.on('status', (data, error) => {
      if (error) console.log('error', error);
      console.log('data', JSON.parse(data));
    });
    setRooms(_rooms.concat('room'));
  };

  const joinRoom = () => {
    roomService.emit('join', { roomid: 'on the client service' });
  };

  return (
    <div className="container">
      <span>{JSON.stringify(_rooms)}</span>
      <button className="btn" type="button" onClick={createRoom}>
        START GAME
      </button>
      <button className="btn" type="button" onClick={joinRoom}>
        JOIN GAME
      </button>
      <form>
        <input />
        <button className="btn" type="submit">
          JOIN GAME
        </button>
      </form>
    </div>
  );
};

export default MainScreen;
