const initialState = {
  score: 0,
  requiredPieces: [],
  level: {},
  selectedPiece: '',
};

const START = 'START_GAME';
const ADD_PIECE = 'ADD_PIECE';
const ADD_SCORE = 'ADD_SCORE';
const SELECT_PIECE = 'SELECT_PIECE';
const DESELECT_PIECE = 'DESELECT_PIECE';

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
export const deselectPieceeAction = piece => ({
  type: DESELECT_PIECE,
  piece,
});

const gameReducer = (state = initialState, action) => {
  switch (action.type) {
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
    case DESELECT_PIECE:
      return {
        ...state,
        selectedPiece: '',
      };
    default:
      return state;
  }
};

export default gameReducer;
