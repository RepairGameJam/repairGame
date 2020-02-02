import Cookies from 'universal-cookie';
import client from '../modules/feathers';

const roomService = client.service('room');

const initialState = {
  id: null,
  userID: null,
  roomCode: null,
  players: {},
  state: 'lobby',
  level: null,
  score: 0,
  requiredPieces: [],
  playingMusic: false,
  lobbyMusic: true,
};

const PLAYER_ID = 'PLAYER_ID';
const SYNCHRONIZE = 'SYNCHRONIZE';
const START = 'START_GAME';
const ADD_PIECE = 'ADD_PIECE';
const MATCH_PIECE = 'MATCH_PIECE';

export const setUserID = userID => ({
  type: PLAYER_ID,
  userID,
});

export const setGameFromServer = game => ({
  type: SYNCHRONIZE,
  game,
});

export const startGameAction = level => ({
  type: START,
  level,
});

export const addPieceAction = piece => ({
  type: ADD_PIECE,
  piece,
});

export const matchPieceAction = (pieceType, score) => ({
  type: MATCH_PIECE,
  pieceType,
  score,
});

export const PieceAction = piece => ({
  type: MATCH_PIECE,
  piece,
});

const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case PLAYER_ID: {
      const cookies = new Cookies();
      cookies.set('userID', action.userID);
      return {
        ...state,
        userID: action.userID,
      };
    }
    case SYNCHRONIZE:
      // level is done. clear the local store score
      if (action.game.state === 'playing') {
        action.game.playingMusic = true;
        action.game.lobbyMusic = false;
      }
      if ((action.game.state === 'levelComplete' || action.game.state === 'complete') && state.state === 'playing') {
        action.game.score = 0;
        action.game.requiredPieces = [];
      }
      if (action.game.state === 'complete' || action.game.state === 'lobby') {
        action.game.playingMusic = false;
        action.game.lobbyMusic = true;
      }
      return {
        ...state,
        ...action.game,
      };
    case START:
      console.log('START');
      return {
        ...state,
        score: 0,
        requiredPieces: [],
        level: action.level,
      };
    case ADD_PIECE:
      return {
        ...state,
        requiredPieces: [...state.requiredPieces, action.piece],
      };

    case MATCH_PIECE: {
      const requiredPieces = state.requiredPieces.filter(piece => piece !== action.pieceType);
      const update = {
        players: {
          [state.userID]: {
            score: action.score,
          },
        },
      };
      if (requiredPieces.length === 0) {
        update.state = 'levelComplete';
      }
      roomService.patch(state.id, update);
      return {
        ...state,
        state: requiredPieces.length === 0 ? 'levelComplete' : state.state,
        requiredPieces,
        score: requiredPieces.length === 0 ? 0 : state.score + action.score,
      };
    }
    default:
      return state;
  }
};

export default gameReducer;
