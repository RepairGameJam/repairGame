import React, { useEffect, useState } from 'react';
import client from '../../modules/feathers';
import './index.scss';

const MainScreen = () => {
  const [_rooms, setRooms] = useState([]);
  const [_room, setRoom] = useState('');

  const roomService = client.service('room');

  // useEffect(() => {
  //   roomService.on('created', room => setRooms(_rooms.concat(room)));
  // }, []);

  const createRoom = () => {
    roomService.create({ name: `CREATE (╯°□°)╯ ` }).then(res => {
      setRooms(res);
      console.log('response from CREATE', res);
    });

    roomService.on('status', (data, error) => {
      if (error) console.log('error', error);
      console.log('data', JSON.parse(data));
    });
  };

  // const { roomCode } = _room;

  const joinRoom = code => {
    console.log('⚡: MainScreen -> code', code);
    console.log('room', _room);
    // roomService.emit('join', { roomid: 'on the client service' });
    roomService.create({ roomCode: code }).then(res => {
      setRooms(res);
    });
  };

  return (
    <div className="container">
      <span>{JSON.stringify(_rooms)}</span>
      <button className="btn" type="button" onClick={createRoom}>
        START GAME
      </button>
      <div className="formContainer">
        <form>
          <label>Room Code</label>
          <input type="text" onChange={v => setRoom(v.target.value)} />
          <button type="button" className="btn formbtn" onClick={() => joinRoom(_room)}>
            JOIN
          </button>
        </form>
      </div>
    </div>
  );
};

export default MainScreen;
