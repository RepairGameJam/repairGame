import React, { useEffect, useMemo } from 'react';
import { useSelector } from 'react-redux';

const MusicApp = () => {
  const playingMusic = useSelector(state => state.game.playingMusic);
  const lobbyMusic = useSelector(state => state.game.lobbyMusic);
  const playing = useMemo(() => new Audio('/audio/PLAYTHEME.mp3'), []);
  const lobby = useMemo(() => new Audio('/audio/LOBBYTHEME.mp3'), []);

  useEffect(() => {
    if (playingMusic) {
      playing.play();
    } else {
      playing.pause();
    }
  }, [playingMusic, playing]);
  useEffect(() => {
    if (lobbyMusic) {
      lobby.play();
    } else {
      lobby.pause();
    }
  }, [lobbyMusic, lobby]);
  return <div />;
};

export default MusicApp;
