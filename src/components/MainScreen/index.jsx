import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setGameFromServer, setUserID } from '../../reducers/gameReducer';

import client from '../../modules/feathers';
import './index.scss';
import Application from '../Application';
import Lobby from '../Lobby';
import Leaderboard from '../Leaderboard';

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
  const setRoom = newRoom => dispatch(setGameFromServer(newRoom));
  const setUser = newUserID => dispatch(setUserID(newUserID));
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

  // const updateStateToPlaying = useCallback(() => {
  //   roomService.patch(room.id, { state: 'playing' });
  // }, [room]);

  // const updateStateToLevelComplete = useCallback(() => {
  //   roomService.patch(room.id, { state: 'levelComplete' });
  // }, [room]);

  switch (room.state) {
    case 'playing':
      return <Application />;
    case 'levelComplete':
    case 'leaderboard':
      return <Leaderboard />;
    case 'complete':
    case 'lobby':
    default:
      return <Lobby />;
  }
};

export default MainScreen;
