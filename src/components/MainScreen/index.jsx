import React from 'react';
import './index.scss';

const MainScreen = () => {
  console.log('Start Game');

  const createRoom = () => {};

  const joinRoom = () => {};

  return (
    <div className="container">
      <button className="btn" type="button">
        START GAME
      </button>
      <button className="btn" type="button">
        JOIN GAME
      </button>
    </div>
  );
};

export default MainScreen;
