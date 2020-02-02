const initialState = {
  id: null,
  roomCode: null,
  players: {},
  state: 'lobby',
  level: null,

  score: 0,
  requiredPieces: [],
};

const PLAYER_ID = 'PLAYER_ID';
const SYNCHRONIZE = 'SYNCHRONIZE';
const START = 'START_GAME';
const ADD_PIECE = 'ADD_PIECE';
const ADD_SCORE = 'ADD_SCORE';

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

export const addScoreAction = score => ({
  type: ADD_SCORE,
  score,
});

const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case PLAYER_ID:
      return {
        ...state,
        userID: action.userID,
      };
    case SYNCHRONIZE:
      return {
        ...state,
        ...action.game,
      };
    case START:
      return {
        score: 0,
        requiredPieces: [],
        level: action.level,
      };
    case ADD_SCORE:
      return {
        ...state,
        score: state.score + action.score,
      };
    case ADD_PIECE:
      return {
        ...state,
        requiredPieces: [...state.requiredPieces, action.piece],
      };
    default:
      return state;
  }
};

export default gameReducer;
