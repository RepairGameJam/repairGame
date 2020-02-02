import React, { useEffect, useMemo, useRef, useCallback } from 'react';
import { useSelector } from 'react-redux';

const MusicApp = () => {
  const audioButtonRef = useRef();
  const { lobbyMusic, playingMusic } = useSelector(state => state.game);
  const playing = useMemo(() => new Audio('/audio/PLAYTHEME.mp3'), []);
  const lobby = useMemo(() => new Audio('/audio/LOBBYTHEME.mp3'), []);
  const lobbyGame = useCallback(() => {
    if (lobbyMusic) {
      lobby.play();
    } else {
      lobby.pause();
    }
  }, [lobby]);
  useEffect(() => {
    if (audioButtonRef.current && audioButtonRef.current.click) audioButtonRef.current.click();
  }, [lobbyMusic, audioButtonRef.current]);
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
  return (
    <div style={{ height: 1, width: 1, display: 'none' }}>
      <button ref={audioButtonRef} onClick={lobbyGame}>
        Yo
      </button>
    </div>
  );
};

export default MusicApp;
