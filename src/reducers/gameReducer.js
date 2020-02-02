const initialState = {
  id: null,
  roomCode: null,
  players: {},
  state: 'lobby',
  level: null,
  selectedPiece: '',
  score: 0,
  requiredPieces: [],
};

const PLAYER_ID = 'PLAYER_ID';
const SYNCHRONIZE = 'SYNCHRONIZE';
const START = 'START_GAME';
const ADD_PIECE = 'ADD_PIECE';
const ADD_SCORE = 'ADD_SCORE';
const SELECT_PIECE = 'SELECT_PIECE';
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

export const addScoreAction = score => ({
  type: ADD_SCORE,
  score,
});

export const selectPieceAction = piece => ({
  type: SELECT_PIECE,
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
    case SELECT_PIECE:
      return {
        ...state,
        selectedPiece: action.piece,
      };
    case MATCH_PIECE:
      return {
        ...state,
        selectedPiece: '',
        requiredPieces: state.requiredPieces.filter(piece => piece !== action.pieceType),
        score: state.score + action.score,
      };

    default:
      return state;
  }
};

export default gameReducer;
