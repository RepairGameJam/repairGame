import React, { useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setGameFromServer, setUserID, addScoreAction } from '../../reducers/gameReducer';

import client from '../../modules/feathers';
import './index.scss';
// import Application from '../Application';

const genUserId = (prefix = '') => {
  let result = '';
  const uniqueLength = 30;
  const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnpqrstuvwxyz123456789';
  for (let i = 0; i < uniqueLength; i += 1) {
    result += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return `${prefix}${result}`;
};

const roomService = client.service('room');

const MainScreen = () => {
  const dispatch = useDispatch();
  const setRoom = room => dispatch(setGameFromServer(room));
  const setUser = userID => dispatch(setUserID(userID));
  const room = useSelector(state => state.game);
  const userID = useSelector(state => state.game.userID);

  useEffect(() => {
    if (!userID) {
      const newUserId = genUserId();
      console.log('RUNNING FIRST TIME', newUserId);
      setUser(newUserId);
      roomService.create({ userID: newUserId }).then(res => {
        setRoom(res);
        console.log('response from CREATE', res);
      });

      roomService.on('status', (data, error) => {
        if (error) console.log('error', error);
        setRoom(data);
        console.log('data', data);
      });
    } else {
      console.log('RUNNING ADDITIONAL TIMES ');
    }
  }, [userID, room.state]);

  const addScore = () => {
    dispatch(addScoreAction(10));
  };

  const updateStateToPlaying = useCallback(() => {
    roomService.patch(room.id, { state: 'playing' });
  }, [room]);

  const updateStateToLevelComplete = useCallback(() => {
    roomService.patch(room.id, { state: 'levelComplete' });
  }, [room]);

  return (
    <div className="container">
      <div>
        {room &&
          Object.keys(room.players).map(playerId => (
            <div key={playerId}>
              {playerId} {playerId === userID && <b>**YOU**</b>} - {room.players[playerId].score}
            </div>
          ))}
      </div>
      <div>
        <b>state</b> {room && room.state}
      </div>
      <div>
        <b>local score</b> {room && room.score}
      </div>
      <button className="btn" type="button" onClick={addScore}>
        PLUS 10 POINTS FOR the win{' '}
      </button>
      <button className="btn" type="button" onClick={updateStateToPlaying}>
        set state: playing
      </button>
      <button className="btn" type="button" onClick={updateStateToLevelComplete}>
        set state: levelcomplete
      </button>
    </div>
  );
};

export default MainScreen;
